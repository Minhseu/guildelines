'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import msOutlook from '@/public/images/outLook/msOutlook.svg';
import mozilla from '@/public/images/mozilla/mozilla.png';
import googleMail from '@/public/images/google-mail/gmail-icon-logo-svgrepo-com.svg';

const Icons = () => {
    const router = useRouter();
    return (
        <div className="mt-10 flex flex-row gap-20  max-sm:flex-col max-sm:gap-10">
            <button
                className="flex flex-col justify-center items-center gap-1"
                type="button"
                onClick={() => router.push('/outlook')}
            >
                <label htmlFor="ms-outlook" className="text-lg underline ">
                    Microsoft Outlook
                </label>
                <Image
                    src={msOutlook}
                    width={300}
                    id="ms-outlook"
                    height={300}
                    alt="microsoft outlook icon"
                    className="icons w-56 h-56 max-sm:w-24 max-sm:h-24 border-2 border-white rounded-full p-5 duration-200 hover:bg-white hover:scale-110 hover:shadow-blue-500 hover:shadow-2xl"
                />
            </button>
            <button
                className="flex flex-col justify-center items-center gap-1"
                type="button"
                onClick={() => router.push('/outlook')}
            >
                <label htmlFor="ms-outlook" className="text-lg underline ">
                    Google Mail
                </label>
                <Image
                    src={googleMail}
                    width={300}
                    id="ms-outlook"
                    height={300}
                    alt="microsoft outlook icon"
                    className="icons w-56 h-56 max-sm:w-24 max-sm:h-24 border-2 border-white rounded-full p-5 duration-200 hover:bg-white hover:scale-110 hover:shadow-blue-500 hover:shadow-2xl"
                />
            </button>
            <button
                className="flex flex-col justify-center items-center gap-1"
                type="button"
                onClick={() => router.push('/mozilla')}
            >
                <label htmlFor="ms-outlook" className="text-lg underline">
                    Mozilla Thunderbird
                </label>
                <Image
                    src={mozilla}
                    width={300}
                    id="ms-outlook"
                    height={300}
                    alt="microsoft outlook icon"
                    className="icons w-56 h-56 max-sm:w-24 max-sm:h-24 border-2 border-white rounded-full p-5 duration-200 hover:bg-white hover:scale-110 hover:shadow-blue-500 hover:shadow-2xl"
                />
            </button>
        </div>
    );
};
export default Icons;
