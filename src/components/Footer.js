import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading-container">
        <h2>Contact Us</h2>
      </div>
      <div className="footer-container">
        <div className="footer-left">
          <p>Harvard Computational Robotics Lab</p>
          <p>Admin: Hank Yang</p>
          <p>Email: <a href="mailto:hankyang@seas.harvard.edu">hankyang@seas.harvard.edu</a></p>
        </div>
        <div className="footer-right">
          <p>Electrical Engineering Department</p>
          <p>Harvard University</p>
          <p>150 Western Ave, Boston, MA <span class="postal-code">02134</span></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;





