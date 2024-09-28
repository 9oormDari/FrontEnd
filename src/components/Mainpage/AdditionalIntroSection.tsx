import Item from './Item';
import cn from '../../lib/cn';
import Flag from '../../assets/MainPage/Icons/Flag.svg';
import AchievedCircle from '../../assets/MainPage/Icons/AchievedCircle.svg';
import Camera from '../../assets/MainPage/Icons/Camera.svg';
import Friends from '../../assets/MainPage/Icons/Friends.svg';
import EnjoyFace from '../../assets/MainPage/Icons/EnjoyFace.svg';
import Trophy from '../../assets/MainPage/Icons/Trophy.svg';
import StartButton from '../StartButton';
import cloudImage from '../../assets/cloud.png';

export default function AdditionalIntroSection() {
    const items = [
        {
            text: '팀과 함께하는\n 목표 및 루틴 설정',
            image: Flag,
        },
        {
            text: '개인 루틴\n성취율 확인',
            image: AchievedCircle,
        },
        {
            text: '간단한 사진 인증을\n통한 일상 공유',
            image: Camera,
        },
    ];

    const additionalItems = [
        {
            text: '친구들과 함께\n의지를 다지는 시간',
            image: Friends,
        },
        {
            text: '한눈에 보이는\n성취의 기쁨',
            image: EnjoyFace,
        },
        {
            text: '팀 내 MVP로\n서로에게 동기부여',
            image: Trophy,
        },
    ];

    return (
        <section
            className={cn(
                'bg-white w-full p-5 md:px-10 py-10 flex items-center',
                'justify-center flex-col md:px-60 '
            )}
        >
            {/* 첫 번째 박스 그룹 */}
            <div className="w-full text-left">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 pb-10 leading-10">
                    구름다리의 <br />
                    특징은 무엇일까요?
                </h2>
                <div className="place-items-center grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {items.map((item, index) => (
                        <Item key={index} text={item.text} image={item.image} />
                    ))}
                </div>
            </div>

            {/* 두 번째 박스 그룹 */}
            <div className="w-full text-left mt-20 md:mt-60">
                <h2 className="text-3xl font-bold mb-4 pb-10">
                    구름다리 함께라면, <br />
                    무엇이 다른가요?
                </h2>
                <div className="place-items-center grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {additionalItems.map((item, index) => (
                        <Item key={index} text={item.text} image={item.image} />
                    ))}
                </div>
            </div>
            <div className="mt-24 mb-24 sm:mt-60 sm:mb-40 text-white">
                <StartButton isLoggedIn={false} />{' '}
                {/* 로그인 상태에 따라 prop 변경 */}
            </div>
        </section>
    );
}
