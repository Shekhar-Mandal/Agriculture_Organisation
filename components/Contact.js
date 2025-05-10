function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });
        const [submitStatus, setSubmitStatus] = React.useState({
            loading: false,
            success: false,
            error: null
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
            setSubmitStatus({ loading: true, success: false, error: null });

            try {
                const result = await submitContactForm(formData);
                if (result.success) {
                    setSubmitStatus({ loading: false, success: true, error: null });
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    throw new Error(result.error);
                }
            } catch (error) {
                setSubmitStatus({ loading: false, success: false, error: error.message });
                console.error('Form submission error:', error);
            }
        };

        return (
            <section data-name="contact" id="contact" className="section-padding bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-phone mt-1 text-green-500 w-8"></i>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p><a href="tel:9814786741">+977 9814786741</a></p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-envelope mt-1 text-green-500 w-8"></i>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p><a href="mailto:Mandalgyanendra09@gmail.com">Mandalgyanendra09@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-globe mt-1 text-green-500 w-8"></i>
                                    <div>
                                        <h4 className="font-semibold">Social Media</h4>
                                        <div className="flex space-x-4 mt-2">
                                            <a href="https://www.facebook.com/share/1HBCbKBWDr/" className="text-gray-600 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook text-2xl"></i>
                                            </a>
                                            <a href="https://www.instagram.com/shekhar_mandal_8?igsh=MWpsMHlxbTNnM3ozYw==" className="text-gray-600 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-instagram text-2xl"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                        disabled={submitStatus.loading}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                        disabled={submitStatus.loading}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        required
                                        disabled={submitStatus.loading}
                                    ></textarea>
                                </div>

                                {submitStatus.success && (
                                    <div className="p-4 bg-green-100 text-green-700 rounded-md">
                                        Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus.error && (
                                    <div className="p-4 bg-red-100 text-red-700 rounded-md">
                                        Error: {submitStatus.error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
                                    disabled={submitStatus.loading}
                                >
                                    {submitStatus.loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
