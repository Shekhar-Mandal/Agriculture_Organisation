function App() {
    try {
        return (
            <div data-name="app" className="min-h-screen">
                <Header />
                <main className="pt-16">
                    <Hero />
                    <About />
                    <Services />
                    <Projects />
                    <Team />
                    <Gallery />
                    <Blog />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
