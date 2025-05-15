'use client';

import React, { useEffect, useState } from 'react';
import Card from '../components/ui/card';
import { outlookCards, CardData } from '@/public/data/allData';

export default function GLoutlook() {
    const [show, setShow] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const cards: CardData[] = outlookCards;

    useEffect(() => {
        setTimeout(() => setShow(true), 10);
    }, []);

    const handleNext = () => {
        if (currentStep < cards.length - 1) {
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
                Microsoft Outlook Guideline
            </h1>

            <div
                className={`w-auto h-[400px] max-sm:w-[350px] max-sm:h-[400px] flex justify-self-center items-center transition-all duration-300 ${
                    show
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                }`}
            >
                <Card
                    imageSrc={cards[currentStep].imageSrc}
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
