import NotGood from '../assets/NotGood.svg';
import cn from '../lib/cn.ts';

export default function NeedLoginComponents() {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={NotGood} alt="Not Good" className="w-1/2 h-1/2" />
            <h1 className="text-2xl md:text-4xl font-bold mt-8">로그인 후</h1>
            <h1 className="text-2xl md:text-4xl font-bold mt-2">
                이용할 수 있는 기능이에요
            </h1>
            <a href="/login">
                <button
                    className={cn(
                        'mt-5 md:mt-10 px-20 md:px-40 py-4 bg-blue-500 rounded-lg',
                        'text-white text-base md:text-2xl font-bold'
                    )}
                >
                    로그인하러 가기
                </button>
            </a>
        </div>
    );
}
