import { useState } from 'react';
import cn from '../../../lib/cn.ts';

const SettingGoals: React.FC = () => {
    const [newGoal, setNewGoal] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewGoal(e.target.value);
    };

    const handleSubmit = () => {
        // 목표 설정 로직 추가
        console.log('새 목표:', newGoal);
        setNewGoal('');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">목표 설정</h2>
            <p>목표를 설정해주세요.</p>
            <input
                className={cn(
                    "w-full px-4 py-2 border border-gray-300 rounded", 
                    "focus:outline-none focus:ring-2 focus:ring-blue-500"
                )}
                type="text"
                placeholder="새 목표 입력"
                value={newGoal}
                onChange={handleInputChange}
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                목표 추가
            </button>
        </div>
    );
};

export default SettingGoals;
