import { useState } from 'react';
import cn from '../../lib/cn';
import BlueCloud from '../../assets/GoalPage/BlueCloud.svg';
import ColorCloud from '../../assets/GoalPage/ColorCloud.svg';
import Rainbow1 from '../../assets/GoalPage/Rainbow1.svg';
import Rainbow2 from '../../assets/GoalPage/Rainbow2.svg';
import CloudComponent from './GoormScreen/CloudComponent';
import RainbowComponent from './GoormScreen/RainbowComponent';

interface Cloud {
    cloudType: string;
    colStart: number;
    rowStart: number;
    hidden: boolean;
}

interface Rainbow {
    src: string;
    colStart: number;
    colSpan: number;
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
            hidden: stage === 0
        },
        {
            cloudType: stage === 2 ? ColorCloud : BlueCloud,
            colStart: 2,
            rowStart: 2,
            hidden: stage < 2
        },
        {
            cloudType: stage === 3 ? ColorCloud : BlueCloud,
            colStart: 3,
            rowStart: 1,
            hidden: stage < 3 
        },
        {
            cloudType: stage === 4 ? ColorCloud : BlueCloud, 
            colStart: 4,
            rowStart: 2,
            hidden: stage < 4 
        },
    ];
    const rainbows: Rainbow[] = [
        // 첫 번째 구름과 두 번째 구름 사이
        { src: Rainbow1, colStart: 1, colSpan: 2, rowStart: 1, hidden: stage < 2 }, 
        // 두 번째 구름과 세 번째 구름 사이
        { src: Rainbow2, colStart: 2, colSpan: 2, rowStart: 2, hidden: stage < 3 }, 
        // 세 번째 구름과 네 번째 구름 사이
        { src: Rainbow1, colStart: 3, colSpan: 2, rowStart: 1, hidden: stage < 4 }, 
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
                "flex flex-col items-center justify-center w-full",
                "relative bg-gradient-to-b from-[#5A82F1] to-[#DAE4FF]",
                "p-2 md:p-10 h-[30vh] md:h-[70vh]"
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

            <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-4 mt-8">
                {clouds.map((cloud, index) => (
                    <CloudComponent
                        key={index}
                        cloudType={cloud.cloudType}
                        colStart={cloud.colStart}
                        rowStart={cloud.rowStart}
                        hidden={cloud.hidden}
                    />
                ))}
            </div>
        </div>
    );
}