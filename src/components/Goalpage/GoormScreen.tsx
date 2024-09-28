import { useEffect, useState } from 'react';
import cn from '../../lib/cn';
import BlueCloud from '../../assets/GoalPage/BlueCloud.svg';
import ColorCloud from '../../assets/GoalPage/ColorCloud.svg';
import Rainbow1 from '../../assets/GoalPage/Rainbow1.svg';
import Rainbow2 from '../../assets/GoalPage/Rainbow2.svg';
import CloudComponent from './GoormScreen/CloudComponent';
import { API } from '../../lib/api/index.ts';
import useIdStore from '../../components/idStore.ts';

interface Cloud {
    cloudType: string;
    colStart: number;
    rowStart: number;
    hidden: boolean;
}

export default function GoormScreen() {
    const [stage, setStage] = useState<number>(0);
    const [targetStage, setTargetStage] = useState<number>(0); // 목표 스테이지 상태 추가

    const [clouds, setClouds] = useState<Cloud[]>([]); 
    const id = useIdStore((state) => state.id);

    // id가 변경될 때 데이터를 가져오는 함수
    useEffect(() => {
        const fetchUserData = async () => {
            if (!id) return; // id가 없으면 실행하지 않음

            try {
                const response = await API.User.getUserStep(id);
                if (response.status === 'OK' && response.data) {
                    console.log("currentStep", response.data.currentStep);
                    setTargetStage(response.data.currentStep); // 목표 스테이지 설정
                    setStage(0); // 초기 스테이지를 0으로 설정
                } else {
                    console.error('응답 상태가 OK가 아니거나 데이터가 없습니다.');
                    setTargetStage(0);
                    setStage(0);
                }
            } catch (error) {
                console.error('내 정보를 불러오는 중 오류가 발생했습니다:', error);
                setTargetStage(0);
                setStage(0);
            }
        };

        fetchUserData();
    }, [id]);

    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const response = await API.User.currentStep();

                if (response.status === 'OK' && response.data) {
                    setStage(0);
                    setTargetStage(response.data.currentStep);
                    console.log('현재 스테이지:', response.data.currentStep);
                } else {
                    console.error(
                        '응답 상태가 OK가 아니거나 데이터가 없습니다.'
                    );
                    setStage(0);
                    setTargetStage(0);
                }
            } catch (error) {
                console.error(
                    '내 정보를 불러오는 중 오류가 발생했습니다:',
                    error
                );
                setStage(0);
            }
        };

        fetchMyData();
    }, []);


    // stage가 변경될 때 clouds 상태 업데이트
    useEffect(() => {
        console.log("Stage updated:", stage);
        const updateClouds = () => {
            const newClouds: Cloud[] = [
                {
                    cloudType: stage === 1 ? ColorCloud : BlueCloud,
                    colStart: 1,
                    rowStart: 1,
                    hidden: stage < 1,
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
    
            setClouds(newClouds); // 새로운 clouds 배열로 업데이트
        };
    
        updateClouds();
    }, [stage, targetStage]); // stage가 변경될 때마다 실행

    // 구름 증가시키는데 천천히 증가하도록 설정
    useEffect(() => {
        if (stage <= targetStage) { // 목표 스테이지를 넘지 않도록 설정
            const timer = setTimeout(() => {
                setStage((prev) => (prev < targetStage ? prev + 1 : prev)); // 목표 스테이지를 넘지 않도록 증가
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [stage, targetStage]);

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full',
                'relative bg-gradient-to-b from-[#5A82F1] to-[#DAE4FF]',
                'p-2 md:p-10 h-[30vh] md:h-[75vh]'
            )}
        >
            {targetStage === 0 && (
                <div className={cn(
                    "text-white text-base sm:text-2xl md:text-4xl font-bold",
                    "text-center flex justify-center mt-20"
                    )}
                >
                    아직 어떠한 활동도 하지 않았어요...<br />
                    어서 시작해보세요!
                </div>
            )}
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
                        className={`w-1/4 transition-opacity duration-500 ${
                            stage >= 2 ? 'opacity-100 delay-100' : 'opacity-0'
                        }`}
                    />
                    <img
                        src={Rainbow2}
                        alt="두 번째 무지개"
                        className={`w-1/4 transition-opacity duration-500 ${
                            stage >= 3 ? 'opacity-100 delay-200' : 'opacity-0'
                        }`}
                    />
                    <img
                        src={Rainbow1}
                        alt="세 번째 무지개"
                        className={`w-1/4 transition-opacity duration-500 ${
                            stage >= 4 ? 'opacity-100 delay-300' : 'opacity-0'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}
