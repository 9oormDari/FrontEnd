export default function ImageIntroSection() {
    return (
        <section
            className="relative bg-[#47484A] p-10 flex items-center justify-center h-[500px]"
            style={{
                backgroundImage: "url('/path/to/your/background-image.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute bottom-10 text-center text-white">
                <h2 className="text-4xl font-bold mb-2">
                    구름다리와 함께 이뤄나가요!
                </h2>
                <p className="text-lg">
                    구름다리는 친구들과 함께 매일 루틴을 달성하며 목표를 향해
                    나아가는 서비스입니다
                </p>
            </div>
        </section>
    );
}
