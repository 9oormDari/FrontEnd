import { fetchData } from '../util'; // 적절한 fetchData 파일 경로로 변경하세요

export namespace __User {
    const BASE_URL = "https://goormdari.shop";

    // 로그인 함수
    export async function login(username: string, password: string) {
        const url = `${BASE_URL}/auth/login`;

        const body = {
            username,
            password,
        };

        const response = await fetchData({
            url,
            method: 'POST',
            body,
        });

        // 로그인 성공 시 accessToken을 localStorage에 저장
        const { accessToken } = response;
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken); // tokenType 없이 accessToken만 저장
        }

        return response; // 필요한 경우 호출하는 쪽에서 추가 처리
    }

    export async function register(
        nickname: string,
        username: string,
        password: string
    ) {
        const url = `${BASE_URL}/auth/signup`;

        const body = {
            nickname,
            username,
            password,
        };

        return fetchData({
            url,
            method: 'POST',
            body,
        });
    }
}
