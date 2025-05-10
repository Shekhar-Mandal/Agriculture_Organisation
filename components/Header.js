function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <header data-name="header" className="fixed w-full bg-white shadow-md z-50">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img 
                                
                            />
                            <span className="ml-3 text-xl font-bold text-green-600">Save Tree</span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="nav-link">Home</a>
                            <a href="#about" className="nav-link">About</a>
                            <a href="#services" className="nav-link">Services</a>
                            <a href="#projects" className="nav-link">Projects</a>
                            <a href="#team" className="nav-link">Team</a>
                            <a href="#gallery" className="nav-link">Gallery</a>
                            <a href="#blog" className="nav-link">Blog</a>
                            <a href="#contact" className="nav-link">Contact</a>
                        </div>

                        <button 
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4">
                            <a href="#home" className="block py-2">Home</a>
                            <a href="#about" className="block py-2">About</a>
                            <a href="#services" className="block py-2">Services</a>
                            <a href="#projects" className="block py-2">Projects</a>
                            <a href="#team" className="block py-2">Team</a>
                            <a href="#gallery" className="block py-2">Gallery</a>
                            <a href="#blog" className="block py-2">Blog</a>
                            <a href="#contact" className="block py-2">Contact</a>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
