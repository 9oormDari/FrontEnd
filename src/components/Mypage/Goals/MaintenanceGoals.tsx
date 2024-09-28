import DDayCounter from './DDayCounter';
import Calander from './Calander';

const MaintenanceGoals: React.FC = () => {
    return (
        <div className="bg-gray-200 rounded-lg p-4">
            <DDayCounter />
            <Calander />
        </div>
    );
};

export default MaintenanceGoals;
