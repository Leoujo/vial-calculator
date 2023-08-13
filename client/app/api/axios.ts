import axios from 'axios';

const URL = "http://localhost:3001"

export const axiosClient = axios.create({
	baseURL: URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
})