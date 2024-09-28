import { useState } from 'react';
import cn from '../../lib/cn';
import BlueCloud from '../../assets/GoalPage/BlueCloud.svg';
import ColorCloud from '../../assets/GoalPage/ColorCloud.svg';
import Rainbow1 from '../../assets/GoalPage/Rainbow1.svg';
import Rainbow2 from '../../assets/GoalPage/Rainbow2.svg';
import CloudComponent from './GoormScreen/CloudComponent';

interface Cloud {
    cloudType: string;
    colStart: number;
    rowStart: number;
    hidden: boolean;
}

export default function GoormScreen() {
    const [stage, setStage] = useState<number>(0);

    const clouds: Cloud[] = [
        {
            cloudType: stage === 1 ? ColorCloud : BlueCloud,
            colStart: 1,
            rowStart: 1,
            hidden: stage === 0,
        },
        {
            cloudType: stage === 2 ? ColorCloud : BlueCloud,
            colStart: 2,
            rowStart: 2,
            hidden: stage < 2,
        },
        {
            cloudType: stage === 3 ? ColorCloud : BlueCloud,
            colStart: 3,
            rowStart: 1,
            hidden: stage < 3,
        },
        {
            cloudType: stage === 4 ? ColorCloud : BlueCloud,
            colStart: 4,
            rowStart: 2,
            hidden: stage < 4,
        },
    ];

    // 임시로 집어넣은 구름 단계 증가 함수
    const increaseStage = () => {
        setStage((prev) => (prev < 4 ? prev + 1 : prev));
    };

    // 임시로 집어넣은 구름 단계 감소 함수
    const decreaseStage = () => {
        setStage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full',
                'relative bg-gradient-to-b from-[#5A82F1] to-[#DAE4FF]',
                'p-2 md:p-10 h-[30vh] md:h-[60vh]'
            )}
        >
            {/* 단계 조절 버튼 */}
            <div className="absolute top-4 right-4 flex space-x-2">
                <button
                    onClick={decreaseStage}
                    className="px-4 py-2 bg-white rounded shadow"
                    disabled={stage === 0}
                >
                    단계 감소
                </button>
                <button
                    onClick={increaseStage}
                    className="px-4 py-2 bg-white rounded shadow"
                    disabled={stage === 4}
                >
                    단계 증가
                </button>
            </div>

            <div className="relative grid grid-cols-4 grid-rows-2 gap-2 md:gap-4 mt-8">
            {clouds.map((cloud, index) => (
                <CloudComponent
                key={index}
                cloudType={cloud.cloudType}
                colStart={cloud.colStart}
                rowStart={cloud.rowStart}
                hidden={cloud.hidden}
                />
            ))}
                
                {/* 무지개 이미지를 절대 위치로 배치 */}
                <div className="absolute inset-x-0 top-[90px] md:top-[242px] flex justify-center transform -translate-y-1/2">
                    {/* 무지개 이미지 */}
                    <img
                        src={Rainbow1}
                        alt="첫 번째 무지개"
                        className={`w-1/4 ${stage >= 2 ? "" : "invisible"}`}
                    />
                    <img
                        src={Rainbow2}
                        alt="두 번째 무지개"
                        className={`w-1/4 ${stage >= 3 ? "" : "invisible"}`}
                    />
                    <img
                        src={Rainbow1}
                        alt="세 번째 무지개"
                        className={`w-1/4 ${stage >= 4 ? "" : "invisible"}`}
                    />
                </div>
            </div>
        </div>
    );
}
