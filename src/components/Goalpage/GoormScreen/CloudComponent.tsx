import cn from '../../../lib/cn';

interface CloudComponentProps {
    cloudType: string;
    colStart: number;
    rowStart: number;
    hidden: boolean;
}

export default function CloudComponent({ cloudType, colStart, rowStart, hidden }: CloudComponentProps) {
    return (
        <div 
            className={cn(
                `col-start-${colStart}`, 
                `row-start-${rowStart}`, 
                "flex justify-center",
                `${hidden ? "hidden" : ""}`
            )}
        >
            <img src={cloudType} alt="구름" className="w-16 h-16 md:w-32 md:h-32" />
        </div>
    );
}
