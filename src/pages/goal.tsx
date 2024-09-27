import { useEffect, useState } from 'react';
import NeedLoginComponents from '../components/NeedLoginComponents.tsx';
import GoormScreen from '../components/Goalpage/GoormScreen.tsx';
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
                'flex flex-col items-center justify-start w-full',
                'pb-[50px] gap-[50px] min-h-screen'
            )}
        >
        {/* 로그인 확인 컴포넌트 */}
        { !isLogin ? <NeedLoginComponents /> : 
        <>
            <div className="flex flex-col items-center justify-center w-full ">
                <GoormScreen />
            </div>
        </>}
        </div>
    );
}