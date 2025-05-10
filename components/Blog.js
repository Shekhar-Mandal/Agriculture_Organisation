function Blog() {
    try {
        const posts = [
            {
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600",
                title: "The Importance of Tree Plantation",
                date: "March 15, 2024",
                excerpt: "Discover why tree plantation is crucial for our environment and future generations."
            },
            {
                image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600",
                title: "Sustainable Farming Practices",
                date: "March 10, 2024",
                excerpt: "Learn about the latest sustainable farming methods that help preserve our environment."
            },
            {
                image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600",
                title: "Water Conservation Tips",
                date: "March 5, 2024",
                excerpt: "Simple yet effective ways to conserve water in your daily life and agriculture."
            }
        ];

        return (
            <section data-name="blog" id="blog" className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <a href="#" className="text-green-500 font-semibold hover:text-green-600">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Blog component error:', error);
        reportError(error);
        return null;
    }
}
