import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LogoBox from '../LogoBox.tsx';

export default function Footer() {
  const [backgroundColor, setBackgroundColor] = useState("bg-[#47484A]");
  const location = useLocation();
  
  // location.pathname이 변경될 때마다 실행하는 useEffect
  useEffect(() => {
    if (location.pathname === "/mypage") {
      setBackgroundColor("bg-[#410C0C]");
    } else {
      setBackgroundColor("bg-[#47484A]");
    }
  }, [location.pathname]);

  return (
    <footer className={`${backgroundColor} h-[180px] flex items-center justify-between px-20`}>
      {/* 로고 영역 */}
      <LogoBox />
      {/* 역할 및 이름 리스트 영역 */}
      <div className="flex flex-wrap text-white text-sm justify-center space-x-16">
        
        {/* 왼쪽 그룹 (기획 + 디자인) */}
        <div className="flex flex-col items-center">
          {/* 기획 */}
          <div className="flex flex-row items-center space-x-2">
            <span className="font-bold p-4">기획</span>
            <span>김규리</span>
          </div>
          
          {/* 디자인 */}
          <div className="flex flex-row items-center space-x-2">
            <span className="font-bold p-4">디자인</span>
            <span>김보경</span>
          </div>
        </div>
        
        {/* 오른쪽 그룹 (프론트 + 백엔드) */}
        <div className="flex flex-col items-center">
          {/* 프론트 */}
          <div className="flex flex-row items-center space-x-2">
            <span className="font-bold p-4">프론트</span>
            <span>김민태</span>
            <span>송윤석</span>
            <span>최세연</span>
          </div>
          
          {/* 백엔드 */}
          <div className="flex flex-row items-center space-x-2">
            <span className="font-bold p-4">백엔드</span>
            <span>이재혁</span>
            <span>이현서</span>
            <span>한현규</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
