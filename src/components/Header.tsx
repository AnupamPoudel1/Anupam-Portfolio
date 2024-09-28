
const Header = () => {
    return (
        <div className="flex-center relative top-3">
            <nav className="flex gap-1 p-0.5 border border-secondary/15 rounded-full bg-secondary/10 backdrop-blur">
                <a
                    href="#"
                    className="nav-item"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="nav-item"
                >
                    Projects
                </a>
                <a
                    href="#"
                    className="nav-item"
                >
                    About
                </a>
                <a
                    href="#"
                    className="nav-item bg-secondary text-primary hover:bg-text hover:text-primary"
                >
                    Contact
                </a>
            </nav>
        </div>
    )
}

export default Header
