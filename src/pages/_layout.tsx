import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../components/Footer/Footer.tsx';
import Header from '../components/Header/Header.tsx';
import { Suspense } from 'react';

export default function NotFoundPage() {
    const location = useLocation();
    const hideFooter =
        location.pathname === '/login' ||
        location.pathname === '/register' ||
        location.pathname === '/guide';

    return (
        <div>
            <Header />
            {/* 헤더의 높이만큼 상단에 패딩을 추가 */}
            <div className="pt-[75px] md:pt-[150px]">
                <Suspense fallback={'loading...'}>
                    <Outlet />
                </Suspense>
            </div>
            {!hideFooter && <Footer />}
        </div>
    );
}
