import React, { useState } from 'react';

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
    const [showInviteCode, setShowInviteCode] = useState(false); // 상태 추가

    const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
        };

    const handleNextClick = () => {
        // 다음 단계로 가는 로직 추가
        console.log('팀 이름:', teamName);
        setShowInviteCode(true); // InviteCodeField 컴포넌트를 보여주도록 상태 변경
    };

    return (
        <div className="h-2/3 flex items-center justify-center w-full">
            <div>
                {showInviteCode ? (
                    <InviteCodeField /> // InviteCodeField 컴포넌트를 렌더링
                ) : (
                    <>
                        <div className="bg-[#E9EBF8] rounded-lg shadow-lg w-full  drop-shadow-md">
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
                            className={cn(
                                'w-full py-3 bg-[#5A82F1] text-white font-bold rounded-lg mt-4',
                                'transition-transform duration-300 hover:scale-105'
                            )}
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
