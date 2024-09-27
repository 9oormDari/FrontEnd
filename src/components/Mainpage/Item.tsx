import cn from '../../lib/cn';

interface ItemProps {
    text: string;
    backgroundImage: string;
}

const Item = ({ text, backgroundImage }: ItemProps) => {
    return (
        <div
            className={cn(
                'relative h-[300px] flex items-end p-4 transform transition-transform',
                'duration-300 hover:scale-105 rounded-lg'
            )}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                {text}
            </div>
        </div>
    );
};

export default Item;
