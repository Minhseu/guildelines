import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
interface CardProps {
    imageSrc: string | StaticImageData;
    title: string;
    description: string;
}

export default function Card({ imageSrc, title, description }: CardProps) {
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (imageSrc != '') {
            setLoading(true);
        }
    }, [imageSrc]);

    return (
        <div className="w-[500px] h-[400px] max-md:h-[400px]  border-2 border-gray-200 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
            <div className="h-[80%] w-full relative bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={700}
                    height={440}
                    onLoad={() => setLoading(true)}
                    className={`w-full h-full object-contain transition duration-500 ${
                        loading ? 'blur-0' : 'blur-md'
                    }`}
                />
            </div>

            {/* Text takes 20% */}
            <div className="h-[20%] max-sm:h-[20%] p-4 border-t border-gray-300">
                <h2 className="text-lg font-bold  truncate">{title}</h2>
                <p className="text-xs  ">{description}</p>
            </div>
        </div>
    );
}
