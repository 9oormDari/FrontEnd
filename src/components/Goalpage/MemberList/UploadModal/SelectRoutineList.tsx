// SelectRoutineList.tsx
import React, { useEffect, useState } from 'react';
import { API } from '../../../../lib/api/index.ts';

interface SelectRoutineListProps {
    index: number; // 루틴 인덱스
    setIndex: (index: number) => void; // 루틴 인덱스를 업데이트하는 함수
    selectedRoutine: string; // 선택된 루틴
    setSelectedRoutine: (routine: string) => void; // 루틴 상태를 업데이트하는 함수
    onNext: () => void; // 다음 단계로 이동
    onPrevious: () => void; // 이전 단계로 이동
    onCancel: () => void; // 취소 시 모달 닫기
}

export default function SelectRoutineList({
    index,
    setIndex,
    selectedRoutine,
    setSelectedRoutine,
    onNext,
    onPrevious,
    onCancel,
}: SelectRoutineListProps) {
    const [routines, setRoutines] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoutines = async () => {
            setLoading(true);
            try {
                const response = await API.User.getUserRoutine();

                if (response.status === 'OK' && response.data) {
                    const routineList: string[] = Object.values(response.data);
                    setRoutines(routineList);
                }
            } catch (e) {
                setError('루틴 목록을 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchRoutines();
    }, []);

    const handleSelect = (routine: string, routineIndex: number) => {
        setSelectedRoutine(routine);
        setIndex(routineIndex);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-3 text-base md:text-xl md:p-4">
                {routines.map((routine, i) => (
                    <label key={routine} className="flex items-center space-x-3">
                        <input
                            type="radio"
                            value={routine}
                            checked={selectedRoutine === routine}
                            onChange={() => handleSelect(routine, i)} // 루틴과 인덱스를 함께 업데이트
                            className="h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                        />
                        <span className="text-gray-700">{routine}</span>
                    </label>
                ))}
            </div>
            <div className="flex justify-between w-full mt-4">
                <button
                    className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
                    onClick={onNext}
                    disabled={index === -1} // 인덱스가 선택되지 않은 경우 비활성화
                >
                    다음
                </button>
            </div>
            <div className="flex justify-between w-full mt-2">
                <button
                    className="w-1/2 bg-gray-300 text-black rounded-lg py-2 hover:bg-gray-400 mr-2"
                    onClick={onPrevious}
                >
                    이전
                </button>
                <button
                    className="w-1/2 bg-red-500 text-white rounded-lg py-2 hover:bg-red-600"
                    onClick={onCancel}
                >
                    취소
                </button>
            </div>
        </div>
    );
}
