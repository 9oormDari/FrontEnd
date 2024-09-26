import cn from '../lib/cn';

interface GuideCardProps {
    stepNumber: number;
    imageUrl?: string;
    footerText: string;
}

const GuideCard: React.FC<GuideCardProps> = ({
    stepNumber,
    imageUrl,
    footerText,
}) => {
    return (
        <div
            className={cn(
                'max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#E9EBF8] border border-gray-200',
                'w-[234px] h-[322px] m-4'
            )}
        >
            <div className="bg-blue-100 text-center p-4 rounded-t-lg">
                <h2 className="text-xl font-semibold">STEP {stepNumber}</h2>
            </div>
            <div className="h-32 bg-gray-200 flex items-center justify-center">
                {/* 이미지가 존재할 경우에만 렌더링 */}
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Card Image"
                        className="w-full h-32 object-cover"
                    />
                )}
            </div>
            <div className="bg-blue-100 text-center p-4 rounded-b-lg">
                <p>{footerText}</p>
            </div>
        </div>
    );
};

export default GuideCard;
