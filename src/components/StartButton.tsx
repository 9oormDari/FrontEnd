import React from 'react';
import { useNavigate } from 'react-router-dom';
import cloudImage from '../assets/cloud.png'; // assets 폴더의 cloud.png 이미지 경로

interface StartButtonProps {
    isLoggedIn: boolean;
}

const StartButton: React.FC<StartButtonProps> = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (isLoggedIn) {
            // 로그인이 되어 있으면 목표 페이지로 이동
            navigate('/goal');
        } else {
            // 로그인이 되어 있지 않으면 로그인 페이지로 이동
            navigate('/login');
        }
    };

    return (
        <button
            onClick={handleButtonClick}
            className="relative bg-transparent p-0 border-none outline-none"
        >
            <img
                src={cloudImage}
                alt="바로 이용해보기"
                className="w-44 h-24 sm:w-64 sm:h-32 text-white" // 이미지 크기 설정
            />
            <span className="absolute inset-0 flex items-center justify-center mt-4 text-white text-l sm:text-xl">
                바로 이용해보기
            </span>
        </button>
    );
};

export default StartButton;