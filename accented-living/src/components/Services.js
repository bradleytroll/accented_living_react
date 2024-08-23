import React from 'react';

function Services() {
    return (
        <div className="container">
            <header>
                <h1>Our Services</h1>
                <p>We offer a range of painting services designed to transform your living space into something truly special.</p>
            </header>
            <section className="features">
                <h2>What We Offer</h2>
                <div className="feature-grid">
                    <div className="feature">
                        <h3>Accent Walls</h3>
                        <p>Choose from our selection of Behr colors to create a stunning focal point in any room.</p>
                    </div>
                    <div className="feature">
                        <h3>Professional Repainting</h3>
                        <p>We'll restore your walls to their original color using your apartment complex's in-house paint when you move out.</p>
                    </div>
                    <div className="feature">
                        <h3>Consultation Services</h3>
                        <p>Our experts will help you choose the perfect color to match your style and décor.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
