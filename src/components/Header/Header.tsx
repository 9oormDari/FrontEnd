import NavLink from './NavLink.tsx';
import cn from '../../lib/cn.ts';

export default function Header() {
    return (
        <header className={cn(
            "h-[150px] bg-white flex items-center justify-between px-20", 
            "border-b-2 border-[#DBDBDB]")}>
            {/* 로고 영역 */}
            <img
                src="/logo_blue.svg"
                alt="logo_blue"
                className="w-[216px] h-[80px]"
            />

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
