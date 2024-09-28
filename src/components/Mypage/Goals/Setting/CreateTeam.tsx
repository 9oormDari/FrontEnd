import React, { useState } from 'react';

import cn from '../../../../lib/cn';

const CreateTeam: React.FC = () => {
    const [teamName, setTeamName] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeamName(e.target.value);
    };

    const handleNextClick = () => {
        // 다음 단계로 가는 로직 추가
        console.log('팀 이름:', teamName);
    };

    return (
        <div className="h-2/3 flex items-center justify-center">
            <div className="bg-[#E9EBF8] p-10 rounded-lg shadow-lg w-full max-w-md drop-shadow-md">
                <div className="border border-gray-300 rounded-lg overflow-hidden mb-5">
                    <div className="bg-[#5A82F1] h-[50px] flex items-center justify-center">
                        <h2 className="text-[20px] font-bold text-center text-white">
                            방 생성하기
                        </h2>
                    </div>
                    <div className="relative bg-gray-100 h-[70px] flex items-center justify-center p-4">
                        <input
                            type="text"
                            id="teamName"
                            value={teamName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        />
                    </div>
                </div>

                <button
                    onClick={handleNextClick}
                    className={cn(
                        'w-full py-3 bg-[#5A82F1] text-white font-bold rounded-lg',
                        'transition-transform duration-300 hover:scale-105'
                    )}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default CreateTeam;
