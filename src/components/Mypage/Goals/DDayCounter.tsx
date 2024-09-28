import cn from '../../../lib/cn';

interface DDayCounterProps {
    dDay: number | null;
    myGoal: string | null;
}

const DDayCounter: React.FC<DDayCounterProps> = ({ dDay, myGoal }) => {
    return (
        <div
            className={cn(
                'bg-white p-4 rounded shadow text-left mb-4',
                'flex flex-row items-center justify-left gap-4',
                'w-60 h-14'
            )}
        >
            <h1 className="text-2xl font-bold text-blue-500">D-{dDay}</h1>
            <p className="text-xl font-semibold text-gray-500">{myGoal}</p>
        </div>
    );
};

export default DDayCounter;
