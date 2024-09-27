import { useState, useEffect } from 'react';
import CalHeatmapDisplay from './CalHeatmapDisplay';

interface DataItem {
    date: string;
    achieved: number;
}

const HeatmapComponent: React.FC = () => {
    const [typedJsonData, setTypedJsonData] = useState<DataItem[]>([]);

    // 임시로 가짜 데이터를 만들어서 테스트
    // 백엔드에서 데이터를 받아오면 이 부분은 삭제해주세요.
    useEffect(() => {
        fetch(
            `https://gist.githubusercontent.com/karpitony/11107c6596e5e5fa8f5ec9c501e54d4d/raw/98899699ee3e981b47b42aa7d5e12864b3921bd8/data.json`
        )
            .then((response) => response.json())
            .then((jsonData) => {
                setTypedJsonData(jsonData);
                console.log(jsonData);
            });
    }, []);

    return (
        <div>
            <CalHeatmapDisplay data={typedJsonData} />{' '}
            {/* 데이터를 props로 전달 */}
        </div>
    );
};

export default HeatmapComponent;
