import axios from "axios";

export const api = axios.create({
	baseURL: "https://randomuser.me/api",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
});
