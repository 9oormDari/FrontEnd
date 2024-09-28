import { useState, useEffect } from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

interface CalendarDay {
  day: number | null;
}

const monthNames: string[] = [
  '1월', '2월', '3월', '4월', '5월', '6월',
  '7월', '8월', '9월', '10월', '11월', '12월'
];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<(number | null)[]>([]);

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
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = (): void => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  return (
    <div className="bg-white rounded-lg p-4">
      {/* 달력 헤더 */}
      <div className="flex justify-center items-center mb-4 gap-5">
        <button
          onClick={handlePreviousMonth}
          className="text-gray-300 hover:text-gray-700"
          aria-label="이전 달"
        >
          <BsCaretLeftFill className="w-8 h-8"/>
        </button>
        
        <h2 className="text-xl font-semibold">
          {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
        </h2>
        
        <button
          onClick={handleNextMonth}
          className="text-gray-300 hover:text-gray-700"
          aria-label="다음 달"
        >
          <BsCaretRightFill className="w-8 h-8"/>
        </button>
      </div>

      {/* 요일 표시 */}
      <div className="grid grid-cols-7 gap-2 mb-2 font-semibold">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <span key={day} className="text-sm md:text-base text-center text-black">
            {day}
          </span>
        ))}
      </div>

      {/* 날짜 표시 */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-10 text-xs text-black ${
              day === null ? 'opacity-50' : 'cursor-pointer hover:bg-gray-200'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
