import NavLink from './NavLink.tsx';
import LogoBox from '../LogoBox.tsx';

export default function Header() {
    return (
        <header className="h-[150px] bg-white flex items-center justify-between px-20">
            {/* 로고 영역 */}
            <LogoBox />

            {/* 네비게이션 메뉴 */}
            <nav className="flex items-center space-x-8">
                <NavLink href="/" label="서비스소개" />
                <NavLink href="/guide" label="이용방법" />
                <NavLink href="/goal" label="목표 점검" />
                <NavLink href="/mypage" label="마이페이지" />
            </nav>
        </header>
    );
}