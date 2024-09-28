import { fetchData } from '../util'; // 적절한 fetchData 파일 경로로 변경하세요

export namespace __User {
    const BASE_URL = 'https://goormdari.shop';

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
            localStorage.setItem('accesstoken', accessToken); // tokenType 없이 accesstoken만 저장
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

    // 캘린더 받아오는 함수
    export async function getCalendar(month: string) {
        const url = `${BASE_URL}/calendar/${month}`;

        return fetchData({
            url,
            method: 'GET',
            tokenOn: true, // tokenOn 플래그 추가
        });
    }

    export async function getGroupMemberList() {
        const url = `${BASE_URL}/team/user-list`;

        return fetchData({
            url,
            method: 'GET',
            tokenOn: true,
        });
    }

    export async function getTeamMemberRoutine(id: string) {
        const url = `${BASE_URL}/routine/${id}`;

        return fetchData({
            url,
            method: 'GET',
            body: {
                id,
            },
            tokenOn: true,
        });
    }

    export async function getMyInfo() {
        const url = `${BASE_URL}/user/info`;

        return fetchData({
            url,
            method: 'GET',
            tokenOn: true,
        });
    }
}
