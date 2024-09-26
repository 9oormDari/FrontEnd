import cn from '../../lib/cn.ts';
import { useLocation } from 'react-router-dom';

interface NavLinkProps {
    href: string;
    label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <a
            href={href}
            className={cn(
                'text-base md:text-2xl transition md:p-4',
                `${isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-gray-600'}`
            )}
        >
            {label}
        </a>
    );
}
