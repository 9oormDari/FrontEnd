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
                'max-w-sm rounded-[20px] overflow-hidden shadow-lg bg-[#E9EBF8] border-[#7697F4] border-[5px]',
                'w-[160px] h-[230px] lg:w-64 sm:h-96 m-4',
                'transform transition-transform duration-300 hover:scale-105'
            )}
        >
            <div className="bg-blue-100 text-center p-4 rounded-t-[15px]">
                <h2 className="text-xl sm:text-2xl font-semibold">
                    STEP {stepNumber}
                </h2>
            </div>
            <div className="h-auto bg-gray-200 flex items-center justify-center">
                {/* 이미지가 존재할 경우에만 렌더링 */}
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Card Image"
                        className="w-full h-auto object-cover"
                    />
                )}
            </div>
            <div className="bg-blue-100 text-center py-2 sm:py-4 rounded-b-[15px]">
                <p
                    className="text-lg sm:text-2xl text-[#575757] font-mid"
                    dangerouslySetInnerHTML={{ __html: footerText }}
                />
            </div>
        </div>
    );
};

export default GuideCard;
