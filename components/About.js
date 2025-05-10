function About() {
    try {
        return (
            <section data-name="about" id="about" className="section-padding bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">About Save Tree</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800"
                                alt="Agriculture"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-600 mb-6">
                                At Save Tree, we are dedicated to promoting sustainable agriculture practices
                                while protecting our environment. Our organization focuses on education,
                                conservation, and implementation of eco-friendly farming techniques.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <i className="fas fa-leaf text-green-500 text-2xl mr-3"></i>
                                    <span>Sustainable Farming</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-seedling text-green-500 text-2xl mr-3"></i>
                                    <span>Tree Plantation</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-hand-holding-water text-green-500 text-2xl mr-3"></i>
                                    <span>Water Conservation</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-users text-green-500 text-2xl mr-3"></i>
                                    <span>Community Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
