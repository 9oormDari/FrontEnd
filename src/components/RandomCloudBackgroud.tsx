import React, { useEffect, useState } from 'react';

import CloudOne from '../assets/cloud/cloud1.png';
import CloudThree from '../assets/cloud/cloud3.png';
import CloudTwo from '../assets/cloud/cloud2.png';
import { useLocation } from 'react-router-dom'; // 경로 변경 감지를 위한 useLocation import

const cloudImages = [CloudOne, CloudTwo, CloudThree];

interface CloudProps {
    src: string;
    x: number;
    y: number;
}

const Cloud: React.FC<CloudProps> = ({ src, x, y }) => (
    <div
        className="absolute cloud-fade-in" // 애니메이션 클래스 적용
        style={{
            top: `${y}vh`,
            left: `${x}vw`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '500px', // 구름 이미지의 너비
            height: '500px', // 구름 이미지의 높이
        }}
    />
);

const RandomCloudBackground: React.FC = () => {
    // 여러 개의 고정된 좌표 세트 중 하나를 랜덤으로 선택
    const cloudPositionSets = [
        [
            { x: 5, y: 20 }, // 첫 번째 좌표 세트
            { x: 70, y: 50 },
            { x: 20, y: 100 },
        ],
        [
            { x: 15, y: 20 }, // 두 번째 좌표 세트
            { x: 60, y: 40 },
            { x: 25, y: 90 },
        ],
        [
            { x: 10, y: 20 }, // 세 번째 좌표 세트
            { x: 60, y: 60 },
            { x: 0, y: 70 },
        ],
    ];

    // 경로 변경 감지
    const location = useLocation();

    // 랜덤으로 좌표 세트를 선택
    const [selectedPositionSet, setSelectedPositionSet] = useState(
        cloudPositionSets[0]
    );
    const [key, setKey] = useState(0); // 스타일을 다시 적용하기 위한 키

    useEffect(() => {
        const randomIndex = Math.floor(
            Math.random() * cloudPositionSets.length
        );
        setSelectedPositionSet(cloudPositionSets[randomIndex]);
        setKey((prevKey) => prevKey + 1); // 키를 증가시켜 스타일을 다시 적용
    }, [location.pathname]); // 경로 변경 시마다 좌표 세트 변경

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
            {cloudImages.map((cloud, index) => (
                <Cloud
                    key={index}
                    src={cloud}
                    x={selectedPositionSet[index].x}
                    y={selectedPositionSet[index].y}
                />
            ))}
        </div>
    );
};

export default RandomCloudBackground;
