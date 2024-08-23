import React from 'react';
import logo from '../images/AL.jpg'; // Import the logo image

function Home() {
    return (
        <div className="container">
            <header>
                {/* Logo Image */}
                <img src={logo} alt="Accented Living Logo" className="logo-image" />

                <h1>Welcome to Accented Living</h1>
                <p>Your apartment is your home, even if you're only renting. You should be able to decorate freely without worrying about how it will impact your deposit. Our service provides a beautiful accent wall, and we’ll also repaint your wall to its original color using your apartment complex's in-house paint when you move out.</p>
            </header>
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="feature-grid">
                    <div className="feature">
                        <h3>Expert Craftsmanship</h3>
                        <p>Our team is composed of highly skilled and detail-oriented workers who take pride in their craft. From precise measurements to smooth, even coats of paint, we ensure that every accent wall we create enhances your living space beautifully and seamlessly.</p>
                    </div>
                    <div className="feature">
                        <h3>Behr Color Selection</h3>
                        <p>We offer a curated selection of Behr colors to choose from, allowing you to find the perfect shade that suits your style. While we don’t offer custom colors, our carefully chosen palette provides a wide range of options to match any décor.</p>
                    </div>
                    <div className="feature">
                        <h3>Affordable Pricing</h3>
                        <p>Our pricing is competitive and designed to fit within your budget. We believe that everyone deserves to have a beautifully decorated home, no matter the price point.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
