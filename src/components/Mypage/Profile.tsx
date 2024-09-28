import { useEffect, useState } from 'react';

import { API } from '../../lib/api'; // 적절한 경로로 __User import

export default function Profile() {
    const [userInfo, setUserInfo] = useState<{
        nickname: string;
        profileImageUrl: string | null;
    }>({
        nickname: '',
        profileImageUrl: null,
    });

    // 화면이 렌더될 때 getMyInfo API 호출
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await API.User.getMyInfo();
                setUserInfo({
                    nickname: response.nickname,
                    profileImageUrl: response.profileUrl,
                });

                console.log('사용자 정보:', response);
            } catch (error) {
                console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div className="w-full max-w-lg flex flex-col items-center justify-start p-8 pt-0">
            {/* 사진 영역 */}
            <div className="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 border-[5px] border-[#5A82F1]">
                {userInfo.profileImageUrl ? (
                    <img
                        src={userInfo.profileImageUrl}
                        alt="프로필 이미지"
                        className="w-full h-full object-cover rounded-full"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        {/* 프로필 이미지가 없을 경우 기본 이미지 또는 텍스트 */}
                        <span>이미지 없음</span>
                    </div>
                )}
            </div>

            {/* 닉네임 */}
            <p className="text-xl font-semibold mb-4">
                {userInfo.nickname || '닉네임 없음'}
            </p>

            {/* 프로필 수정 버튼 */}
            <button className="w-[230px] h-[70px] bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                프로필 수정
            </button>
        </div>
    );
}
