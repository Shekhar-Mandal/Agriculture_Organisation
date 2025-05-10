function Projects() {
    try {
        const projects = [
            {
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600",
                title: "Urban Forest Initiative",
                description: "Creating green spaces in urban areas through systematic tree plantation."
            },
            {
                image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600",
                title: "Organic Farming Project",
                description: "Promoting organic farming methods among local farmers."
            },
            {
                image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600",
                title: "Water Conservation",
                description: "Implementing rainwater harvesting in rural areas."
            }
        ];

        return (
            <section data-name="projects" id="projects" className="section-padding bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
