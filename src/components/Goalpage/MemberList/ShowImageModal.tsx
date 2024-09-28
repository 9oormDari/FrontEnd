import { useEffect, useState } from 'react';

import { API } from '../../../lib/api';
import NoImage from '../../../assets/GoalPage/NoImage.png';
import cn from '../../../lib/cn';

interface ShowImageModalProps {
    memberId: string; // 멤버 ID
    memberName: string; // 멤버 이름
    onClose: () => void; // 모달을 닫는 함수
}

interface ImageData {
    id: number | string; // 이미지 ID 또는 식별자
    url: string; // 이미지 URL
    alt: string; // 이미지 대체 텍스트
}

export default function ShowImageModal({
    memberId,
    memberName,
    onClose,
}: ShowImageModalProps) {
    // 백엔드에서 가져온 이미지들을 저장할 상태
    const [images, setImages] = useState<ImageData[]>([]);
    
    // 백엔드에서 이미지 데이터를 가져오는 함수
    useEffect(() => {
        const fetchMemberImages = async () => {
            try {
                // API 호출로 멤버의 루틴 이미지 정보를 가져옴
                const response = await API.User.getTeamMemberRoutine(memberId);

                // 응답이 성공적이고 데이터가 존재하는 경우
                if (response.status === 'OK' && response.data) {
                    // 가져온 루틴 이미지 데이터를 상태로 설정
                    const memberImages = response.data.map((routine: any) => ({
                        id: routine.id,
                        url: routine.routineImg,
                        alt: routine.routineName,
                    }));
                    setImages(memberImages);
                }
            } catch (e) {
                console.error('이미지 정보를 불러오는 중 오류가 발생했습니다.'); // 오류 발생 시 콘솔에 출력
            }
        };

        fetchMemberImages(); // 함수 호출
    }, [memberId]); // memberId가 변경될 때마다 데이터를 다시 가져옴

    // 모달이 열릴 때 배경 스크롤 방지, 닫힐 때 원상복구
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // 스크롤 방지
        return () => {
            document.body.style.overflow = 'auto'; // 스크롤 원상복구
        };
    }, []);

    // 가져온 이미지와 기본 이미지를 결합하여 최대 4개의 이미지를 생성
    const displayImages = [
        ...images,
        ...Array(4 - images.length).fill({
            id: 'no-image', // ID 대신 'no-image'로 채움
            url: NoImage, // 기본 이미지 URL
            alt: 'No Image Available', // 대체 텍스트
        }),
    ].slice(0, 4); // 최대 4개까지 표시

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 transition-opacity duration-300 ease-in-out"
            onClick={onClose} // 배경 클릭 시 모달 닫기
        >
            <div
                className="bg-white w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto p-4 rounded shadow-lg relative overflow-auto transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
            >
                <h1 className="font-bold text-xl">
                    {' '}
                    {memberName}님의 인증 사진
                </h1>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {displayImages.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className="h-32 md:h-48 bg-gray-200 flex justify-center items-center rounded"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center p-2">
                    <button
                        className={cn(
                            'w-32 md:w-64 h-10 bg-blue-400 text-white text-2xl',
                            'rounded-lg hover:bg-blue-500 transition-colors'
                        )}
                        onClick={onClose}
                        aria-label="Close Modal" // 접근성을 위한 aria-label
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
