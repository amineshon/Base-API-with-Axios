import axios from "axios";

export const mainAxios = axios.create({
	baseURL: `https://api.aminmohammadi.me`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
});

mainAxios.interceptors.request.use(function (config) {
	const token = localStorage.getItem("token");
	config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export function axiosGet(_url) {
	return mainAxios.get(_url);
}

export function axiosPost(_url, body) {
	return mainAxios.post(_url, body);
}
