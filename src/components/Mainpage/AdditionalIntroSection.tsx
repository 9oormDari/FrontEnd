// AdditionalIntroSection.tsx
export default function AdditionalIntroSection() {
    return (
        <section className="bg-white p-10 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">
                    더 많은 정보를 제공합니다
                </h2>
                <p className="mb-6">
                    우리의 서비스가 어떻게 작동하는지 더 알아보세요. 여러 기능과
                    혜택을 소개합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">기능 1</h3>
                        <p>기능 1에 대한 설명이 들어갑니다.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">기능 2</h3>
                        <p>기능 2에 대한 설명이 들어갑니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
