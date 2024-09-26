import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../components/Footer/Footer.tsx';
import Header from '../components/Header/Header.tsx';
import { Suspense } from 'react';

export default function NotFoundPage() {
    const location = useLocation();
    const hideFooter = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div>
            <Header />
            <Suspense fallback={'loading...'}>
                <Outlet />
            </Suspense>
            {!hideFooter && <Footer />}
        </div>
    );
}
