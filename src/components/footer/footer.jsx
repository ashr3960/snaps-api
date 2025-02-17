import React from "react";
import "./footer.css";
import FacebookIcon from "../../assets/images/Facebook.svg";
import TwitterIcon from "../../assets/images/X_twitter.svg";
import InstagramIcon from "../../assets/images/Instagram.svg";
import PinterestIcon from "../../assets/images/Pinterest.svg";


function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <h2 className="title"> Snaps</h2>

                <div className="footer-links">
                    <div className="footer-column">
                        <a href="#">For photographers</a>
                        <a href="#">Hire talent</a>
                        <a href="#">Inspiration</a>
                    </div>

                    <div className="footer-column">
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Support</a>
                    </div>
                </div>

                <div className="footer-social">
                    <a href="#"><img src={FacebookIcon} alt="Facebook" className="social-icon" /></a>
                    <a href="#"><img src={TwitterIcon} alt="Twitter" className="social-icon" /></a>
                    <a href="#"><img src={InstagramIcon} alt="Instagram" className="social-icon" /></a>
                    <a href="#"><img src={PinterestIcon} alt="Pinterest" className="social-icon" /></a>
                </div>

            </div>

            <div className="footer-social--hidden">
                <a href="#"><img src={FacebookIcon} alt="Facebook" className="social-icon" /></a>
                <a href="#"><img src={TwitterIcon} alt="Twitter" className="social-icon" /></a>
                <a href="#"><img src={InstagramIcon} alt="Instagram" className="social-icon" /></a>
                <a href="#"><img src={PinterestIcon} alt="Pinterest" className="social-icon" /></a>
            </div>

            <div className="footer-bottom">
                <p>© 2024 Snaps · <a href="#">Terms</a> <a href="#">Privacy</a> <a href="#">Cookies</a></p>
            </div>
        </footer>
    );
}
  
export default Footer;
