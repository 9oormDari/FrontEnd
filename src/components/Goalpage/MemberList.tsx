import MemberCard from './MemberList/MemberCard';

export default function MemberList() {
    // 일단 임시로 멤버 데이터를 만들어둡니다
    // 백엔드 완성시 교체 필요
    const members = [
        { id: '1', name: '김' },
        { id: '2', name: '박' },
        { id: '3', name: '최' },
    ];

    return (
        <>
            <div className="w-full text-4xl font-bold text-left px-10 pt-10">
                <span className="text-blue-400">질수없조</span>
                <span> 팀원들의</span>
            </div>
            <div className="text-4xl font-bold text-left w-full px-10 pt-4">
                목표 인증을 확인해볼래요?
            </div>

            <div className="flex flex-row gap-2 sm:gap-4 md:gap-10 pt-10">
                {members.map((member) => (
                    <MemberCard key={member.id} id={member.id} name={member.name} />
                ))}
            </div>
        </>
    );
}