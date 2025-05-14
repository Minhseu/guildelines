// components/Footer.tsx
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className=" py-10 mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-sm:text-center">
                {/* Site Promotion */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        🚀 Welcome to my DEMO
                    </h2>
                    <p className="text-md">
                        Interested in this design? Feel free to contact me for
                        more information, collaboration opportunities, or
                        project inquiries.
                    </p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Connect me</h3>
                    <div className="flex max-sm:justify-center gap-4">
                        <a
                            href="https://www.facebook.com/share/1FWwHnY3mJ/?mibextid=qi2Omg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://github.com/Minhseu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-400 transition"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/_minhseu?igsh=aGttdGRtY3dpcXc5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transition"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="www.linkedin.com/in/minhseu-hin-426188339"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition"
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Minhseu Hin.
            </div>
        </footer>
    );
}
