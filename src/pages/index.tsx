import { useEffect, useState } from 'react';

import AdditionalIntroSection from '../components/Mainpage/AdditionalIntroSection.tsx';
import ImageIntroSection from '../components/Mainpage/ImageIntroSection.tsx';
import Pending from '../components/Pending/Loading.tsx';

export default function Index() {
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPending(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isPending ? (
                <Pending height="100vh" />
            ) : (
                <>
                    <ImageIntroSection />
                    <AdditionalIntroSection />
                </>
            )}
        </div>
    );
}
