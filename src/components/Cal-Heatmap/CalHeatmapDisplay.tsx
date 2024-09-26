import { useEffect } from 'react';
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
    useEffect(() => {
        const thisMonthAndDate = new Date().toISOString().slice(0, 10);
        const cal = new CalHeatmap();

        //console.log(data);
        cal.paint(
            {
                data: {
                    source: data,
                    type: 'json',
                    x: 'date',
                    y: 'achieved',
                    // groupY: 'min',
                },
                verticalOrientation: true,
                range: 1,
                itemSelector: '#ex-1',
                date: { 
                    start: new Date(thisMonthAndDate),
                    locale: 'ko',
                    timezone: 'Asia/Seoul' 
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
                    width: 50,
                    height: 50,
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
    }, [data]); // data가 변경될 때마다 업데이트

    return (
        <div className='p-10'>
            {/* 요일 표시 */}
            <div className='flex justify-between'>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <span
                key={day}
                className={'w-[50px] flex justify-center font-bold'}
                >
                    {day}
                </span>
            ))}
            </div>
            <div id="ex-1" className="flex justify-center"></div>
        </div>
    );;
};

export default CalHeatmapDisplay;
