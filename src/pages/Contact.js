import React from "react";
import Header from "../common/Header";
import TopNavbar from "../common/TopNavbar";
import Footer from "../common/Footer";
import '../css/Contact.css'

const Contact = ()=>{
    return(
        <>
            <Header/>
            <TopNavbar/>

            <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64256.5899584724!2d73.07716624420713!3d19.063972147949535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21a53e30b83%3A0xa766b29f687709d7!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690291343100!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            <div className="formParent">
                <div className="formDiv">
                    <h1>Get in touch!</h1>

                    <div className="subform">

                        <div className="formOne">
                            <label htmlFor="name">Name</label><br/>
                            <input type="text" id="name" required/>
                        </div>
                        <div className="formOne">
                            <label htmlFor="name">Email</label><br/>
                            <input type="email" id="email" required/>
                        </div>
                        <div className="formOne">
                            <label htmlFor="phone">Phone</label><br/>
                            <input type="number" id="phone" required/>
                        </div>

                    </div>

                    <label htmlFor="message">Message</label><br/>
                    <textarea placeholder="Your message here..."/><br/>
                    <button type="submit">Send Message</button>
                
                </div>
                <div className="textDiv">

                    <div className="address">
                        <h4>Address</h4>
                        <p>123 street, Navi Mumbai 410210.</p>
                    </div>
                    <div className="address">
                        <h4>Phone</h4>
                        <p>+91 1234 567 890</p>
                    </div>
                    <div className="address">
                        <h4>Email</h4>
                        <p>dummy@gmail.com</p>
                    </div>
                    <div className="address fax">
                        <h4>Fax</h4>
                        <p>0123456789</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;