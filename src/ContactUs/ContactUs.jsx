import "./ContactUs.css"

function ContactUs(){
    
    
    
    
    return(<>
    <div className="contact-us-container" id="contactUs">
        <h2 className="contact-title">Contact Us</h2>
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Enter the subject" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
    </div>  
    
    </>)
}

export default ContactUs