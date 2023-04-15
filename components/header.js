import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleButton from './dark-mode-toggle-button';
import logoImg from '/public/favicon.ico';

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <Image
                                src={logoImg}
                                width={50}
                                height={40}
                                objectFit="contain"
                                alt={"image"}
                            />
                            <span className="ml-3 text-xl">Jaewoo's portfolio</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Home</a>
                        </Link>
                        <Link href="/about-me" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">About me</a>
                        </Link>
                        <Link href="/skills" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Skill</a>
                        </Link>
                        <Link href="/projects" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Project</a>
                        </Link>
                        <Link href="/wiki" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Wiki</a>
                        </Link>
                        <Link href="/contact-me" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Contact</a>
                        </Link>
                    </nav>
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    );
}