function Hero() {
    try {
        return (
            <section data-name="hero" id="home" className="hero-section flex items-center justify-center text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Growing a Greener Tomorrow
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Join us in our mission to protect and preserve our environment
                    </p>
                    <a 
                        href="#contact" 
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
                    >
                        Get Involved
                    </a>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
