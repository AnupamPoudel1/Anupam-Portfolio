import { GoArrowUpRight } from "react-icons/go";

const footerLinks = [
    {
        title: 'YouTube',
        href: 'https://www.youtube.com/@anupampoudel3034'
    },
    {
        title: 'Linked In',
        href: 'https://linkedin.com/in/anupampoudel'
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/anupam_poudel15/'
    },
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/djanupamking/'
    },
]

const Footer = () => {
    return (
        <footer className="relative z-0 overflow-x-clip">
            <div className="absolute h-[200px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-text footer-mask -z-10">

            </div>
            <div className="container">
                <div className="border-t border-text py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
                    <div>
                        &copy; 2024. All Rights Reserved
                    </div>
                    <nav className="flex flex-col md:flex-row items-center gap-8">
                        {footerLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.title}
                                className="font-semibold text-secondary inline-flex items-center gap-2"
                                target="_blank"
                            >
                                <span>
                                    {link.title}
                                </span>
                                <GoArrowUpRight className='size-4' />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
