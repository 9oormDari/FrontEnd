import axios from 'axios';

export async function fetchData(args: {
    url: string;
    method: 'POST' | 'PUT' | 'GET' | 'DELETE';
    body?: any;
    isFormData?: boolean;
    tokenOn?: boolean; // tokenOn 플래그 추가
}): Promise<any> {
    let headers: Record<string, string> = {};

    if (!args.isFormData) {
        headers['Content-Type'] = 'application/json';
    }

    // tokenOn이 true일 경우, localStorage에서 accessToken을 가져와 헤더에 추가
    if (args.tokenOn) {
        const token = localStorage.getItem('accesstoken');
        if (token) {
            headers['Authorization'] = token;
        }
    }

    try {
        let response = await axios({
            url: args.url,
            method: args.method,
            headers,
            data: args.body,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || 'Error executing request'
            );
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}
