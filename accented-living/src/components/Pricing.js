import React from 'react';

function Pricing() {
    return (
        <div className="container">
            <header>
                <h1>Our Pricing</h1>
                <p>We offer transparent and competitive pricing to ensure you can enhance your living space without breaking the bank. While our pricing is designed to be affordable, we never compromise on quality.</p>
            </header>
            <section className="features">
                <h2>Pricing Plans</h2>
                <div className="feature-grid">
                    <div className="feature">
                        <h3>Basic Package</h3>
                        <p>This package includes a single accent wall with a choice from our Behr color selection. Ideal for small rooms or a subtle touch of color.</p>
                    </div>
                    <div className="feature">
                        <h3>Standard Package</h3>
                        <p>Our most popular option, the Standard Package offers up to two accent walls, perfect for living rooms or larger spaces.</p>
                    </div>
                    <div className="feature">
                        <h3>Premium Package</h3>
                        <p>The Premium Package includes up to three accent walls and a consultation with our design experts to help you choose the best colors for your space.</p>
                    </div>
                </div>
            </section>
            <section className="features">
                <h2>What's Included</h2>
                <div className="feature-grid">
                    <div className="feature">
                        <h3>Behr Color Selection</h3>
                        <p>Choose from our curated selection of Behr colors to find the perfect shade for your accent wall.</p>
                    </div>
                    <div className="feature">
                        <h3>Professional Painting</h3>
                        <p>Our team of expert painters will ensure a flawless finish, transforming your space with precision and care.</p>
                    </div>
                    <div className="feature">
                        <h3>Repainting Service</h3>
                        <p>When it's time to move, we'll repaint your accent walls to their original color using your apartment complex's in-house paint.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Pricing;
