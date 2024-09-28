import { useEffect } from 'react';
import NoImage from '../../../assets/GoalPage/NoImage.png';
import cn from '../../../lib/cn';

interface ShowImageModalProps {
    memberId: string;
    memberName: string;
    onClose: () => void;
}

export default function ShowImageModal({ memberId, memberName, onClose }: ShowImageModalProps) {
    // 임시로 표시할 NoImage의 개수를 정할 수 있습니다.
    const noImages = Array(4).fill({
        id: 'no-image',
        url: NoImage,
        alt: 'No Image Available',
    });

    useEffect(() => {
        // 모달이 열릴 때 배경 스크롤 방지
        document.body.style.overflow = 'hidden';
        return () => {
            // 모달이 닫힐 때 스크롤 원상복구
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 transition-opacity duration-300 ease-in-out"
            onClick={onClose} // 배경 클릭 시 모달 닫기
        >
            <div
                className="bg-white w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto p-4 rounded shadow-lg relative overflow-auto transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
            >
                <h1 className="font-bold text-xl"> {memberName}님의 인증 사진</h1>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {noImages.map((image, index) => (
                        <img
                            key={`${image.id}-${index}`}
                            src={image.url}
                            alt={image.alt}
                            className="flex items-center w-[80vp] h-40 md:h-48 object-cover rounded"
                        />
                    ))}
                </div>
                <div className="flex items-center justify-center p-2">
                    <button
                        className={cn(
                            "w-32 md:w-64 h-10 bg-blue-400 text-white text-2xl", 
                            "rounded-lg hover:bg-blue-500 transition-colors",
                            ""
                        )}
                        onClick={onClose}
                        aria-label="Close Modal"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
