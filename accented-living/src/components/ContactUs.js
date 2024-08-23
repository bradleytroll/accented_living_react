import React from 'react';

function ContactUs() {
    return (
        <div className="container">
            <header>
                <h1>Contact Us</h1>
                <p>If you have any questions or would like to schedule a consultation, please reach out to us using the form below.</p>
            </header>
            <section>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default ContactUs;
