import { useEffect, useState } from 'react';
import cn from '../../lib/cn';
import BlueCloud from '../../assets/GoalPage/BlueCloud.svg';
import ColorCloud from '../../assets/GoalPage/ColorCloud.svg';
import Rainbow1 from '../../assets/GoalPage/Rainbow1.svg';
import Rainbow2 from '../../assets/GoalPage/Rainbow2.svg';
import CloudComponent from './GoormScreen/CloudComponent';
import { API } from '../../lib/api/index.ts';

interface Cloud {
    cloudType: string;
    colStart: number;
    rowStart: number;
    hidden: boolean;
}

export default function GoormScreen() {
    const [stage, setStage] = useState<number>(0);
    const [myId, setMyId] = useState<string>('');
    const [clouds, setClouds] = useState<Cloud[]>([]); 

    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const response = await API.User.getMyInfo();

                if (response.status === 'OK' && response.data) {
                    // 사용자 ID 설정
                    setMyId(response.data.id);

                    // 'data' 배열이 존재하고 배열인지 확인 후 길이 설정
                    if (response.data.data && Array.isArray(response.data.data)) {
                        const dataCount = response.data.data.length;
                        setStage(dataCount);
                    } else {
                        // 'data' 배열이 없거나 배열이 아닌 경우 0으로 설정
                        setStage(0);
                    }
                } else {
                    console.error('응답 상태가 OK가 아니거나 데이터가 없습니다.');
                    setStage(0);
                }
            } catch (error) {
                console.error('내 정보를 불러오는 중 오류가 발생했습니다:', error);
                setStage(0);
            }
        };

        fetchMyData();
    }, []);

    useEffect(() => {
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
    }, [stage]); // stage가 변경될 때마다 실행

    // 임시로 집어넣은 구름 단계 증가 함수
    const increaseStage = () => {
        setStage((prev) => (prev < 4 ? prev + 1 : prev));
    };

    // 구름 증가시키는데 천천히 증가하도록 설정
    useEffect(() => {
        if (stage < 4) { // 최대 스테이지가 4라면
            const timer = setTimeout(() => {
                increaseStage();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [stage]);

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full',
                'relative bg-gradient-to-b from-[#5A82F1] to-[#DAE4FF]',
                'p-2 md:p-10 h-[30vh] md:h-[75vh]'
            )}
        >
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
