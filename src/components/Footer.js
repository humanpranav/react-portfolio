import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          This cool baby site is Pranav Arora's React Portfolio!
        </p>
        <p className="footer-subscription-text">Here is a fake email form!</p>
        <div className="input-areas">
          <form>
            <input className="footer-input" placeholder="Your Email" />
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
          </div>
          <div class="footer-link-items">
            <h2>Important Site Links</h2>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
            <Link to="/">Important Site Links</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Responsive
              <i className="fas fa-mobile-alt"></i>
            </Link>
          </div>
          <small class="website-rights">Responsive © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
