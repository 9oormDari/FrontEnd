import React, { useEffect, useState } from 'react';

import { API } from '../../../../lib/api';

const InviteCodeField: React.FC = () => {
    const [inviteCode, setInviteCode] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInviteCode(e.target.value);
    };

    useEffect(() => {
        // 필드가 비어 있지 않은지 확인
        if (inviteCode.trim()) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [inviteCode]);

    const handleConfirmClick = async () => {
        try {
            // joinTeam API 호출
            const response = await API.Team.joinTeam(inviteCode);
            console.log('팀 가입 성공:', response);
            alert('팀에 성공적으로 가입되었습니다!');
            window.location.href = '/mypage';
        } catch (error) {
            console.error('팀 가입 실패:', error);
            alert('팀 가입에 실패했습니다. 초대 코드를 확인해주세요.');
        }
    };

    return (
        <div className="w-full mx-auto mt-10">
            <div className="border border-gray-300 rounded-lg overflow-hidden mb-5">
                <div className="bg-[#5A82F1] h-[50px] flex items-center justify-center">
                    <h2 className="text-[20px] font-bold text-center text-white">
                        초대 코드 입력하기
                    </h2>
                </div>
                <div className="relative bg-gray-100 flex flex-col items-center justify-center p-4 space-y-2">
                    <input
                        type="text"
                        value={inviteCode}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        placeholder="초대 코드를 입력해주세요"
                    />
                </div>
            </div>
            <button
                onClick={handleConfirmClick}
                className={`w-full py-3 bg-[#5A82F1] text-white font-bold rounded-lg transition-transform duration-300 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                disabled={!isFormValid}
            >
                확인
            </button>
        </div>
    );
};

export default InviteCodeField;
