function Gallery() {
    try {
        const images = [
            {
                url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600",
                title: "Tree Plantation Drive"
            },
            {
                url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600",
                title: "Organic Farming"
            },
            {
                url: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600",
                title: "Water Conservation"
            },
            {
                url: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=600",
                title: "Community Work"
            }
        ];

        return (
            <section data-name="gallery" id="gallery" className="section-padding bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {images.map((image, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                                <img 
                                    src={image.url} 
                                    alt={image.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        reportError(error);
        return null;
    }
}
