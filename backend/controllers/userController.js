const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const User = require("../models/userModel");
const Symbol = require("../models/symbolsModel");

let yesterday = +new Date().getMonth();

// Set an interval so that all the information in the database updates every 24 hours
setInterval(() => {
  updateDatabase(yesterday);
  yesterday = +new Date().getMonth();
}, 86400000);

// This is the function that will run every 24 hours and it will update the investments, chart data
// profits and everything for each user, and it will also update the symbols collection with the
// correct object of symbols
const updateDatabase = async (yesterday) => {
  // Update all the users
  const users = await User.find({});
  const today = +new Date().getMonth();
  let stocks = {};
  let apiKey = process.env.API_KEY;
  for (let i = 0; i < users.length; i++) {
    let now = Math.floor(new Date().getTime() / 1000); // This is the current moment in unix timestamp
    let totalValue = 0;
    let months = [
      ["Jan", 31],
      ["Feb", 28],
      ["Mar", 31],
      ["Apr", 30],
      ["May", 31],
      ["Jun", 30],
      ["Jul", 31],
      ["Aug", 30],
      ["Sep", 31],
      ["Oct", 31],
      ["Nov", 30],
      ["Dec", 31],
    ];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // new Date().getDay() will give you "01" if it's the first day, and by making it a number you take the "0" away
    let day = +new Date().getDay();
    let tempInvestments = [];
    for (let j = 0; j < users[i]["investments"].length; j++) {
      // Extract all the investments and use the spread operator to create new copies of each and put them
      // in tempInvestments to be modified
      tempInvestments.push({ ...users[i]["investments"][j] });
    }
    let tempInfo = [
      { ...users[i]["info"][0] },
      { ...users[i]["info"][1] },
      { ...users[i]["info"][2] },
      { ...users[i]["info"][3] },
    ];
    let tempChartData = [];
    for (let j = 0; j < 3; j++) {
      tempChartData.push({ ...users[i]["chartData"][j] });
    }
    let tempDays = users[i]["days"] + 1;

    // Go through each investments for each user and update the market value, gain and other information
    for (let i = 0; i < tempInvestments.length; i++) {
      if (!stocks[tempInvestments[i]["ticker"]]) {
        const stockData = await axios.get(
          `https://finnhub.io/api/v1/stock/candle?symbol=${
            tempInvestments[i]["ticker"]
          }&resolution=5&from=${now - 500000}&to=${now}&token=${apiKey}`
        );
        const currentValue =
          stockData.data["c"][stockData.data["c"].length - 1];
        stocks[tempInvestments[i]["ticker"]] = currentValue;
      }
      tempInvestments[i]["value"] = +(
        tempInvestments[i]["shares"] * stocks[tempInvestments[i]["ticker"]]
      ).toFixed(2);
      totalValue += tempInvestments[i]["value"];
      tempInvestments[i]["gain"] = [
        +(
          ((tempInvestments[i]["value"] - tempInvestments[i]["price"]) /
            tempInvestments[i]["price"]) *
          100
        ).toFixed(2),
        +(tempInvestments[i]["value"] - tempInvestments[i]["price"]).toFixed(2),
      ];
    }

    // If the daily profit chart has less than 31 days of information, then just push the information for today
    // but if it's more than 31 days, then shift it and then push it, because I want the max amount of data
    // to be 31 for the daily
    if (tempChartData[0]["values"].length < 31) {
      tempChartData[0]["values"].push(
        +(totalValue - tempInfo[2].number).toFixed(2)
      );
      tempChartData[0]["names"].push(days[day]);
    } else {
      tempChartData[0]["values"].shift();
      tempChartData[0]["names"].shift();
      tempChartData[0]["values"].push(
        +(totalValue - tempInfo[2].number).toFixed(2)
      );
      tempChartData[0]["names"].push(days[day]);
    }

    // If the amount of days since the account was created is divisible by 7 (so that means that a new week passed), then
    // I take the profit information from the last 7 days and I add it and then, if the amount of data in the weekly profit
    // is smaller than 30, then push the information in, but if it's bigger than 30, then shift it and then push it
    if ((tempDays - 1) % 7 === 0) {
      let newEntry = 0;
      for (
        let i = tempChartData[0]["values"].length - 1;
        i > tempChartData[0]["values"].length - 8;
        i--
      ) {
        newEntry += tempChartData[0]["values"][i];
      }
      if (tempChartData[1]["values"].length < 30) {
        tempChartData[1]["values"].push(+newEntry.toFixed(2));
        tempChartData[1]["names"].push(
          String(tempChartData[1]["values"].length)
        );
      } else {
        tempChartData[1]["values"].shift();
        tempChartData[1]["names"].shift();
        tempChartData[1]["values"].push(+newEntry.toFixed(2));
        tempChartData[1]["names"].push(
          String(
            +tempChartData[1]["names"][tempChartData[1]["names"].length - 1] + 1
          )
        );
      }
    }
    tempInfo[2]["number"] = totalValue;
    tempInfo[3]["number"] = +(
      ((tempInfo[2]["number"] - tempInfo[1]["number"]) /
        tempInfo[1]["number"]) *
      100
    ).toFixed(2);
    if (today !== yesterday) {
      let value = 0;
      if (tempChartData[0]["values"].length <= months[yesterday][1]) {
        value = tempChartData[0]["values"].reduce((prev, curr) => {
          return prev + curr;
        });
      } else {
        for (
          let i = tempChartData[0]["values"].length - 1;
          i < tempChartData[0]["values"].length - months[yesterday][1] - 1;
          i--
        ) {
          value += tempChartData[0]["values"][i];
        }
      }
      if (tempChartData[2]["values"].length < 30) {
        tempChartData[2]["values"].push(+value.toFixed(2));
        tempChartData[2]["names"].push(months[yesterday][0]);
      } else {
        tempChartData[2]["values"].shift();
        tempChartData[2]["names"].shift();
        tempChartData[2]["values"].push(+value.toFixed(2));
        tempChartData[2]["names"].push(months[yesterday][0]);
      }
    }
    for (let i = 0; i < tempInvestments.length; i++) {
      tempInvestments[i]["percent"] = +(
        (tempInvestments[i]["value"] / totalValue) *
        100
      ).toFixed(2);
    }
    let update = {
      investments: tempInvestments,
      days: tempDays,
      info: tempInfo,
      chartData: tempChartData,
    };
    let updated = await User.findOneAndUpdate({ _id: users[i]._id }, update, {
      new: true,
    });
  }

  // Update the symbols
  let symbols = {};
  const apiSymbols = await axios.get(
    `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${apiKey}`
  );
  for (let i = 0; i < apiSymbols.data.length; i++) {
    symbols[apiSymbols.data[i]["displaySymbol"]] = {
      type: apiSymbols.data[i]["type"],
      name: apiSymbols.data[i]["description"],
      symbol: apiSymbols.data[i]["symbol"],
    };
  }
  await Symbol.deleteMany({});
  await Symbol.create({
    symbols: symbols,
  });
};

//@desc Register a new user
//@route /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if all the fields are correct
  if (!email || !password) {
    res.status(400);
    throw new Error("Please insert all of the fields!");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the user
  const user = await User.create({
    email,
    password: hashedPassword,
    days: 1,
    investments: [],
    recentActivity: [{}, {}, {}, {}, {}],
    info: [
      {
        image: "available",
        title: "Amount available",
        number: 1000000,
      },
      {
        image: "invested",
        title: "Amount invested",
        number: 0,
      },
      {
        image: "currentPositive",
        title: "Current Value",
        number: 0,
      },
      {
        image: "ROI",
        title: "ROI",
        number: 0,
      },
    ],
    chartData: [
      { names: [], values: [] },
      { names: [], values: [] },
      { names: [], values: [] },
    ],
  });

  if (user) {
    res.status(200).json({
      email: user.email,
      investments: user.investments,
      recentActivity: user.recentActivity,
      chartData: user.chartData,
      info: user.info,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User data invalid!");
  }
});

// @desc  Login user
// @route /api/users
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = await User.findOne({ email });

  // Verify that the user exists and that the password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      email: user.email,
      investments: user.investments,
      recentActivity: user.recentActivity,
      chartData: user.chartData,
      info: user.info,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials!");
  }
});

// @desc  Update user info
// @route /api/update
// @access Public
const updateUserInfo = asyncHandler(async (req, res) => {
  const { investments, recentActivity, info } = req.body;
  let update = {
    investments,
    recentActivity,
    info,
  };
  let updated = await User.findByIdAndUpdate(req.user.id, update, {
    new: true,
  });
  res.status(200).json(updated);
});

// @desc  Update user info when accessing profile page
// @route /api/update
// @access Public
const getUserInfo = asyncHandler(async (req, res) => {
  const { investments, recentActivity, info, chartData, days } = req.user;

  res.status(200).json({
    investments: investments,
    recentActivity: recentActivity,
    chartData: chartData,
    info: info,
    days: days,
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  updateUserInfo,
  getUserInfo,
};
