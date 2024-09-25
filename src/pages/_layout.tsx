import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>페이지에 공통적으로 적용되는 레이아웃입니다.</h1>
      <Suspense fallback={'loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
}