import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAuthJWTHeader, clearAuthJWTHeader } from "./axiosInstance.js";

const signup = createAsyncThunk("auth/signup", async (creds, { rejectWithValue }) => {
	try {
		const res = await axiosInstance.post("users/register", creds);
		console.log(res);
		return res.data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const login = createAsyncThunk("auth/login", async (creds, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.post("users/login", creds);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const update = createAsyncThunk("auth/update", async (creds, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.patch("users/update", creds, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.post("users/logout");
		clearAuthJWTHeader();
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const refresh = createAsyncThunk("auth/refresh", async (token, { rejectWithValue }) => {
	try {
		setAuthJWTHeader(token);
		const { data } = await axiosInstance.get("users/current");
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const subscribe = createAsyncThunk("auth/subscribe", async (creds, { rejectWithValue }) => {
	try {
		const res = await axiosInstance.patch("users/subscribe", creds);
		return res.data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

export { login, signup, logout, refresh, update, subscribe };