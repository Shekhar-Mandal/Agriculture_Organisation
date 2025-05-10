function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white pt-12 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Save Tree</h3>
                            <p className="text-gray-400">
                                Dedicated to environmental conservation and sustainable farming practices.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <i className="fas fa-phone mr-2"></i>
                                    <a href="tel:9814786741">+91 9814786741</a>
                                </li>
                                <li>
                                    <i className="fas fa-envelope mr-2"></i>
                                    <a href="mailto:Mandalgyanendra09@gmail.com">Mandalgyanendra09@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/share/1HBCbKBWDr/" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook text-2xl text-gray-400 hover:text-white"></i>
                                </a>
                                <a href="https://www.instagram.com/shekhar_mandal_8?igsh=MWpsMHlxbTNnM3ozYw==" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Save Tree. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
