import MemberCard from './MemberList/MemberCard';

export default function MemberList() {
    return (
        <>
            <div className="w-full text-4xl font-bold text-left px-10 pt-10">
                <span className="text-blue-400">질수없조</span>
                <span> 팀원들의</span>
            </div>
            <div className="text-4xl font-bold text-left w-full px-10 pt-4">
                목표 인증을 확인해볼래요?
            </div>

            <div className="flex flex-row gap-10 pt-10">
                <MemberCard name="조원1" />
                <MemberCard name="조원2" />
                <MemberCard name="조원3" />
            </div>
        </>
    );
}
