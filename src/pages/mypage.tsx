import { useEffect, useState } from 'react';

import Goals from '../components/Mypage/Goals';
import NeedLoginComponents from '../components/NeedLoginComponents.tsx';
import Profile from '../components/Mypage/Profile';
import cn from '../lib/cn.ts';

export default function MyPage() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('accesstoken')) {
            setIsLogin(true);
        }
    }, []);

    const handleLogout = () => {
        // 로그아웃 확인 알림창
        const confirmed = window.confirm('정말로 로그아웃 하시겠습니까?');
        if (confirmed) {
            // accessToken을 localStorage에서 삭제
            localStorage.removeItem('accesstoken');
            // 메인 페이지로 이동
            window.location.href = '/';
        }
    };

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
                    {/* 로그아웃 버튼 */}
                    <button
                        onClick={handleLogout}
                        className={cn(
                            'w-[200px] h-[50px] bg-red-500 text-white font-bold rounded',
                            'hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                        )}
                    >
                        로그아웃
                    </button>
                </>
            )}
        </div>
    );
}
