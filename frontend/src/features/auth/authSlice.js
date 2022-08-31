import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sortInvestments } from "../../utils/sortInvestments";
import authService from "./authService";

// Get user from localstorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? { email: user["email"], token: user["token"] } : null,
  recentActivity: user ? user.recentActivity : [{}, {}, {}, {}, {}],
  investments: user ? user.investments : [],
  chartData: user
    ? user.chartData
    : [
        { names: [], values: [] },
        { names: [], values: [] },
        { names: [], values: [] },
      ],
  info: user
    ? user.info
    : [
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
  currentCompany: "IBM",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.registerUser(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const updateUserInfo = createAsyncThunk(
  "auth/update",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await authService.updateUserInfo(userData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "auth/getInfo",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await authService.getUserInfo(token);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    reorderInvestments: (state, action) => {
      state.investments = [
        ...sortInvestments(action.payload, state.investments),
      ];
    },
    changeCompany: (state, action) => {
      state.currentCompany = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = {
          email: action.payload.email,
          token: action.payload.token,
        };
        state.investments = [...action.payload.investments];
        state.recentActivity = [...action.payload.recentActivity];
        state.info = [...action.payload.info];
        state.chartData = [...action.payload.chartData];
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.recentActivity = [{}, {}, {}, {}, {}];
        state.investments = [];
        state.info = [];
        state.chartData = [];
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = {
          email: action.payload.email,
          token: action.payload.token,
        };
        state.investments = [...action.payload.investments];
        state.recentActivity = [...action.payload.recentActivity];
        state.info = [...action.payload.info];
        state.chartData = [...action.payload.chartData];
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.recentActivity = [{}, {}, {}, {}, {}];
        state.investments = [];
        state.info = [];
        state.chartData = [];
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.recentActivity = [{}, {}, {}, {}, {}];
        state.investments = [];
        state.info = [];
        state.chartData = [];
      })
      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recentActivity = [...action.payload.recentActivity];
        state.investments = [...action.payload.investments];
        state.info = [...action.payload.info];
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.investments = [...action.payload.investments];
        state.info = [...action.payload.info];
        state.chartData = [...action.payload.chartData];
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, reorderInvestments, changeCompany } = authSlice.actions;
export default authSlice.reducer;
