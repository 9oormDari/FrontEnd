import React, { useEffect, useState } from 'react';

import ImageOne from '../../assets/loading/1.png';
import ImageThree from '../../assets/loading/3.png';
import ImageTwo from '../../assets/loading/2.png';
import cn from '../../lib/cn';

interface PendingProps {
    height: number | string; // 높이를 px 또는 vh 단위로 받음
}

const Pending: React.FC<PendingProps> = ({ height }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    // 이미지 목록을 배열로 정의
    const images = [ImageOne, ImageTwo, ImageThree];

    // 컴포넌트 마운트 시 랜덤으로 이미지 선택
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setImageUrl(images[randomIndex]);
    }, []);

    // 높이 값이 px인지 vh인지 판단하여 스타일 설정
    const heightStyle = typeof height === 'string' ? height : `${height}px`;

    return (
        <div
            className={cn(
                'fixed inset-0 flex items-center justify-center w-full'
            )} // fixed로 화면 고정, 너비는 100%, 중앙 정렬
            style={{
                height: heightStyle,
                backgroundColor: 'white', // 배경색 흰색
            }}
        >
            {/* 이미지가 중앙에 정렬된 컨테이너 */}
            <div className="flex items-center justify-center">
                {imageUrl && ( // 이미지가 설정되었을 때만 렌더링
                    <img
                        src={imageUrl}
                        alt="Pending"
                        className="animate-spin" // Tailwind의 회전 애니메이션 클래스
                        style={{
                            width: '10%', // 이미지 크기 조정 가능
                            height: '10%',
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Pending;
