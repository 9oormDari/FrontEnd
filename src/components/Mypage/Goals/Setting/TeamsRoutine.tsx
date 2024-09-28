import React from 'react';

interface TeamsRoutineProps {
    routineData: {
        routine1: string;
        routine2: string;
        routine3: string;
        routine4: string;
    };
}

const TeamsRoutine: React.FC<TeamsRoutineProps> = ({ routineData }) => {
    return (
        <div className="w-full">
            <div className="bg-[#E9EBF8] rounded-lg shadow-lg w-full drop-shadow-md">
                <div className="bg-[#5A82F1] h-[50px] rounded-t-lg flex items-center justify-center">
                    <h2 className="text-[20px] font-bold text-center text-white">
                        기초 체력 기르기
                    </h2>
                </div>

                <div className="p-4 space-y-4">
                    <div className="flex items-start">
                        <label className="w-1/3 font-bold">루틴</label>
                        <div className="w-2/3 space-y-2">
                            <div className="text-lg font-bold">
                                {routineData.routine1 || '루틴이 없습니다'}
                            </div>
                            <div className="text-lg font-bold">
                                {routineData.routine2 || '루틴이 없습니다'}
                            </div>
                            <div className="text-lg font-bold">
                                {routineData.routine3 || '루틴이 없습니다'}
                            </div>
                            <div className="text-lg font-bold">
                                {routineData.routine4 || '루틴이 없습니다'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-center">
                <button
                    className="w-full py-3 bg-gray-400 text-white font-bold rounded-lg mt-4 transition-transform duration-300 cursor-not-allowed"
                    disabled
                >
                    새로운 목표 설정하기
                </button>
            </div>
        </div>
    );
};

export default TeamsRoutine;
