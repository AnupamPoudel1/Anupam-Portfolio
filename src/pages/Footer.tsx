const footerLinks = [
    {
        title: 'YouTube',
        href: 'youtube.com'
    },
    {
        title: 'Linked In',
        href: 'linkedin.com'
    },
    {
        title: 'Instagram',
        href: 'instagram.com'
    },
    {
        title: 'Facebook',
        href: 'facebook.com'
    },
]

const Footer = () => {
    return (
        <footer className="relative z-0 overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-text footer-mask -z-10">

            </div>
            <div className="container">
                <div className="border-t border-text py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
                    <div>
                        &copy; 2024. All Rights Reserved
                    </div>
                    <nav className="flex flex-col md:flex-row items-center gap-8">
                        {footerLinks.map((link) => (
                            <a href={link.href} key={link.title} className="font-semibold text-secondary">
                                <span>
                                    {link.title}
                                </span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
