import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (params) => {
  const response = await axios.get('/campers', { params });
  return response.data;
});

export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (id) => {
  const response = await axios.get(`/campers/${id}`);
  return response.data;
});