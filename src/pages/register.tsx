import cn from '../lib/cn.ts';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    return (
        <div
            className={cn(
                'flex items-center justify-center min-h-[500px] pt-[50px]'
            )}
        >
            <div
                className={cn(
                    'w-full max-w-xs flex flex-col items-center gap-[50px]'
                )}
            >
                {/* 회원가입 텍스트 영역 */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold">회원가입</h1>
                </div>

                {/* 입력 필드 영역 */}
                <div className={cn('flex flex-col items-center gap-[10px]')}>
                    <input
                        className={cn(
                            'w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
                        )}
                        type="text"
                        placeholder="닉네임"
                    />
                    <input
                        className={cn(
                            'w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
                        )}
                        type="text"
                        placeholder="아이디"
                    />
                    <input
                        className={cn(
                            'w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
                        )}
                        type="password"
                        placeholder="비밀번호"
                    />
                    <input
                        className={cn(
                            'w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
                        )}
                        type="password"
                        placeholder="비밀번호 확인"
                    />
                </div>

                {/* 확인 및 취소 버튼 영역 */}
                <div className={cn('flex w-[500px] gap-[10px]')}>
                    <button
                        className={cn(
                            'w-1/2 h-[70px] bg-[#5A82F1] text-white font-bold rounded',
                            'hover:bg-[#4A72D1] focus:outline-none focus:ring-2 focus:ring-[#5A82F1]'
                        )}
                    >
                        확인
                    </button>
                    <button
                        className={cn(
                            'w-1/2 h-[70px] bg-[#A2A2A2] text-white font-bold rounded',
                            'hover:bg-[#929292] focus:outline-none focus:ring-2 focus:ring-[#A2A2A2]'
                        )}
                        onClick={() => navigate(-1)}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}
