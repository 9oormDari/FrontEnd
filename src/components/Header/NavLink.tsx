import { useLocation, useNavigate } from 'react-router-dom';

import cn from '../../lib/cn.ts';

interface NavLinkProps {
    href: string;
    label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
    const location = useLocation();
    const navigate = useNavigate(); // useNavigate 훅 사용
    const isActive = location.pathname === href;

    const handleClick = () => {
        navigate(href); // 페이지 이동
    };

    return (
        <button
            onClick={handleClick}
            className={cn(
                'text-base md:text-2xl transition md:p-4',
                `${isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-gray-600'}`
            )}
        >
            {label}
        </button>
    );
}
