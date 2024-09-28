import ShowImageModal from './ShowImageModal';
import { useState } from 'react';
import cn from '../../../lib/cn';
import useIdStore from '../../idStore';

interface MemberCardProps {
    id: string; // 회원을 식별할 수 있는 고유 ID
    name: string;
    profileUrl: string;
}

export default function MemberCard({ id, name, profileUrl }: MemberCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const setId = useIdStore((state) => state.setId);

    // 모달을 열고 id를 설정하는 함수
    const handleOpenModal = () => {
        setId(id); // zustand 스토어의 id를 설정
        setIsModalOpen(true); // 모달 열기
    };

    // 모달을 닫는 함수
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center bg-gray-200 rounded-lg relative p-6 md:p-20'
            )}
        >
            <img
                className="w-16 md:w-32 h-16 md:h-32 bg-gray-300 rounded-full mb-4"
                src={profileUrl}
            />
            <div className="text-base md:text-2xl font-bold mb-4">{name}</div>
            <button
                className={cn(
                    'w-16 md:w-32 h-8 md:h-12 bg-slate-400 text-white rounded-lg',
                    'hover:bg-slate-700 transition text-sm md:text-xl font-semibold'
                )}
                onClick={handleOpenModal} // 모달 열기와 id 설정을 하나의 함수로 처리
            >
                보러 가기
            </button>
            {isModalOpen && (
                <ShowImageModal
                    memberId={id}
                    memberName={name}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}
