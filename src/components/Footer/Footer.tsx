import cn from '../../lib/cn';

export default function Footer() {
    return (
        <footer className={cn(
            "bg-[#47484A] py-5 md:py-8 flex flex-col md:flex-row items-center",
            "justify-between px-5 md:px-20"
            )}
        >
            {/* 로고 영역 */}
            <img
                src="/logo_white.svg"
                alt="회사 로고 (흰색)"
                className="w-[108px] h-[40px] md:w-[216px] md:h-[80px] mb-4 md:mb-0"
            />

            {/* 역할 및 이름 리스트 영역 */}
            <div className="text-white text-xs md:text-sm flex flex-col space-y-4">
                {/* 첫 번째 줄 (기획 + 프론트) */}
                <div className="flex flex-wrap justify-end space-x-4">
                    {/* 기획 */}
                    <div className="flex items-center space-x-2 ">
                        <span className="font-bold p-1 md:p-2">기획</span>
                        <span>김규리</span>
                    </div>

                    {/* 프론트 */}
                    <div className="flex items-center space-x-2 ">
                        <span className="font-bold p-1 md:p-2">프론트</span>
                        <span>김민태</span>
                        <span>송윤석</span>
                        <span>최세연</span>
                    </div>
                </div>

                {/* 두 번째 줄 (디자인 + 백엔드) */}
                <div className="flex flex-wrap justify-end space-x-4">
                    {/* 디자인 */}
                    <div className="flex items-center space-x-2 ">
                        <span className="font-bold p-1 md:p-2">디자인</span>
                        <span>김보경</span>
                    </div>

                    {/* 백엔드 */}
                    <div className="flex items-center space-x-2 ">
                        <span className="font-bold p-1 md:p-2">백엔드</span>
                        <span>이재혁</span>
                        <span>이현서</span>
                        <span>한현규</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
