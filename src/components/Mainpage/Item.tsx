import cn from '../../lib/cn';
import React from 'react';
interface ItemProps {
    text: string;
    image: string;
}

const Item: React.FC<ItemProps> = ({ text, image }) => {
    const formattedText = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div
            className={cn(
                'relative h-[70px] md:h-[300px] w-[300px] p-5',
                'transform transition-transform',
                'duration-300 hover:scale-105 rounded-lg bg-[#E8EAF8] shadow-lg'
            )}
        >
            {/* 텍스트를 상단에 고정 */}
            <div
                className={cn(
                    'absolute top-2 md:top-5 left-2 md:left-5 bg-opacity-50 text-black',
                    'text-base md:text-2xl text-left font-normal md:font-semibold p-2 rounded-t-lg'
                )}
            >
                {formattedText}
            </div>

            {/* 이미지를 왼쪽 하단에 고정 */}
            <img
                src={image}
                alt={text}
                className={cn(
                    'absolute bottom-2 md:bottom-5 right-2 md:right-5',
                    'object-contain rounded-b-lg',
                    'h-[50px] w-[50px] md:h-[120px] md:w-[120px]'
                )}
            />
        </div>
    );
};

export default Item;
