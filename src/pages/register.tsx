export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-[500px] py-[50px]">
            <div className="w-full max-w-xs flex flex-col items-center gap-[50px]">
                {/* 회원가입 텍스트 영역 */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold">회원가입</h1>
                </div>

                {/* 입력 필드 영역 */}
                <div className="flex flex-col items-center gap-[10px]">
                    <input
                        className="w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="닉네임"
                    />
                    <input
                        className="w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="아이디"
                    />
                    <input
                        className="w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        placeholder="비밀번호"
                    />
                    <input
                        className="w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        placeholder="비밀번호 확인"
                    />
                </div>

                {/* 확인 및 취소 버튼 영역 */}
                <div className="flex w-[500px] gap-[10px]">
                    <button className="w-1/2 h-[70px] bg-black text-white font-bold rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
                        확인
                    </button>
                    <button className="w-1/2 h-[70px] bg-[#939393] text-white font-bold rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}
