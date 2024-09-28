import { useEffect, useState } from 'react';

import { API } from '../../../lib/api'; // API 모듈 경로에 맞게 import
import CreateTeam from './Setting/CreateTeam'; // CreateTeam 컴포넌트를 임포트합니다.
import InputCodeField from './Setting/InputCodeField'; // InviteCodeField 컴포넌트를 임포트합니다.
import NotGood from '../../../assets/NotGood.svg';
import Pending from '../../Pending/Loading.tsx'; // Pending 컴포넌트 추가
import TeamsRoutine from './Setting/TeamsRoutine'; // TeamsRoutine 컴포넌트 import

const SettingGoals: React.FC = () => {
    const [showCreateTeam, setShowCreateTeam] = useState(false);
    const [showInviteCode, setShowInviteCode] = useState(false);
    const [userRoutine, setUserRoutine] = useState(null); // 유저 루틴 상태 관리
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    // 화면 렌더될 때 기록 조회 및 유저 루틴 조회
    useEffect(() => {
        const fetchUserRoutine = async () => {
            try {
                const routineResponse = await API.Team.getUserRoutine();
                console.log('유저 루틴 조회 성공:', routineResponse);
                if (routineResponse.data) {
                    setUserRoutine(routineResponse.data); // 루틴이 있으면 상태에 저장
                }
            } catch (error) {
                console.error('유저 루틴 조회 실패:', error);
            } finally {
                setLoading(false); // 데이터가 로드되면 로딩 상태 해제
            }
        };

        fetchUserRoutine(); // 유저 루틴을 조회하고 상태에 저장
    }, []); // 빈 배열을 사용하여 컴포넌트가 처음 렌더링될 때만 실행

    const handleCreateTeamClick = () => {
        setShowCreateTeam(true);
    };

    const handleInviteCodeClick = () => {
        setShowInviteCode(true);
    };

    if (loading) {
        return <Pending height={500} />; // 로딩 중일 때 Pending 컴포넌트를 표시
    }

    if (showCreateTeam) {
        return <CreateTeam />;
    }

    if (showInviteCode) {
        return <InputCodeField />;
    }

    // 유저 루틴이 있으면 TeamsRoutine 컴포넌트를 렌더링
    if (userRoutine) {
        return <TeamsRoutine routineData={userRoutine} />;
    }

    // 유저 루틴이 없으면 팀 생성 UI를 표시
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={NotGood} alt="Not Good" className="w-2/5 h-2/5" />
            <div className="text-[20px] md:text-[30px] font-bold mt-8">
                생성된 팀이 없어요! <br />
                팀을 만들어 주세요
            </div>
            <div className="flex flex-col gap-2.5 mt-5 md:mt-10">
                <button
                    className={`w-[500px] h-[70px] bg-[#5A82F1] rounded-lg text-white text-base md:text-2xl font-bold transition-transform duration-300`}
                    onClick={handleCreateTeamClick}
                >
                    팀 만들기
                </button>
                <button
                    className={`w-[500px] h-[70px] bg-[#797979] rounded-lg text-white text-base md:text-2xl font-bold transition-transform duration-300`}
                    onClick={handleInviteCodeClick}
                >
                    초대 코드 입력하기
                </button>
            </div>
        </div>
    );
};

export default SettingGoals;
