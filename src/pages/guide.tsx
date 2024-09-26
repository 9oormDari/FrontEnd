import GuideCard from '../components/GuideCard';
import exampleImage from '../assets/example.png';
import cn from '../lib/cn';

export default function Guide() {
    return (
        <div>
            <h1 className="text-4xl font-bold flex justify-center p-5">
                구름다리 어떻게 이용하나요?
            </h1>

            <div
                className={cn(
                    'flex flex-wrap items-center justify-center',
                    'h-screen bg-gray-100'
                )}
            >
                <GuideCard
                    stepNumber={1}
                    imageUrl={exampleImage}
                    footerText="2줄 안으로"
                />
                <GuideCard
                    stepNumber={2}
                    imageUrl={exampleImage}
                    footerText="2줄 안으로"
                />
                <GuideCard
                    stepNumber={3}
                    imageUrl={exampleImage}
                    footerText="2줄 안으로"
                />
                <GuideCard
                    stepNumber={4}
                    imageUrl={exampleImage}
                    footerText="2줄 안으로"
                />
            </div>
        </div>
    );
}
