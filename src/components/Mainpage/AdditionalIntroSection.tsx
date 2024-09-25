export default function AdditionalIntroSection() {
    return (
        <section className="bg-white w-full px-10 py-10 flex items-center justify-center flex-col">
            {' '}
            {/* width 100%와 padding 40px 적용 */}
            <div className="w-full text-left">
                {' '}
                {/* 전체 너비로 설정 */}
                <h2 className="text-3xl font-bold mb-4 pb-10">
                    구름다리 서비스의 <br />
                    특징은 무엇일까요?
                </h2>
                {/* 첫 번째 박스 그룹 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* 첫 번째 박스 */}
                    <div className="relative bg-blue-500 h-[300px] flex items-end p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg">
                        <div className="bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                            구름 1에 대한 설명
                        </div>
                    </div>

                    {/* 두 번째 박스 */}
                    <div className="relative bg-green-500 h-[300px] flex items-end p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg">
                        <div className="bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                            구름 2에 대한 설명
                        </div>
                    </div>

                    {/* 세 번째 박스 */}
                    <div className="relative bg-red-500 h-[300px] flex items-end p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg">
                        <div className="bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                            구름 3에 대한 설명
                        </div>
                    </div>
                </div>
            </div>
            {/* 두 번째 박스 그룹 */}
            <div className="w-full text-left mt-16">
                {' '}
                {/* 전체 너비로 설정 */}
                <h2 className="text-3xl font-bold mb-4 pb-10">
                    구름다리의 <br />
                    추가 기능은 무엇일까요?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* 첫 번째 박스 */}
                    <div className="relative bg-purple-500 h-[300px] flex items-end p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg">
                        <div className="bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                            추가 기능 1에 대한 설명
                        </div>
                    </div>

                    {/* 두 번째 박스 */}
                    <div className="relative bg-yellow-500 h-[300px] flex items-end p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg">
                        <div className="bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                            추가 기능 2에 대한 설명
                        </div>
                    </div>

                    {/* 세 번째 박스 */}
                    <div className="relative bg-pink-500 h-[300px] flex items-end p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg">
                        <div className="bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                            추가 기능 3에 대한 설명
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
