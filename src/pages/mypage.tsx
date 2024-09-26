import Goals from '../components/Mypage/Goals';
import Profile from '../components/Mypage/Profile';
import cn from '../lib/cn.ts';

export default function MyPage() {
    return (
        <div className={cn(
            "flex flex-col items-center justify-start min-h-screen",
            "pb-[50px] pt-[50px] gap-[50px]"
            )}
        >
            {/* 프로필 영역 */}
            <Profile />
            {/* 목표 영역 */}
            <Goals />
        </div>
    );
}
