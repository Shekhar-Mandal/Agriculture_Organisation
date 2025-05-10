function Services() {
    try {
        const services = [
            {
                icon: "fas fa-tree",
                title: "Tree Plantation",
                description: "Organizing tree plantation drives and maintaining green spaces in urban areas."
            },
            {
                icon: "fas fa-seedling",
                title: "Sustainable Farming",
                description: "Promoting eco-friendly farming practices and organic cultivation methods."
            },
            {
                icon: "fas fa-leaf",
                title: "Environmental Education",
                description: "Conducting workshops and training sessions on environmental conservation."
            },
            {
                icon: "fas fa-hand-holding-water",
                title: "Water Conservation",
                description: "Implementing water-saving techniques and rainwater harvesting systems."
            }
        ];

        return (
            <section data-name="services" id="services" className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-lg text-center">
                                <i className={`${service.icon} text-4xl text-green-500 mb-4`}></i>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
