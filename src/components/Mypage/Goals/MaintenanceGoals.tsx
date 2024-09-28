import { useEffect, useState } from 'react';

import { API } from '../../../lib/api/index.ts';
import Calendar from './Calander';
import DDayCounter from './DDayCounter';
import Pending from '../../Pending/Loading.tsx'; // Pending 컴포넌트 추가
import dayjs from 'dayjs';

const MaintenanceGoals: React.FC = () => {
    const [dDay, setDDay] = useState<number | null>(null);
    const [myGoal, setMyGoal] = useState<string | null>(null);
    const [dayAchieveMap, setDayAchieveMap] = useState<Map<string, number>>(
        new Map()
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                const currentMonth = dayjs(currentDate).format('YYYY-MM');
                const response = await API.User.getCalendar(currentMonth);

                if (response.status === 'OK' && response.data) {
                    // D-Day 및 목표 업데이트
                    setDDay(response.data.dDay);
                    setMyGoal(response.data.goal);

                    // 달성도 맵핑
                    const dayAchieveList = response.data.dayAchiveList;
                    const achieveMap = new Map<string, number>();
                    dayAchieveList.forEach((item: any) => {
                        achieveMap.set(item.date, item.achieved);
                    });
                    setDayAchieveMap(achieveMap);
                } else {
                    setError(
                        response.description ||
                            '캘린더 데이터를 불러오는 데 실패했습니다.'
                    );
                }
            } catch (err: any) {
                console.error('캘린더 데이터를 가져오는 중 오류 발생:', err);
                setError(
                    err.message || '캘린더 데이터를 불러오는 데 실패했습니다.'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCalendar();
    }, [currentDate]);

    return (
        <div className="bg-gray-200 rounded-lg p-4">
            {loading ? (
                <Pending height={600} backgroundColor="D9D9D9" /> // 로딩 중일 때만 Pending 컴포넌트를 표시
            ) : error ? (
                <div className="text-center text-red-500">{error}</div> // 에러 메시지 표시
            ) : (
                <>
                    {/* 하위 컴포넌트에 필요한 데이터 전달 */}
                    <DDayCounter dDay={dDay} myGoal={myGoal} />
                    <Calendar
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                        dayAchieveMap={dayAchieveMap}
                    />
                </>
            )}
        </div>
    );
};

export default MaintenanceGoals;
