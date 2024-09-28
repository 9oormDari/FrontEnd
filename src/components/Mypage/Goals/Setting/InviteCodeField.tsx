import React, { useState } from 'react';

import cn from '../../../../lib/cn';

const InviteCodeField: React.FC = () => {
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');

    const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode1(e.target.value);
    };

    const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode2(e.target.value);
    };

    const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode3(e.target.value);
    };

    const handleConfirmClick = () => {
        // 확인 버튼 클릭 시 로직 추가
        console.log('초대 코드:', code1, code2, code3);
    };

    return (
        <div className="bg-[#E9EBF8] p-10 rounded-lg shadow-lg w-full max-w-md drop-shadow-md">
            <div className="border border-gray-300 rounded-lg overflow-hidden mb-5">
                <div className="bg-[#5A82F1] h-[50px] flex items-center justify-center">
                    <h2 className="text-[20px] font-bold text-center text-white">
                        초대코드 보내기
                    </h2>
                </div>
                <div className="relative bg-gray-100 flex flex-col items-center justify-center p-4 space-y-2">
                    <input
                        type="text"
                        id="code1"
                        value={code1}
                        onChange={handleInputChange1}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        placeholder="코드 1"
                    />
                    <input
                        type="text"
                        id="code2"
                        value={code2}
                        onChange={handleInputChange2}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        placeholder="코드 2"
                    />
                    <input
                        type="text"
                        id="code3"
                        value={code3}
                        onChange={handleInputChange3}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
                        placeholder="코드 3"
                    />
                </div>
            </div>

            <button
                onClick={handleConfirmClick}
                className={cn(
                    'w-full py-3 bg-[#5A82F1] text-white font-bold rounded-lg',
                    'transition-transform duration-300 hover:scale-105'
                )}
            >
                확인
            </button>
        </div>
    );
};

export default InviteCodeField;
