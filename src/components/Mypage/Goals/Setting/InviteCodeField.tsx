import React, { useEffect, useState } from 'react';

import { API } from '../../../../lib/api'; // 적절한 경로로 __Team import

const InviteCodeField: React.FC = () => {
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [email3, setEmail3] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail1(e.target.value);
    };

    const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail2(e.target.value);
    };

    const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail3(e.target.value);
    };

    useEffect(() => {
        // 모든 필드가 채워졌는지 확인
        if (email1.trim() && email2.trim() && email3.trim()) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email1, email2, email3]);

    const handleConfirmClick = async () => {
        const emails = [email1, email2, email3];

        // 이메일이 비어 있지 않은 것만 필터링
        const validEmails = emails.filter((email) => email.trim() !== '');

        setIsLoading(true);

        let allSuccess = true;

        for (const email of validEmails) {
            try {
                // inviteTeam API 호출
                await API.Team.inviteTeam(email);
                console.log(`초대 성공: ${email}`);
            } catch (error) {
                console.error(`초대 실패: ${email}`, error);
                allSuccess = false;
            }
        }

        setIsLoading(false);

        if (allSuccess) {
            alert('모든 초대가 성공적으로 완료되었습니다.');
        } else {
            alert('일부 초대에 실패했습니다.');
        }

        // alert 창에서 확인을 누르면 /mypage로 이동
        window.location.href = '/mypage';
    };

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <div className="border border-gray-300 rounded-lg overflow-hidden mb-5">
                <div className="bg-[#5A82F1] h-[50px] flex items-center justify-center">
                    <h2 className="text-[20px] font-bold text-center text-white">
                        초대 코드 입력하기
                    </h2>
                </div>
                <div className="relative bg-gray-100 flex flex-col items-center justify-center p-4 space-y-2">
                    <input
                        type="email"
                        value={email1}
                        onChange={handleInputChange1}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        placeholder="이메일 1"
                    />
                    <input
                        type="email"
                        value={email2}
                        onChange={handleInputChange2}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        placeholder="이메일 2"
                    />
                    <input
                        type="email"
                        value={email3}
                        onChange={handleInputChange3}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        placeholder="이메일 3"
                    />
                </div>
            </div>
            <button
                onClick={handleConfirmClick}
                className={`w-full py-3 bg-[#5A82F1] text-white font-bold rounded-lg transition-transform duration-300 ${isLoading || !isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                disabled={isLoading || !isFormValid}
            >
                {isLoading ? '전송 중...' : '확인'}
            </button>
        </div>
    );
};

export default InviteCodeField;
