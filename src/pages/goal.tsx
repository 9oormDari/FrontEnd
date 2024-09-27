import { useEffect, useState } from 'react';
import NeedLoginComponents from '../components/NeedLoginComponents.tsx';
import cn from '../lib/cn.ts';

export default function Goal() {
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
        { !isLogin ? <NeedLoginComponents /> : 
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold mt-8">목표 페이지</h1>
                <h1 className="text-2xl md:text-4xl font-bold mt-2">구현 중입니다</h1>
            </div>
        </>}
        </div>
    );
}