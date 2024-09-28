import GoormdariFriends from '../../assets/MainPage/GoormdariFriends.svg';
import cn from '../../lib/cn.ts';
export default function ImageIntroSection() {
    return (
        <section
            className={cn(
                'relative bg-gradient-to-b from-[#5A82F1] to-[#DAE4FF]',
                'p-2 md:p-10 flex items-center flex-col justify-center'
            )}
        >
            <img
                src={GoormdariFriends}
                alt="GoormdariFriends"
                className="md:mt-20 h-[358.46px] w-[182.52] md:h-[762] md:w-[388]"
            />
            <div className="md:pt-10 bottom-10 text-left md:text-center text-[#455DA8]">
                <h2 className="text-2xl md:text-[44px] font-bold mb-4 md:mb-8">
                    구름다리와 <br className="md:hidden" />
                    함께 이뤄나가요!
                </h2>
                <p className="text-base md:text-lg">
                    구름다리는 친구들과 함께 매일 루틴을 달성하며{' '}
                    <br className="md:hidden" />
                    목표를 향해 나아가는 서비스입니다
                </p>
                {/* 데스크탑에서 보이는 p태그 */}
                <p className="text-lg hidden md:block">
                    친구들과의 루틴 인증을 통해 꾸준함을 유지하고 목표에
                    가까워질 수 있도록 도와드립니다 <br />
                    구름다리와 함께 생산적이고 의미있는 하루를 만들어보세요!
                </p>
                {/* 모바일에서 보이는 p태그 */}
                <p className="text-base md:hidden mb-4">
                    팀과의 루틴 인증을 통해 꾸준하게 목표를 이뤄보세요!
                </p>
            </div>
        </section>
    );
}
