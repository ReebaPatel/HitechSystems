import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      {/* Embedded CSS for pseudo-classes and media queries */}
      <style>
        {`
          .footer-section {
            position: relative;
            background: #000000;
            padding: 32px 0; /* Reduced from 48px */
            overflow: hidden;
          }

          .footer-overlay {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(129, 58, 150, 0.3) 0%, rgba(69, 65, 127, 0.7) 70%, rgba(0, 0, 0, 0.9) 100%);
            background-size: 150% 150%;
            animation: gradientShift 15s ease-in-out infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .footer-container {
            position: relative; /* Ensure content is above overlay */
            max-width: 896px; /* Reduced from 1024px */
            margin: 0 auto;
            padding: 0 16px;
            display: flex;
            gap: 24px;
          }

          .footer-left, .footer-right {
            flex: 1;
          }

          .footer-heading {
            color: #e1d3e3;
            font-size: 24px; /* Reduced from 30px */
            font-weight: 700;
            text-align: left; /* Changed to left for two-column layout */
            margin-bottom: 24px; /* Reduced from 40px */
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .footer-heading span {
            border-bottom: 4px solid #da419f;
            padding-bottom: 4px;
          }

          .footer-text {
          color: #e1d3e3;
    font-size: 14px;
    margin-bottom: 14px;
    text-align: left;
          }

          .footer-company {
            color: #e1d3e3;
            font-size: 14px; /* Reduced from 16px */
            font-weight: 800;
            margin-bottom: 8px; /* Reduced from 16px */
          }

          .footer-button {
  background: #da419f;
  color: #e1d3e3;
  float: left;
  padding: 10px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); /* Soft shadow for clarity */
  transition: transform 0.2s ease-in, background 0.3s ease 0.1s; /* Delay bg */
  backdrop-filter: none; /* Avoid any blur */
}

.footer-button:hover {
  transform: scale(1.05);
  background: #b73397;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Reduce shadow to keep photos visible */
}


          /* Responsive adjustments */
          @media (max-width: 640px) {
            .footer-container {
              flex-direction: column;
              gap: 16px;
            }
            .footer-heading {
              font-size: 20px; /* Reduced from 24px */
              text-align: center; /* Center on mobile */
            }
            .footer-text, .footer-company {
              font-size: 12px; /* Reduced from 14px */
            }
            .footer-button {
              font-size: 12px; /* Reduced from 14px */
              padding: 8px 16px;
            }
            .footer-left, .footer-right {
              text-align: center;
            }
          }

          @media (min-width: 641px) and (max-width: 1023px) {
            .footer-heading {
              font-size: 22px; /* Reduced from 28px */
            }
          }
        `}
      </style>

      {/* Footer Section */}
      <footer id="contact" className="footer-section">
        <div className="footer-overlay"></div>
        <div className="footer-container">
          {/* Left Column */}
          <div className="footer-left">
            <h2 className="footer-heading">
              <span>Contact Us</span>
            </h2>
            <p className="footer-text">
              Reach out to discuss your government or industrial project needs.
            </p>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hsystems.in&su=Inquiry%20from%20Website&body=Hello,%20I%20am%20interested%20in%20your%20services."
  className="footer-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Send an Inquiry <FiArrowRight style={{ width: '18px', height: '18px' }} />
</a>

          </div>

          {/* Right Column */}
          <div className="footer-right">
            <p className="footer-company">M/S. Hitech Systems</p>
            <p className="footer-text">F.A. Patel</p>
            <p className="footer-text">Mobile: 9819877289</p>
            <p className="footer-text">Telefax: 0251-2328313</p>
            <p className="footer-text">Email: info@hsystems.in | hitech_s@msn.com</p>
            <p className="footer-text">
              A/8, 303, Shiv Parvati, Raheja Complex, H.M. Road, Kalyan (W) 421301
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;