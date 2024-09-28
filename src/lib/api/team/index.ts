import { fetchData } from '../util'; // 경로에 맞게 fetchData를 import

export namespace __Team {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
}
