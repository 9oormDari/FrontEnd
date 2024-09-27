import GoormdariFriends from '../../assets/MainPage/GoormdariFriends.svg';
import cn from '../../lib/cn.ts';
export default function ImageIntroSection() {
    return (
        <section
            className={cn(
                "relative bg-gradient-to-b from-[#5A82F1] to-[#DAE4FF] p-10 flex items-center",
                "flex-col justify-center"
            )}
        >
            <img 
                src={GoormdariFriends}
                alt="GoormdariFriends"
                className='mt-20'
            />
            <div className="pt-10 bottom-10 text-center text-[#455DA8]">
                <h2 className="text-[44px] font-bold mb-8">
                    구름다리와 함께 이뤄나가요!
                </h2>
                <p className="text-lg">
                    구름다리는 친구들과 함께 매일 루틴을 달성하며 목표를 향해 나아가는 서비스입니다
                </p>
                <p className="text-lg">
                    친구들과의 루틴 인증을 통해 꾸준함을 유지하고 목표에 가까워질 수 있도록 도와드립니다
                </p>
                <p className="text-lg">
                    구름다리와 함께 생산적이고 의미있는 하루를 만들어보세요!
                </p>  
            </div>
        </section>
    );
}
