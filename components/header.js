import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
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
                        <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Skill</a>
                        <Link href="/projects" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Project</a>
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