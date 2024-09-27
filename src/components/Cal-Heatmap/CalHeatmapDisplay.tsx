import { useState, useEffect } from 'react';
import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 불러오기
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);
dayjs.locale('ko');

interface DataItem {
    date: string;
    achieved: number;
}

interface CalHeatmapDisplayProps {
    data: DataItem[];
}

const CalHeatmapDisplay: React.FC<CalHeatmapDisplayProps> = ({ data }) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
    const [cellSize, setCellSize] = useState<number>(
        window.innerWidth < 768 ? 37 : 50
    );

    // 창 크기 변경 시 isMobile과 cellSize 업데이트
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setCellSize(mobile ? 37 : 50);
        };

        window.addEventListener('resize', handleResize);

        // 초기 실행
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const thisMonthAndDate = new Date().toISOString().slice(0, 10);
        const cal = new CalHeatmap();

        cal.paint(
            {
                data: {
                    source: data,
                    type: 'json',
                    x: 'date',
                    y: 'achieved',
                },
                verticalOrientation: true,
                range: 1,
                itemSelector: '#ex-1',
                date: {
                    start: new Date(thisMonthAndDate),
                    locale: 'ko',
                    timezone: 'Asia/Seoul',
                },
                scale: {
                    color: {
                        type: 'diverging',
                        scheme: 'blues',
                        domain: [0, 8],
                    },
                },
                domain: {
                    type: 'month',
                    padding: [10, 10, 10, 10],
                    label: { text: null },
                },
                subDomain: {
                    type: 'xDay',
                    radius: 100,
                    width: cellSize,
                    height: cellSize,
                    label: 'D',
                },
            },
            [
                [
                    Tooltip,
                    {
                        text: function (date: Date, value: number) {
                            const formattedDate =
                                dayjs(date).format('MM[월] DD[일]');
                            return (
                                formattedDate +
                                ' ' +
                                (value
                                    ? `${value}개의 목표를 달성했습니다.`
                                    : '데이터가 없습니다.')
                            );
                        },
                    },
                ],
            ]
        );

        return () => {
            cal.destroy();
        };
    }, [data, cellSize]); // data와 cellSize가 변경될 때마다 업데이트

    return (
        <div className="p-4 sm:p-10">
            {/* 요일 표시 */}
            <div className="flex justify-between mb-4">
                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                    <span
                        key={day}
                        className="w-[50px] sm:w-[50px] flex justify-center font-bold"
                    >
                        {day}
                    </span>
                ))}
            </div>
            {/* 캘린더 */}
            <div id="ex-1" className="flex justify-center"></div>
        </div>
    );
};

export default CalHeatmapDisplay;
