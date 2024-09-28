import { useEffect, useState } from 'react';
import { API } from '../../../lib/api/index.ts';
import dayjs from 'dayjs';
import cn from '../../../lib/cn';

const DDayCounter: React.FC = () => {
    const [dDay, setDDay] = useState<number | null>(null);
    const [myGoal, setMyGoal] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                // 현재 날짜 기준으로 월을 형식에 맞게 설정 (예: '2024-09')
                const currentMonth = dayjs().format('YYYY-MM');
                const response = await API.User.getCalendar(currentMonth);

                // dDay 업데이트
                setDDay(response.data.dDay);
                setMyGoal(response.data.goal);
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
    }, []); // 빈 의존성 배열로 컴포넌트 마운트 시 한 번 실행

    if (loading) {
        return <div className="text-center">로딩 중...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div
            className={cn(
                'bg-white p-4 rounded shadow text-left mb-4',
                'flex flex-row items-center justify-left gap-4',
                'w-40 h-14'
            )}
        >
            <h1 className="text-2xl font-bold text-blue-500">D-{dDay}</h1>
            <p className="text-base font-semibold text-gray-500">{myGoal}</p>
        </div>
    );
};

export default DDayCounter;
