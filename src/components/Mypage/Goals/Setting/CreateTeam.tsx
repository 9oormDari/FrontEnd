import React, { useEffect, useState } from 'react';

import { API } from '../../../../lib/api'; // __Team 네임스페이스 경로에 맞게 import
import InviteCodeField from './InviteCodeField'; // InviteCodeField 컴포넌트를 임포트합니다.
import cn from '../../../../lib/cn';

const CreateTeam: React.FC = () => {
    const [teamName, setTeamName] = useState('');
    const [goal, setGoal] = useState('');
    const [durationMonths, setDurationMonths] = useState('');
    const [durationDays, setDurationDays] = useState('');
    const [routine1, setRoutine1] = useState('');
    const [routine2, setRoutine2] = useState('');
    const [routine3, setRoutine3] = useState('');
    const [routine4, setRoutine4] = useState('');
    const [showInviteCode, setShowInviteCode] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
        };

    // 날짜 형식을 'YYYY-MM-DD'로 변환
    const formatDate = (month: string, day: string) => {
        // 월과 일의 형식을 두 자리로 맞추기
        const formattedMonth = month.padStart(2, '0');
        const formattedDay = day.padStart(2, '0');
        return `2024-${formattedMonth}-${formattedDay}`;
    };

    const handleNextClick = async () => {
        // LocalDate 형식의 deadline 생성
        const deadline = formatDate(durationMonths, durationDays);

        try {
            // 팀 생성 API 호출
            await API.Team.createTeam({
                teamName,
                goal,
                deadline, // YYYY-MM-DD 형식의 deadline 전송
                routine1,
                routine2,
                routine3,
                routine4,
            });

            // 초대 코드 입력 필드를 보여줌
            setShowInviteCode(true);
        } catch (error) {
            console.error('팀 생성 실패:', error);
            alert('팀 생성에 실패했습니다.');
        }
    };

    useEffect(() => {
        // 모든 필드가 채워졌는지 확인
        if (
            teamName &&
            goal &&
            durationMonths &&
            durationDays &&
            routine1 &&
            routine2 &&
            routine3 &&
            routine4
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [
        teamName,
        goal,
        durationMonths,
        durationDays,
        routine1,
        routine2,
        routine3,
        routine4,
    ]);

    return (
        <div className="w-full">
            <div>
                {showInviteCode ? (
                    <InviteCodeField />
                ) : (
                    <>
                        <div className="bg-[#E9EBF8] rounded-lg shadow-lg w-full drop-shadow-md">
                            <div className="bg-[#5A82F1] h-[50px] rounded-t-lg flex items-center justify-center">
                                <h2 className="text-[20px] font-bold text-center text-white">
                                    함께할 팀을 만들어보세요
                                </h2>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center">
                                    <label className="w-1/3">팀 이름</label>
                                    <input
                                        type="text"
                                        value={teamName}
                                        onChange={handleInputChange(
                                            setTeamName
                                        )}
                                        className="w-2/3 p-2 rounded-lg bg-transparent"
                                        placeholder="팀 이름을 입력해주세요"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label className="w-1/3">목표</label>
                                    <input
                                        type="text"
                                        value={goal}
                                        onChange={handleInputChange(setGoal)}
                                        className="w-2/3 p-2 rounded-lg bg-transparent"
                                        placeholder="목표를 입력해주세요"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label className="w-1/3">기간</label>
                                    <input
                                        type="text"
                                        value={durationMonths}
                                        onChange={handleInputChange(
                                            setDurationMonths
                                        )}
                                        className="w-1/4 p-2 rounded-lg bg-transparent"
                                        placeholder="월"
                                    />
                                    <span className="mx-2">월</span>
                                    <input
                                        type="text"
                                        value={durationDays}
                                        onChange={handleInputChange(
                                            setDurationDays
                                        )}
                                        className="w-1/4 p-2 rounded-lg bg-transparent"
                                        placeholder="일"
                                    />
                                    <span className="ml-2">일</span>
                                </div>
                                <div className="flex items-start">
                                    <label className="w-1/3">루틴</label>
                                    <div className="w-2/3 space-y-2">
                                        <input
                                            type="text"
                                            value={routine1}
                                            onChange={handleInputChange(
                                                setRoutine1
                                            )}
                                            className="w-full p-2 rounded-lg bg-transparent"
                                            placeholder="루틴을 입력해주세요"
                                        />
                                        <input
                                            type="text"
                                            value={routine2}
                                            onChange={handleInputChange(
                                                setRoutine2
                                            )}
                                            className="w-full p-2 rounded-lg bg-transparent"
                                            placeholder="루틴을 입력해주세요"
                                        />
                                        <input
                                            type="text"
                                            value={routine3}
                                            onChange={handleInputChange(
                                                setRoutine3
                                            )}
                                            className="w-full p-2 rounded-lg bg-transparent"
                                            placeholder="루틴을 입력해주세요"
                                        />
                                        <input
                                            type="text"
                                            value={routine4}
                                            onChange={handleInputChange(
                                                setRoutine4
                                            )}
                                            className="w-full p-2 rounded-lg bg-transparent"
                                            placeholder="루틴을 입력해주세요"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleNextClick}
                            className={`w-full py-3 bg-[#5A82F1] text-white font-bold rounded-lg mt-4 transition-transform duration-300 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!isFormValid}
                        >
                            다음
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateTeam;
