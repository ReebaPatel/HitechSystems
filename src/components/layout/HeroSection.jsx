import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
      {/* Embedded CSS for animations, pseudo-classes, and media queries */}
      <style>
        {`
          .hero-section {
            position: relative;
            height: 90vh;
            max-height: 700px;
            overflow: hidden;
            background-color: #000000;
            padding-top: 64px;
          }

          .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.9;
          }

          .hero-overlay {
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

          .hero-content-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-content {
            text-align: center;
            max-width: 1024px;
            padding: 0 16px;
          }

          .hero-text {
            color: #e1d3e3;
            font-weight: 700;
            letter-spacing: -0.025em;
            line-height: 1.1;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            color: #e1d3e3;
            margin-bottom: 32px;
          }

          .hero-cta {
            background-color: #da419f;
            color: #e1d3e3;
            padding: 16px 32px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 18px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0 auto;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .hero-cta:hover {
            background-color: rgb(217, 61, 178);
            transform: scale(1.05);
          }

          /* Responsive adjustments */
          @media (max-width: 640px) {
            .hero-section {
              height: 80vh;
              max-height: 500px;
              padding-top: 32px;
            }
            .hero-content {
              max-width: 100%;
              padding: 0 8px;
            }
            .hero-text {
              font-size: 36px;
            }
            .hero-subtitle {
              font-size: 18px;
              margin-bottom: 24px;
            }
            .hero-cta {
              padding: 12px 24px;
              font-size: 16px;
              width: max-content;
            }
            .hero-image {
              object-fit: contain;
            }
          }

          @media (min-width: 641px) and (max-width: 768px) {
            .hero-section {
              height: 80vh;
              max-height: 600px;
              padding-top: 48px;
            }
            .hero-content {
              max-width: 640px;
              padding: 0 12px;
            }
            .hero-text {
              font-size: 48px;
            }
            .hero-subtitle {
              font-size: 20px;
              margin-bottom: 28px;
            }
            .hero-cta {
              padding: 14px 28px;
              font-size: 17px;
            }
            .hero-image {
              object-fit: cover;
            }
          }

          @media (min-width: 769px) {
            .hero-text {
              font-size: 64px;
            }
            .hero-subtitle {
              font-size: 24px;
            }
            .hero-image {
              object-fit: cover;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <LazyLoadImage
          src="/images/hero-bg.jpg"
          alt="Government Infrastructure"
          className="hero-image"
          effect="blur"
          placeholderSrc="/images/placeholder.jpg"
        />
        <div className="hero-overlay">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="hero-text"
              >
                100% Trusted Infrastructure Solutions
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="hero-subtitle"
              >
                Partnering with Government and Industry Since 2007
              </motion.p>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <RouterLink
                  to="https://mail.google.com/mail/?view=cm&fs=1&to=info@hsystems.in&su=Inquiry%20from%20Website&body=Hello,%20I%20am%20interested%20in%20your%20services."
                  className="hero-cta"
                >
                  Get a Quote
                  <FiArrowRight style={{ width: '24px', height: '24px' }} />
                </RouterLink>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;