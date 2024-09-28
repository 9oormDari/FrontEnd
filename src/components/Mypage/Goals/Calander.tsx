import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import { API } from '../../../lib/api/index.ts';
import cn from '../../../lib/cn';
import dayjs from 'dayjs';

interface CalendarDay {
    day: number | null;
}

interface DayAchieve {
    date: string; // "YYYY-MM-DD"
    achieved: number; // 0 ~ 4
}

const monthNames: string[] = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
];

// 히트맵 색상 매핑 함수
const getHeatmapColor = (achieved: number) => {
    switch (achieved) {
        case 1:
            return 'bg-blue-100';
        case 2:
            return 'bg-blue-200';
        case 3:
            return 'bg-blue-400';
        case 4:
            return 'bg-blue-600';
        default:
            return 'bg-white';
    }
};

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [calendarDays, setCalendarDays] = useState<(number | null)[]>([]);
    const [dayAchieveMap, setDayAchieveMap] = useState<Map<string, number>>(
        new Map()
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCalendar = async () => {
            setLoading(true);
            try {
                // 현재 날짜 기준으로 월을 형식에 맞게 설정 (예: '2024-09')
                const currentMonth = dayjs(currentDate).format('YYYY-MM');
                const response = await API.User.getCalendar(currentMonth);

                if (response.status === 'OK' && response.data) {
                    const dayAchieveList: DayAchieve[] =
                        response.data.dayAchiveList;
                    const achieveMap = new Map<string, number>();

                    dayAchieveList.forEach((item) => {
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

    useEffect(() => {
        generateCalendar(currentDate);
    }, [currentDate]);

    const generateCalendar = (date: Date): void => {
        const year: number = date.getFullYear();
        const month: number = date.getMonth();

        // 해당 월의 첫 날과 마지막 날
        const firstDayOfMonth: Date = new Date(year, month, 1);
        const lastDayOfMonth: Date = new Date(year, month + 1, 0);

        // 시작 요일 (0: 일요일, 6: 토요일)
        const startDay: number = firstDayOfMonth.getDay();
        const totalDays: number = lastDayOfMonth.getDate();

        const days: (number | null)[] = [];

        // 이전 달의 빈 칸 채우기
        for (let i = 0; i < startDay; i++) {
            days.push(null);
        }

        // 해당 월의 일수 채우기
        for (let day = 1; day <= totalDays; day++) {
            days.push(day);
        }

        setCalendarDays(days);
    };

    const handlePreviousMonth = (): void => {
        setCurrentDate(
            (prevDate) =>
                new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = (): void => {
        setCurrentDate(
            (prevDate) =>
                new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
        );
    };

    if (loading) {
        return <div className="text-center">로딩 중...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="bg-white rounded-lg p-4">
            {/* 달력 헤더 */}
            <div className="flex justify-center items-center mb-4 gap-5">
                <button
                    onClick={handlePreviousMonth}
                    className="text-gray-300 hover:text-gray-700"
                    aria-label="이전 달"
                >
                    <BsCaretLeftFill className="w-8 h-8" />
                </button>

                <h2 className="text-xl font-semibold">
                    {currentDate.getFullYear()}년{' '}
                    {monthNames[currentDate.getMonth()]}
                </h2>

                <button
                    onClick={handleNextMonth}
                    className="text-gray-300 hover:text-gray-700"
                    aria-label="다음 달"
                >
                    <BsCaretRightFill className="w-8 h-8" />
                </button>
            </div>

            {/* 요일 표시 */}
            <div className="grid grid-cols-7 gap-2 mb-2 font-semibold">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                    <span
                        key={day}
                        className="text-sm md:text-base text-center text-black"
                    >
                        {day}
                    </span>
                ))}
            </div>

            {/* 날짜 표시 */}
            <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                    // 현재 월과 일자를 기반으로 날짜 문자열 생성
                    const year = currentDate.getFullYear();
                    const month = currentDate.getMonth() + 1; // 0-based
                    const dayString = day
                        ? `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                        : null;

                    // 해당 날짜의 성취도 가져오기
                    const achieved =
                        dayString && dayAchieveMap.has(dayString)
                            ? dayAchieveMap.get(dayString)
                            : 0;

                    return (
                        <div
                            key={index}
                            className={cn(
                                'relative flex items-center justify-center text-xs md:text-base',
                                'h-8 sm:h-10 md:h-14  w-8 sm:w-10 md:w-14',
                                'text-center text-black rounded-full transition-colors',
                                `${day === null ? 'opacity-50' : 'cursor-pointer '}`,
                                `${day ? getHeatmapColor(achieved || 0) : ''}`
                            )}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
