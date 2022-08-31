import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const API_URL = "/api/symbols";

const formatFinancialData = (data) => {
  const result = {};

  // Format the financial information that you got from the API so that the year is the key and the information
  // is the value, so it's easier to map over and find the information for a particular year
  for (let i = 0; i < data.length; i++) {
    result[data[i]["year"]] = data[i]["report"];
  }
  return result;
};

const formatStockData = (data) => {
  const values = [];
  const categoryData = [];

  for (let i = 0; i < data["c"].length; i++) {
    // Create the chart data array in the correct order (open, close, low, high)
    values.push([data["o"][i], data["c"][i], data["l"][i], data["h"][i]]);

    // Create the x axis date information by taking the unix timestamp and converting it
    // into a human readable date
    categoryData.push(
      new Date(data["t"][i] * 1000).toLocaleString().split(",")[1]
    );
  }

  return {
    categoryData,
    values,
  };
};

const getStockInfo = async (input) => {
  let now = Math.floor(new Date().getTime() / 1000);
  const response = [{}, {}];

  // Get the candlestick information from the API for a particular symbol
  const stockInfoResponse = await axios.get(
    `https://finnhub.io/api/v1/stock/candle?symbol=${input}&resolution=5&from=${
      now - 500000
    }&to=${now}&token=${apiKey}`
  );

  // Get the financial information for the company that has that symbol
  const financialResponse = await axios.get(
    `https://finnhub.io/api/v1/stock/financials-reported?symbol=${input}&token=${apiKey}`
  );

  // Get some basic information about the company that has that symbol
  const companyInfo = await axios.get(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${input}&token=${apiKey}`
  );

  // Insert the information that you got from the API calls into the array "response".
  // The reason why the information is divided is because it's more easily accessible and more clear
  response[0]["stockInfoResponse"] = {
    symbol: input,
    info: formatStockData(stockInfoResponse.data),
  };
  response[0]["financialResponse"] = formatFinancialData(
    financialResponse.data.data
  );
  response[1]["companyInfo"] = companyInfo.data;
  return response;
};

const getCompanies = async (input, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + `?symbol=${input}`, config);
  return response.data.symbols;
};

const stockApiService = {
  getStockInfo,
  getCompanies,
};

export default stockApiService;
