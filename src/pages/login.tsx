import { API } from '../lib/api';
import cn from '../lib/cn.ts';
import { useState } from 'react';

export default function Login() {
    // 입력 필드 상태 관리
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // 로그인 요청
            await API.User.login(username, password);
            alert('로그인 성공!');
            window.location.href = '/'; // 로그인 성공 시 메인 페이지로 이동
        } catch (error) {
            console.error('로그인 실패:', error);
            alert('로그인에 실패했습니다.');
        }
    };

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
                {/* 로그인 텍스트 영역 */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold">로그인</h1>
                </div>

                {/* 아이디 및 비밀번호 입력 필드 영역 */}
                <div className={cn('flex flex-col items-center gap-[10px]')}>
                    <input
                        className={cn(
                            'w-[300px] md:w-[500px] h-[70px] px-4 py-2 border border-gray-300',
                            'rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
                        )}
                        type="text"
                        placeholder="아이디"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className={cn(
                            'w-[300px] md:w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded',
                            'focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
                        )}
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* 로그인 및 회원가입 버튼 영역 */}
                <div className={cn('flex flex-col items-center gap-[10px]')}>
                    <button
                        className={cn(
                            'w-[300px] md:w-[500px] h-[70px] bg-[#5A82F1] text-white font-bold rounded',
                            'hover:bg-[#4A72D1] focus:outline-none focus:ring-2 focus:ring-[#5A82F1]'
                        )}
                        onClick={handleLogin} // 로그인 버튼 클릭 시 실행
                    >
                        로그인
                    </button>
                    <button
                        className={cn(
                            'w-[300px] md:w-[500px] h-[70px] bg-[#575757] text-white font-bold rounded',
                            'hover:bg-[#474747] focus:outline-none focus:ring-2 focus:ring-[#575757]'
                        )}
                        onClick={() => (window.location.href = '/register')} // 회원가입 버튼 클릭 시 window.location 사용
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
}
