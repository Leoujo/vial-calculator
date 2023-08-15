import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
})