interface MemberCardProps {
  name: string;
}

export default function MemberCard({name}: MemberCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[267px] h-[406px] bg-gray-200 rounded-lg">
      <div className="w-[80px] h-[80px] bg-gray-300 rounded-full"></div>
      <div className="text-lg font-bold">{name}</div>
      <button className="w-[200px] h-[40px] bg-blue-400 rounded-lg">보러 가기</button>
    </div>
  );
}