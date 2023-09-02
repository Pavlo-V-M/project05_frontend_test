import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAuthJWTHeader, clearAuthJWTHeader } from "./axiosInstance.js";

const subscribe = createAsyncThunk("auth/subscribe", async (creds, { rejectWithValue }) => {
	try {
		const res = await axiosInstance.patch("users/subscribe", creds);
		return res.data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

export { subscribe };