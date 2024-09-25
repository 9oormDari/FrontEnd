import Item from './Item';

export default function AdditionalIntroSection() {
    const items = [
        {
            text: '구름 1에 대한 설명',
            backgroundImage: '/path/to/image1.jpg',
        },
        {
            text: '구름 2에 대한 설명',
            backgroundImage: '/path/to/image2.jpg',
        },
        {
            text: '구름 3에 대한 설명',
            backgroundImage: '/path/to/image3.jpg',
        },
    ];

    const additionalItems = [
        {
            text: '과연 구름 다리는',
            backgroundImage: '/path/to/image4.jpg',
        },
        {
            text: '무엇이 그렇게도',
            backgroundImage: '/path/to/image5.jpg',
        },
        {
            text: '다를까요',
            backgroundImage: '/path/to/image6.jpg',
        },
    ];

    return (
        <section className="bg-white w-full px-10 py-10 flex items-center justify-center flex-col">
            {/* 첫 번째 박스 그룹 */}
            <div className="w-full text-left">
                <h2 className="text-3xl font-bold mb-4 pb-10">
                    구름다리 서비스의 <br />
                    특징은 무엇일까요?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            text={item.text}
                            backgroundImage={item.backgroundImage}
                        />
                    ))}
                </div>
            </div>

            {/* 두 번째 박스 그룹 */}
            <div className="w-full text-left mt-16">
                <h2 className="text-3xl font-bold mb-4 pb-10">
                    구름다리 함께라면, <br />
                    무엇이 다른가요?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {additionalItems.map((item, index) => (
                        <Item
                            key={index}
                            text={item.text}
                            backgroundImage={item.backgroundImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
