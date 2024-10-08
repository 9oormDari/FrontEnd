import React, { useEffect, useState } from 'react';

import { API } from '../lib/api/index.ts';
import Pending from '../components/Pending/Loading.tsx'; // Pending 컴포넌트 추가
import cn from '../lib/cn.ts';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    // 입력 필드 상태 관리
    const [nickname, setNickname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPending, setIsPending] = useState(true); // 로딩 상태 관리 (처음엔 true)
    const [passwordMatch, setPasswordMatch] = useState(true); // 비밀번호 일치 여부 상태

    // 컴포넌트가 마운트될 때 0.2초 동안 Pending 표시
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPending(false); // 0.2초 후 로딩 상태 해제
        }, 200);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, []);

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        setIsPending(true); // 회원가입 요청 시 로딩 상태로 전환
        try {
            // 회원가입 요청
            await API.User.register(nickname, username, password);
            alert('회원가입 성공!');
            navigate('/login'); // 회원가입 후 로그인 페이지로 이동
        } catch (error) {
            console.error('회원가입 실패:', error);
            alert('회원가입에 실패했습니다.');
        } finally {
            setIsPending(false); // 요청 완료 후 로딩 상태 해제
        }
    };

    const handleCancel = () => {
        setIsPending(true); // 취소 시에도 로딩 상태로 전환
        setTimeout(() => {
            navigate(-1); // 0.2초 대기 후 이전 페이지로 이동
        }, 200);
    };

    // 비밀번호 확인 필드에서 입력할 때마다 일치 여부 확인
    useEffect(() => {
        setPasswordMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    return (
        <div>
            {isPending ? (
                <Pending height="100vh" /> // 로딩 중일 때 Pending 컴포넌트 표시
            ) : (
                <div
                    className={cn(
                        'flex items-center justify-center min-h-[500px] pt-[100px]'
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
                        <div
                            className={cn(
                                'flex flex-col items-center gap-[10px]'
                            )}
                        >
                            <input
                                className={cn(
                                    'w-[300px] md:w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded',
                                    'focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
                                )}
                                type="text"
                                placeholder="닉네임"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />
                            <input
                                className={cn(
                                    'w-[300px] md:w-[500px] h-[70px] px-4 py-2 border border-gray-300 rounded',
                                    'focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E9EBF8]'
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
                            <input
                                className={cn(
                                    `w-[300px] md:w-[500px] h-[70px] px-4 py-2 border-2 ${
                                        passwordMatch
                                            ? 'border-gray-300'
                                            : 'border-red-500'
                                    } rounded focus:outline-none focus:ring-2 ${
                                        passwordMatch
                                            ? 'focus:ring-blue-500'
                                            : 'focus:ring-red-500'
                                    } bg-[#E9EBF8]`
                                )}
                                type="password"
                                placeholder="비밀번호 확인"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            {!passwordMatch && (
                                <span className="text-red-500 text-sm">
                                    비밀번호가 일치하지 않습니다.
                                </span>
                            )}
                        </div>

                        {/* 확인 및 취소 버튼 영역 */}
                        <div
                            className={cn(
                                'flex w-[500px] gap-[10px] justify-center'
                            )}
                        >
                            <button
                                className={cn(
                                    'w-1/4 md:w-1/2 h-[70px] bg-[#5A82F1] text-white font-bold rounded',
                                    'hover:bg-[#4A72D1] focus:outline-none focus:ring-2 focus:ring-[#5A82F1]'
                                )}
                                onClick={handleRegister}
                                disabled={!passwordMatch} // 비밀번호가 일치하지 않으면 버튼 비활성화
                            >
                                확인
                            </button>
                            <button
                                className={cn(
                                    'w-1/4 md:w-1/2 h-[70px] bg-[#A2A2A2] text-white font-bold rounded',
                                    'hover:bg-[#929292] focus:outline-none focus:ring-2 focus:ring-[#A2A2A2]'
                                )}
                                onClick={handleCancel} // 취소 버튼 클릭 시 handleCancel 실행
                            >
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
