import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import stockApiService from "./stockApiService";

const initialState = {
  data: {},
  companies: [],
  companyInfo: {},
  isError: false,
  isSuccess: false,
  isChartLoading: false,
  isCompaniesLoading: false,
  message: "",
};

export const getStockInfo = createAsyncThunk(
  "stockApi/getStockInfo",
  async (input, thunkAPI) => {
    try {
      return await stockApiService.getStockInfo(input);
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

export const getCompanies = createAsyncThunk(
  "stockApi/getCompanies",
  async (input, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await stockApiService.getCompanies(input, token);
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

export const stockApiSlice = createSlice({
  name: "stockApi",
  initialState,
  reducers: {
    reset: (state) => {
      state.isChartLoading = false;
      state.isCompaniesLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.companies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStockInfo.pending, (state) => {
        state.isChartLoading = true;
      })
      .addCase(getStockInfo.fulfilled, (state, action) => {
        state.isChartLoading = false;
        state.isSuccess = true;
        state.data = { ...action.payload[0] };
        state.companyInfo = { ...action.payload[1] };
      })
      .addCase(getStockInfo.rejected, (state, action) => {
        state.isChartLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = {};
        state.companyInfo = {};
      })
      .addCase(getCompanies.pending, (state) => {
        state.isCompaniesLoading = true;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.isCompaniesLoading = false;
        state.isSuccess = true;
        state.companies = action.payload;
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.isCompaniesLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.companies = [];
      });
  },
});

export const { reset } = stockApiSlice.actions;
export default stockApiSlice.reducer;
