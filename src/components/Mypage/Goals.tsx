import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Goals() {
    const navigate = useNavigate();
    const query = useQuery();
    const sector = query.get('sector') || 'maintenance'; // 기본값으로 maintenance

    // sector에 따라 다른 스타일 적용
    const isMaintenance = sector === 'maintenance';
    const isSetting = sector === 'setting';

    return (
        <div className="w-full max-w-lg">
            {/* 목표 점검 및 설정 버튼 */}
            <div className="flex w-full">
                {/* 목표 점검 (maintenance) 버튼 */}
                <button
                    onClick={() => navigate('?sector=maintenance')}
                    className={`w-1/2 py-4 text-center ${
                        isMaintenance ? 'border-b-4 border-blue-500' : ''
                    }`}
                >
                    목표 점검
                </button>

                {/* 목표 설정 (setting) 버튼 */}
                <button
                    onClick={() => navigate('?sector=setting')}
                    className={`w-1/2 py-4 text-center ${
                        isSetting ? 'border-b-4 border-blue-500' : ''
                    }`}
                >
                    목표 설정
                </button>
            </div>

            {/* sector에 따라 보여줄 컴포넌트 분기 */}
            <div className="p-8">
                {isMaintenance && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">목표 점검</h2>
                        <ul className="list-disc pl-5">
                            <li>하루 10,000보 걷기</li>
                            <li>주 3회 운동</li>
                            <li>매일 30분 책 읽기</li>
                        </ul>
                    </div>
                )}

                {isSetting && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">목표 설정</h2>
                        <p>목표를 설정해주세요.</p>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="새 목표 입력"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
