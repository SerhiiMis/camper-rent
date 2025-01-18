import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  headers: { "content-type": "application/json", "Cache-Control": "no-cache" },
});

const URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const defaultParams = {
  page: 1,
  limit: 4,
};

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}/campers`);
      return { items: res.data.items, total: res.data.total };
    } catch (error) {
      console.log("Error while fetching data:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (customParams = {}, thunkAPI) => {
    try {
      const params = { ...defaultParams, ...customParams };
      const res = await apiClient.get("/campers", {
        params,
      });
      return { items: res.data.items, total: res.data.total };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}/campers/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/fetchOne",
  async (camperId, thunkAPI) => {
    try {
      const res = await apiClient.get("/campers", { camperId });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
