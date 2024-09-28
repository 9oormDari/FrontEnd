import MemberCard from './MemberList/MemberCard';
import { API } from '../../lib/api/index.ts';
import { useState, useEffect } from 'react';
import cn from '../../lib/cn';
import UploadModal from './MemberList/UploadModal.tsx';
import ShowImageModal from './MemberList/ShowImageModal.tsx';

interface Member {
    id: string;
    username: string;
    profileUrl: string;
}

export default function MemberList() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSeeMyImageModalVisible, setIsSeeMyImageModalVisible] = useState(false);
    const [canOpenSeeMyImageModal, setCanOpenSeeMyImageModal] = useState(false);
    const [members, setMembers] = useState<Member[]>([
        { id: '1', username: 'Empty Data', profileUrl: ''  },
        { id: '2', username: 'Empty Data', profileUrl: ''  },
        { id: '3', username: 'Empty Data', profileUrl: ''  },
    ]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [myId, setMyId] = useState<string>('');
    const [myName, setMyName] = useState<string>('');
    
    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const response = await API.User.getMyInfo();
                    console.log(response);
                    setMyId(response.id);
                    setMyName(response.nickname);  
            } catch (error) {
                console.error('내 정보를 불러오는 중 오류가 발생했습니다:', error);
            }
        };
        fetchMyData();
    }, []);

    useEffect(() => {
        // myId와 myName이 업데이트되면 canOpenSeeMyImageModal 상태를 true로 변경
        if (myId && myName) {
            setCanOpenSeeMyImageModal(true);
        }
    }, [myId, myName]);

    useEffect(() => {
        const fetchMemberList = async () => {
            setLoading(true);
            try {
                const response = await API.User.getGroupMemberList();
                if (response.status === 'OK' && response.data) {
                    const memberList: Member[] = response.data;
                    setMembers(memberList);
                }
            } catch (e) {
                setError('팀원 목록을 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchMemberList();
    }, []);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const openSeeMyImageModal = () => {
        if (canOpenSeeMyImageModal) {
            setIsSeeMyImageModalVisible(true);
        } else {
            alert('내 정보를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
        }
    }

    const closeSeeMyImageModal = () => {
        setIsSeeMyImageModalVisible(false);
    }

    return (
        <>
            <div className="w-full text-2xl md:text-4xl font-bold text-left px-4 md:px-10 pt-10">
                <span className="text-blue-400">질수없조</span>
                <span> 팀원들의</span>
            </div>
            <div className="text-2xl md:text-4xl font-bold text-left w-full px-4 md:px-10 md:pt-4">
                목표 인증을 확인해볼래요?
            </div>

            <div className="flex flex-row gap-2 sm:gap-4 md:gap-10 pt-10">
                {members.map((member) => (
                    <MemberCard
                        key={member.id}
                        id={member.id}
                        name={member.username}
                        profileUrl={member.profileUrl}
                    />
                ))}
            </div>
            <button className={cn(
                "w-64 md:w-96 h-12 md:h-16 bg-[#5A82F1] text-white rounded-lg hover:bg-blue-600",
                "transition text-sm md:text-xl font-semibold mt-10 "
                )}
                onClick={openModal}
            >
                나의 인증 등록하기
            </button>
            {isModalVisible && (
                <UploadModal isVisible={isModalVisible} onClose={closeModal} />
            )}
            <button className={cn(
                "w-64 md:w-96 h-12 md:h-16 bg-[#575757] text-white rounded-lg hover:bg-slate-700",
                "transition text-sm md:text-xl font-semibold mt-3 "
                )}
                onClick={openSeeMyImageModal}
            >
                나의 인증 보러가기
            </button>
            {isSeeMyImageModalVisible && myId && myName && (
                <ShowImageModal 
                    memberId={myId}
                    memberName={myName}
                    onClose={closeSeeMyImageModal}
                />
            )}
        </> 
    );
}
