import React from 'react';
import "./navtop.css";

const Navtop = () => {
    return (
        <div className="navtop_container">
            {/* Left side: BCCI Logo & Name */}
            <div className="navtop_left">
                <a href="https://www.bcci.tv/">
                    <img src="/BCCI.webp" className="imagebccilogo" alt="BCCI Logo" />
                </a>
                <span className="bcci_text">BCCI.TV</span>
                <a href="https://www.wplt20.com/">
                    <img src="/wpl.webp" className="wpllogo" alt="WPL Logo" />
                </a>
            </div>

            {/* Right side: WPL Logo, Follow Us, and Social Media Icons */}
            <div className="navtop_right">
                
                <span className="follow_text">Follow Us</span>
                <a href="https://www.instagram.com/?hl=en">
                    <img src="/insta.webp" className="social-icon" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/">
                    <img src="/face.webp" className="social-icon" alt="Facebook" />
                </a>
            </div>
        </div>
    );
};

export default Navtop;
