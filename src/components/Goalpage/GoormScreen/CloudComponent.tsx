import React, { useEffect } from 'react';
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
                src={cloudType}
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
                    cloudType === ColorCloud ? 'opacity-100' : 'opacity-0'
                )}
                style={{ zIndex: 0 }}
            />
        </div>
    );
};

export default CloudComponent;
