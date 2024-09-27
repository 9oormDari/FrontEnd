import { GiHamburgerMenu } from 'react-icons/gi';

interface HamburgerMenuProps {
    onClick: () => void;
    isOpen: boolean;
}

export default function HamburgerMenu({ onClick, isOpen }: HamburgerMenuProps) {
    return (
        <button
            onClick={onClick}
            className="p-2 md:hidden cursor-pointer focus:outline-none"
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isOpen}
        >
            <GiHamburgerMenu className="w-6 h-6" />
        </button>
    );
}
