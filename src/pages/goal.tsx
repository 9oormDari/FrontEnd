import { useEffect, useState } from 'react';

import GoormScreen from '../components/Goalpage/GoormScreen.tsx';
import MemberList from '../components/Goalpage/MemberList.tsx';
import NeedLoginComponents from '../components/NeedLoginComponents.tsx';
import Pending from '../components/Pending/Loading.tsx'; // Pending 컴포넌트 추가
import cn from '../lib/cn.ts';

export default function Goal() {
    const [isLogin, setIsLogin] = useState(false);
    const [isPending, setIsPending] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        // 로그인 여부 확인
        if (localStorage.getItem('accesstoken')) {
            setIsLogin(true);
        }

        // 0.3초 동안 로딩 상태 유지
        const timer = setTimeout(() => {
            setIsPending(false);
        }, 300); // 300ms

        return () => clearTimeout(timer); // 타이머 정리
    }, []);

    return (
        <div>
            {isPending ? (
                <Pending height="100vh" /> // 로딩 중일 때 Pending 컴포넌트 표시
            ) : (
                <div
                    className={cn(
                        'flex flex-col items-center justify-start w-full',
                        'pb-[50px] gap-[50px] min-h-screen'
                    )}
                >
                    {/* 로그인 확인 컴포넌트 */}
                    {!isLogin ? (
                        <NeedLoginComponents />
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center w-full ">
                                <GoormScreen />
                                <MemberList />
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
