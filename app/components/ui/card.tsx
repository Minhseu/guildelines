import Image, { StaticImageData } from 'next/image';
interface CardProps {
    imageSrc: string | StaticImageData;
    title: string;
    description: string;
}

export default function Card({ imageSrc, title, description }: CardProps) {
    return (
        <div className="w-[500px] h-[500px] max-md:h-[400px]  bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
            <div className="h-[80%] w-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-contain "
                    width={700}
                    height={440} 
                />
            </div>

            {/* Text takes 20% */}
            <div className="h-[25%] max-sm:h-[20%] p-4 border-t border-gray-300">
                <h2 className="text-lg font-bold text-gray-800 truncate">
                    {title}
                </h2>
                <p className="text-xs text-gray-600 ">{description}</p>
            </div>
        </div>
    );
}
