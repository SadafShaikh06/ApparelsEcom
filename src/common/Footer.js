import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRegCopyright } from "react-icons/fa";
import '../css/Head.css';

const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="subFooter">
                <h4>INFORMATION</h4>
                <a href=""><span>Return Policy</span></a>
                <a href=""><span>Start a Return</span></a>
                <a href=""><span>FAQ</span></a>
                <a href=""><span>Terms & Conditions</span></a>
                <a href=""><span>Privacy Policy</span></a>
            </div>

            <div className="subFooter">
                <h4>CATEGORIES</h4>
                <a href=""><span>Tops</span></a>
                <a href=""><span>Basics</span></a>
                <a href=""><span>Shirts & Blouses</span></a>
                <a href=""><span>Pants</span></a>
                <a href=""><span>Blazers & Vests</span></a>
                <a href=""><span>Shorts</span></a>
            </div>

            <div className="subFooter">
                <h4>SERVICES</h4>
                <a href="#"><span>Sale</span></a>
                <a href="#"><span>Quick Ship</span></a>
                <a href=""><span>New Designs</span></a>
                <a href=""><span>Accidental Fabric Protection</span></a>
                <a href=""><span>Furniture Care</span></a>
                <a href=""><span>Gift Cards</span></a>
            </div>

            <div className="subFooter lastFooter">
                <h4>JOIN US</h4>
                <p>New subscribers receive 10% off their first purchase</p>
                <div className="input">
                    <input type="email" placeholder="Your Email"></input>
                    <a href="" type="submit" className="icons"><FaEnvelope/></a>
                </div>
                <div className="socialIcons">
                    <a href="" className="icons"><FaFacebookF/></a>
                    <a href="" className="icons"><FaTwitter/></a>
                    <a href="" className="icons"><FaInstagram /></a>
                    <a href="" className="icons"><FaYoutube/></a>
                </div>
            </div>
        </div>
        <div className="copyrights">
            <p>Copyright <FaRegCopyright className="copyIcon"/> 2023. All Rights Reserved.</p>
            <img src='./images/payment.png'/>
        </div>
        </>
    );
}

export default Footer;