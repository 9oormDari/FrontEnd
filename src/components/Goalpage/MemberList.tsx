import MemberCard from './MemberList/MemberCard';
import { API } from '../../lib/api/index.ts';
import { useState, useEffect } from 'react';

interface Member {
    id: string;
    username: string;
}


export default function MemberList() {
    const [members, setMembers] = useState<Member[]>([
        { id: '1', username: '김' },
        { id: '2', username: '박' },
        { id: '3', username: '최' },
    ]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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
                    />
                ))}
            </div>
        </>
    );
}
