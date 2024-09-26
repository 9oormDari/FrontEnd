import axios from 'axios';

export async function fetchData(args: {
	url: string;
	method: 'POST' | 'PUT' | 'GET' | 'DELETE';
	body?: any;
	isFormData?: boolean;
}): Promise<any> {
	let headers: Record<string, string> = {};

	if (!args.isFormData) {
		headers['Content-Type'] = 'application/json';
	}

	try {
		let response = await axios({
			url: args.url,
			method: args.method,
			headers,
			data: args.body
		});

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(error.response?.data?.message || 'Error executing request');
		} else {
			throw new Error('An unexpected error occurred');
		}
	}
}