import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';

import Footer from '../components/Footer/Footer.tsx';
import Header from '../components/Header/Header.tsx';
import RandomCloudBackground from '../components/RandomCloudBackgroud.tsx'; // 구름 배경 추가

export default function NotFoundPage() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);

    const hideFooter =
        location.pathname === '/login' ||
        location.pathname === '/register' ||
        location.pathname === '/guide';

    // 화면 크기 감지
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // 768px 이하일 때 모바일로 인식
        };

        // 초기 크기 설정 및 윈도우 리사이즈 이벤트 감지
        handleResize();
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative">
            {!isMobile && <RandomCloudBackground />}{' '}
            {/* 모바일이 아닐 때만 구름 배경 */}
            <Header />
            {/* 헤더의 높이만큼 상단에 패딩을 추가 */}
            <div className="pt-[75px] md:pt-[150px] relative z-10">
                <Suspense fallback={'loading...'}>
                    <Outlet />
                </Suspense>
            </div>
            {!hideFooter && <Footer />}
        </div>
    );
}
