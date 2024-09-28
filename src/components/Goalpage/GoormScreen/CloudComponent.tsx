import React, { useEffect, useState } from 'react';
import cn from '../../../lib/cn';
import CloudDisk from '../../../assets/GoalPage/CloudDisk.svg';
import ColorCloud from '../../../assets/GoalPage/ColorCloud.svg';

interface CloudComponentProps {
    cloudType: string;
    colStart: number;
    rowStart: number;
    hidden: boolean;
}

const CloudComponent: React.FC<CloudComponentProps> = ({
    cloudType,
    colStart,
    rowStart,
    hidden,
}) => {
    const [currentCloudType, setCurrentCloudType] = useState(cloudType);

    useEffect(() => {
        // cloudType이 변경될 때마다 currentCloudType을 업데이트
        setCurrentCloudType(cloudType);
        console.log('cloudType:', cloudType);

        // 이 부분에 cloudType이 변경될 때 수행할 추가 작업을 넣을 수 있습니다.
        // 예: 애니메이션이나 효과 등
    }, [cloudType]);

    return (
        <div
            className={cn(
                'flex justify-center flex-col items-center transition-opacity duration-500',
                hidden ? 'opacity-0' : 'opacity-100'
            )}
            style={{
                gridColumnStart: colStart,
                gridRowStart: rowStart,
            }}
        >
            <img
                src={currentCloudType}
                alt="구름"
                className="md:w-[220px] md:h-[220px]"
                style={{ zIndex: 2 }}
            />
            <img
                src={CloudDisk}
                alt="받침"
                className={cn(
                    'w-1/4 h-1/4 md:w-[288px] md:h-[156px]',
                    'absolute mt-20 md:mt-[200px] transition-opacity duration-500',
                    currentCloudType === ColorCloud ? 'opacity-100' : 'opacity-0'
                )}
                style={{ zIndex: 0 }}
            />
        </div>
    );
};

export default CloudComponent;
