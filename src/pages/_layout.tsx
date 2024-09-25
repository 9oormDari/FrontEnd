import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';

export default function NotFoundPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={'loading...'}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}