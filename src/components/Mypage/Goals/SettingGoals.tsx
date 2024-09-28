import CreateTeam from './Setting/CreateTeam.tsx'; // CreateTeam 컴포넌트를 임포트합니다.
import NotGood from '../../../assets/NotGood.svg';
import cn from '../../../lib/cn.ts';
import { useState } from 'react';

const SettingGoals: React.FC = () => {
    const [showCreateTeam, setShowCreateTeam] = useState(false);

    const handleCreateTeamClick = () => {
        setShowCreateTeam(true);
    };

    if (showCreateTeam) {
        return <CreateTeam />;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <img src={NotGood} alt="Not Good" className="w-2/5 h-2/5" />
            <div className="text-[20px] md:text-[30px] font-bold mt-8">
                생성된 팀이 없어요! <br />
                팀을 만들어 주세요
            </div>
            <div className="flex flex-col gap-2.5 mt-5 md:mt-10">
                <button
                    className={cn(
                        'w-[500px] h-[70px] bg-[#5A82F1] rounded-lg',
                        'text-white text-base md:text-2xl font-bold',
                        'transition-transform duration-300 hover:scale-105'
                    )}
                    onClick={handleCreateTeamClick}
                >
                    팀 만들기
                </button>
                <button
                    className={cn(
                        'w-[500px] h-[70px] bg-[#797979] rounded-lg',
                        'text-white text-base md:text-2xl font-bold',
                        'transition-transform duration-300 hover:scale-105'
                    )}
                >
                    초대 코드 입력하기
                </button>
            </div>
        </div>
    );
};

export default SettingGoals;
