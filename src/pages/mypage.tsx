import { useState, useEffect } from 'react';
import NeedLoginComponents from '../components/NeedLoginComponents.tsx';
import Goals from '../components/Mypage/Goals';
import Profile from '../components/Mypage/Profile';
import cn from '../lib/cn.ts';

export default function MyPage() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('accesstoken')) {
            setIsLogin(true);
        }
    }, []);

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-start min-h-screen',
                'pb-[50px] pt-[50px] gap-[50px]'
            )}
        >
            {/* 로그인 확인 컴포넌트 */}
            {!isLogin ? (
                <NeedLoginComponents />
            ) : (
                <>
                    <Profile />
                    <Goals />
                </>
            )}
        </div>
    );
}
