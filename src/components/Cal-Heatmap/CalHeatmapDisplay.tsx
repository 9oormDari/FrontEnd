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

        console.log(data);
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
                date: { start: new Date(thisMonthAndDate) },
                scale: {
                    color: {
                        type: 'diverging',
                        scheme: 'PRGn',
                        domain: [0, 6],
                    },
                },
                domain: {
                    type: 'month',
                    padding: [10, 10, 10, 10],
                    label: { position: 'top' },
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

        // cleanup 함수로 CalHeatmap 인스턴스 제거 (옵션)
        return () => {
            cal.destroy();
        };
    }, [data]); // data가 변경될 때마다 업데이트

    return <div id="ex-1" className="margin-bottom--md"></div>;
};

export default CalHeatmapDisplay;
