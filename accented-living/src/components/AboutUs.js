import React from 'react';

function AboutUs() {
    return (
        <div className="container">
            <header>
                <h1>About Us</h1>
                <p>At Accented Living, we believe that your apartment is your home, and you should have the freedom to decorate it as you wish. Our team is here to help you transform your space with beautiful accent walls.</p>
            </header>
            <section className="features">
                <h2>Our Story</h2>
                <div className="feature-grid">
                    <div className="feature">
                        <h3>Passionate Designers</h3>
                        <p>Our team is composed of designers who are passionate about creating beautiful and functional living spaces.</p>
                    </div>
                    <div className="feature">
                        <h3>Expert Craftsmanship</h3>
                        <p>We take pride in our work and pay attention to every detail to ensure a perfect finish on every project.</p>
                    </div>
                    <div className="feature">
                        <h3>Customer Satisfaction</h3>
                        <p>We strive to exceed your expectations and make your experience with us as smooth and enjoyable as possible.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
