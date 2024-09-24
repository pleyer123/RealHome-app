import React from "react";
import "./ContactUs.css"
import Swal from 'sweetalert2'

function ContactUs(){

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "14e165b8-9dc4-4efb-ba10-6972a9f7acc4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message has sent successfully!",
                icon: "success"
              });
        }
      };

    
    
    return(<>
    <div className="contact-us-container" id="contactUs">
        <h2 className="contact-title">Contact Us</h2>
            <form className="contact-form" onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required  name="name"/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required name="email"/>

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Enter the subject" required name="subject"/>

                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Enter your message" required name="message"></textarea>

                <button type="submit">Send Message</button>
            </form>
    </div>  
    
    </>)
}

export default ContactUs