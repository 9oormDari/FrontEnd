import { useState } from 'react';
import NeedLoginComponents from '../components/NeedLoginComponents.tsx';
import Goals from '../components/Mypage/Goals';
import Profile from '../components/Mypage/Profile';
import cn from '../lib/cn.ts';

export default function MyPage() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-start min-h-screen',
                'pb-[50px] pt-[50px] gap-[50px]'
            )}
        >
            {/* 
                * 로그인 필요 컴포넌트 
                * 로그인 확인 방법을 모르겠어서 일단 임포트 했습니다.
            */}
            { isLogin ? null : <NeedLoginComponents /> }
            {/* 프로필 영역 */}
            <Profile />
            {/* 목표 영역 */}
            <Goals />
        </div>
    );
}
