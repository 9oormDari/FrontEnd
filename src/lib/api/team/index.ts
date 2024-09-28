import { fetchData } from '../util'; // 경로에 맞게 fetchData를 import

export namespace __Team {
    const BASE_URL = 'https://goormdari.shop';

    // 팀 생성 함수
    export async function createTeam(teamInfo: {
        teamName: string;
        goal: string;
        deadline: string;
        routine1: string;
        routine2: string;
        routine3: string;
        routine4: string;
    }) {
        const url = `${BASE_URL}/team`;

        const body = {
            teamName: teamInfo.teamName,
            goal: teamInfo.goal,
            deadline: teamInfo.deadline,
            routine1: teamInfo.routine1,
            routine2: teamInfo.routine2,
            routine3: teamInfo.routine3,
            routine4: teamInfo.routine4,
        };

        // 서버에 팀 생성 요청
        return fetchData({
            url,
            method: 'POST',
            body,
            tokenOn: true,
        });
    }

    // 팀 가입 함수
    export async function joinTeam(joinCode: string) {
        const url = `${BASE_URL}/team/join/${joinCode}`;

        // 서버에 팀 가입 요청
        return fetchData({
            url,
            method: 'POST',
            tokenOn: true, // 인증이 필요한 경우 토큰 포함
        });
    }

    // 팀 초대 함수
    export async function inviteTeam(email: string) {
        const url = `${BASE_URL}/team/email/${email}`;

        // 서버에 팀 초대 요청
        return fetchData({
            url,
            method: 'POST',
            tokenOn: true, // 인증이 필요한 경우 토큰 포함
        });
    }

    // 기록 조회 함수
    export async function getHistories() {
        const url = `${BASE_URL}/histories`;

        // 서버에서 기록 조회 요청 (GET)
        return fetchData({
            url,
            method: 'GET',
            tokenOn: true, // 인증이 필요한 경우 토큰 포함
        });
    }
}
