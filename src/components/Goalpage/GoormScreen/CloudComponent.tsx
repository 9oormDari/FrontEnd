import cn from '../../../lib/cn';
import CloudDisk from '../../../assets/GoalPage/CloudDisk.svg';
import ColorCloud from '../../../assets/GoalPage/ColorCloud.svg';

interface CloudComponentProps {
    cloudType: string;
    colStart: number;
    rowStart: number;
    hidden: boolean;
}

export default function CloudComponent({
    cloudType,
    colStart,
    rowStart,
    hidden,
}: CloudComponentProps) {
    return (
        <div
            className={cn(
                'flex justify-center flex-col items-center',
                `${hidden ? 'hidden' : ''}`
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
                    'absolute mt-20 md:mt-[200px]',
                    `${cloudType === ColorCloud ? '' : 'hidden'}`
                )}
                style={{ zIndex: 1 }}
            />
        </div>
    );
}
