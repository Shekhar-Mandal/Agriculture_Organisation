function Team() {
    try {
        const teamMembers = [
            {
                image: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?auto=format&fit=crop&w=400",
                name: "Gyanendra Mandal",
                position: "Founder & Director",
                social: {
                    facebook: "https://www.facebook.com/share/16Ev1hYeqh/",
                    instagram: "https://www.instagram.com/mangyendra?igsh=dmZwNTFkcG9lZnJl"
                }
            },
            {
                image: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?auto=format&fit=crop&w=400",
                name: "Shekhar Mandal",
                position: "Social Media Handle",
                social: {
                    facebook: "https://www.facebook.com/share/1HBCbKBWDr/",
                    instagram: "https://www.instagram.com/shekhar_mandal_8?igsh=MWpsMHlxbTNnM3ozYw=="
                }
            },
            {
                image: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?auto=format&fit=crop&w=400",
                name: "Pratima Mandal",
                position: "Care Taker of Organisation",
                social: {
                    facebook: "https://www.facebook.com/share/1HJDoHW5Rs/",
                    instagram: "https://www.instagram.com/pr_ati_ma1?igsh=MWgxdml4bGZkbDd4cw=="
                }
            }
        ];

        return (
            <section data-name="team" id="team" className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-gray-600 mb-4">{member.position}</p>
                                    <div className="flex justify-center space-x-4">
                                        <a href={member.social.facebook} className="text-gray-600 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook text-xl"></i>
                                        </a>
                                        <a href={member.social.instagram} className="text-gray-600 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Team component error:', error);
        reportError(error);
        return null;
    }
}
