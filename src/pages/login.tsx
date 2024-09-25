import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-[500px] py-[50px]">
            <div className="w-full max-w-xs flex flex-col items-center gap-[50px]">
                {/* 로그인 텍스트 영역 */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold">로그인</h1>
                </div>

                {/* 아이디 및 비밀번호 입력 필드 영역 */}
                <div className="flex flex-col items-center gap-[10px]">
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
                </div>

                {/* 로그인 및 회원가입 버튼 영역 */}
                <div className="flex flex-col items-center gap-[10px]">
                    <button className="w-[500px] h-[70px] bg-black text-white font-bold rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-black">
                        로그인
                    </button>
                    <button
                        className="w-[500px] h-[70px] bg-black text-white font-bold rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
                        onClick={() => navigate('/register')}
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
}
