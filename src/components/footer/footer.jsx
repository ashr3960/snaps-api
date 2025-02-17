import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-left">
                    <h2 className="logo">Snaps</h2>
                </div>

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
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2024 Snaps · <a href="#">Terms</a> <a href="#">Privacy</a> <a href="#">Cookies</a></p>
            </div>
            
        </footer>
    );
}
  
export default Footer;
  
