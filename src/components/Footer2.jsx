import React from "react";
import "./Footer2.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-8">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title  ">Shine Panjwani</h2>
          <div className="footer-info">
            <address className="footer-address">
              <h3 className="footer-heading">Address:</h3>
              <p className="footer-text">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </address>
            <div className="footer-contact">
              <h3 className="footer-heading">Contact:</h3>
              <p className="footer-text">
                9244001991
                <br />
                shinepanjwani18@gmail.com
              </p>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a1b29da7e5fa1d78937e2416e1048248423b7bd84edca9ac9f9d1c4bdbba7c?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523"
                  alt="Facebook icon"
                  className="social-icon"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/27c4cc1585468ee0879a7ac037654ec214fe8ee4f74de5179ab5b570b216dd0a?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523"
                  alt="Twitter icon"
                  className="social-icon"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00776960116fb2f10cff18144058d91fcc206c3a69843b3af584458e6a8a2cee?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523"
                  alt="Instagram icon"
                  className="social-icon"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9afcdaba2708f30de39ca2e72e195b1bd27b4c180057d48a210504ef952b78?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523"
                  alt="LinkedIn icon"
                  className="social-icon"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cb0fa97df7c76eef2fbd13aa0a2e9be6249003b99ce032585ecc36a4da80963?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523"
                  alt="YouTube icon"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <nav className="footer-nav">
          <div className="footer-links">
            <Link to="/blog">Blog</Link>
            <Link to="/help">Help Center</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <div className="footer-policy-links"></div>
      </div>
    </footer>
  );
};

export default Footer;
