import React from 'react';

function Home() {
    return (
        <div className="container">
            <header>
                <h1>Welcome to Accented Living</h1>
                <p>Transform your apartment with stunning accent walls.</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="feature-grid">
                    <div className="feature">
                        <h3>Expert Craftsmanship</h3>
                        <p>Our team provides top-notch painting services with attention to detail.</p>
                    </div>
                    <div className="feature">
                        <h3>Custom Colors</h3>
                        <p>Choose from a wide range of colors to perfectly match your style.</p>
                    </div>
                    <div className="feature">
                        <h3>Affordable Pricing</h3>
                        <p>We offer competitive pricing without compromising on quality.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
