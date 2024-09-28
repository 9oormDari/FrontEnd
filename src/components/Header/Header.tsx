import { useEffect, useRef, useState } from 'react';

import HamburgerMenu from './HamburgerMenu';
import NavLink from './NavLink';
import cn from '../../lib/cn';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부 상태 관리

    useEffect(() => {
        // localStorage에서 accessToken을 확인하여 로그인 여부 설정
        const token = localStorage.getItem('accesstoken');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        console.log('햄버거 메뉴 클릭', !isMenuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header
            className={cn(
                'bg-white flex items-center justify-between',
                'h-[75px] md:h-[150px] p-2 md:px-20',
                'border-b-2 border-[#DBDBDB] relative'
            )}
        >
            {/* 로고 영역 */}
            <a href="/">
                <img
                    src="/logo_blue.svg"
                    alt="logo_blue"
                    className="px-1 md:px-0 w-[108px] h-[40px] md:w-[216px] md:h-[80px]"
                />
            </a>

            {/* 햄버거 메뉴 컴포넌트 */}
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />

            {/* 네비게이션 메뉴 - 데스크탑 */}
            <nav className="hidden md:flex items-center md:space-x-8">
                <NavLink href="/" label="서비스소개" />
                <NavLink href="/guide" label="이용방법" />
                <NavLink href="/goal" label="목표 점검" />
                {isLoggedIn ? (
                    <NavLink href="/mypage" label="마이페이지" />
                ) : (
                    <NavLink href="/login" label="로그인/회원가입" />
                )}
            </nav>

            {/* 오버레이 */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            )}

            {/* 모바일 네비게이션 메뉴 */}
            <div
                ref={menuRef}
                className={cn(
                    'fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50', 
                    'transform transition-transform duration-300',
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {/* 닫기 버튼 */}
                <button
                    onClick={toggleMenu}
                    className="p-4 focus:outline-none"
                    aria-label="메뉴 닫기"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* 메뉴 목록 */}
                <nav className="flex flex-col mt-4 space-y-4 px-4">
                    <NavLink href="/" label="서비스소개" />
                    <NavLink href="/guide" label="이용방법" />
                    <NavLink href="/goal" label="목표 점검" />
                    {isLoggedIn ? (
                        <NavLink href="/mypage" label="마이페이지" />
                    ) : (
                        <NavLink href="/login" label="로그인/회원가입" />
                    )}
                </nav>
            </div>
        </header>
    );
}
