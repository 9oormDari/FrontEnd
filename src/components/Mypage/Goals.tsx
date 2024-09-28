import { useLocation, useNavigate } from 'react-router-dom';

import MaintenanceGoals from './Goals/MaintenanceGoals';
import React from 'react';
import SettingGoals from './Goals/SettingGoals';
import cn from '../../lib/cn.ts';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Goals: React.FC = () => {
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
            <div className="py-8">
                {isMaintenance && <MaintenanceGoals />}
                {isSetting && <SettingGoals />}
            </div>
        </div>
    );
};

export default Goals;
