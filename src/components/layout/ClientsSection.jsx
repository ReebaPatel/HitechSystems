import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';


const ClientsSection = () => {
    const clients = ['MCGM', 'BARC', 'IndianRailways', 'ONGC', 'BEST', 'NPCIL'];

    return (
        <>
            {/* Embedded CSS for animations, pseudo-classes, and media queries */}
            <style>
                {`
          .clients-section {
            position: relative;
            overflow: hidden;
            background: linear-gradient(45deg, #813a96, #ad9ccc, #da419f, #45417f);
            background-size: 400% 400%;
            animation: gradientRotate 10s ease infinite;
          }

          @keyframes gradientRotate {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .client-card {
            position: relative;
            background: white;
            border-radius: 12px;
            padding: 12px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
          }

          .client-card:hover {
            box-shadow: 0 0 20px rgba(218, 65, 159, 0.7);
          }

          /* Particle-like glow effect */
          .client-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle, rgba(218, 65, 159, 0.3) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }

          .client-card:hover::before {
            opacity: 1;
          }

          .client-logo {
            width: 96px;
            height: 65px;
            object-fit: contain;
            // filter: grayscale(100%);
            transition: filter 0.3s ease;
          }

          .client-card:hover .client-logo {
            filter: grayscale(0%);
          }

          .clients-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
            padding: 0 16px;
          }

          .clients-heading {
      text-align: center;
      color: #e1d3e3;
      font-size: 24px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 40px;
    }

          /* Responsive layout */
          @media (max-width: 768px) {
            .clients-container {
              // flex-direction: column;
              align-items: center;
            }
              .clients-heading {
        font-size: 18px; /* Updated to 18px for mobile view */
        margin-bottom: 40px;
      }
            .client-card {
        width: 100px;
        height: 70px;
          }

          @media (min-width: 769px) {
            .client-card {
              width: 200px;
            }
          }
        `}
            </style>

            {/* Trusted Clients */}
            <section
                id="clients"
                className="clients-section"
                style={{
                    paddingTop: '76px',
                    paddingBottom: '109px',
                }}
            >
                <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="clients-heading"
  >
    Trusted By Government Leaders
  </motion.h3>
       
                <div className="clients-container">
       
                    {clients.map((client, index) => (
                        <Tilt
                            key={index}
                            options={{ max: 25, scale: 1.05, speed: 300 }}
                            style={{ display: 'inline-block' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="client-card"
                            >
                                <LazyLoadImage
                                    src={`/logos/${client.toLowerCase()}-logo.png`}
                                    alt={`${client} logo`}
                                    className="client-logo"
                                    effect="blur"
                                    placeholderSrc="/images/placeholder.jpg"
                                />
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ClientsSection;