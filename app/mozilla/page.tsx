'use client';

import React, { useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';
import Card from '../components/ui/card';
import { mozillaCards, CardData } from '@/public/data/allData';
import step1 from '@/public/images/mozilla/step1.png';
import step2 from '@/public/images/mozilla/step2.png';
import step3 from '@/public/images/mozilla/step3.png';
import step4 from '@/public/images/mozilla/step4.png';
import step5 from '@/public/images/mozilla/step5.png';
import step6 from '@/public/images/mozilla/step6.png';
import step7 from '@/public/images/mozilla/step7.png';
import step8 from '@/public/images/mozilla/step8.png';


export default function GLoutlook() {
    const [show, setShow] = useState(false);
    const [currentStep, setCurrentStep] = useState<number>(0);

    const steps: StaticImageData[] = [step1, step2, step3, step4, step5, step6, step7, step8];
    const cards: CardData[] = mozillaCards;

    useEffect(() => {
        // Show intro animation
        setTimeout(() => setShow(true), 10);

        // Preload all images into browser cache
        steps.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }, []);



    const handleNext = () => {
        if ((currentStep as number) < cards.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 gap-20 max-md:gap-5">
            <h1
                className={`mt-20 max-sm:mt-10 text-xl sm:text-3xl  text-center transition-all duration-700 ${
                    show
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                }`}
            >
                Mozilla Thunderbird Guideline
            </h1>

            <div
                className={`w-auto h-[300px] max-sm:w-[350px] max-sm:h-[400px] flex justify-self-center items-center transition-all duration-300 ${
                    show
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                }`}
            >
                <Card
                    imageSrc={steps[currentStep]}
                    title={cards[currentStep].title}
                    description={cards[currentStep].description}
                />
            </div>

            <div className="flex justify-center gap-4 ">
                <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className={`w-30 py-3 rounded-md text-white transition ${
                        currentStep === 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    Previous
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentStep === cards.length - 1}
                    className={`w-30 py-3 rounded-md text-white transition ${
                        currentStep === cards.length - 1
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700'
                    }`}
                >
                    Next
                </button>
            </div>
        </main>
    );
}
