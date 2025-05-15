'use server';
import Icons from './components/ui/homepageICONS';

export default async function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5 max-sm:gap-2 max-sm:flex max-sm:justify-start fade-in-out">
            <h1 className="text-6xl max-sm:text-2xl max-sm:mt-30">
                Welcome to Guidelines
            </h1>
            <div>
                <p className="text-lg max-sm:text-xs text-center px-4">
                    Please redirect yourself by the icons below or the navigate
                    bar above!
                </p>
            </div>
            <Icons />
        </div>
    );
}
