import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SlEnergy } from 'react-icons/sl';
import { FiTool, FiSettings } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const ServicesSection = () => {
    const services = [
        {
            icon: <SlEnergy className="service-icon" />,
            title: 'Electrical Solutions',
            desc: 'Complete electrical installations & maintenance',
        },
        {
            icon: <FiTool className="service-icon" />,
            title: 'Mechanical Services',
            desc: 'Industrial machinery & process equipment',
        },
        {
            icon: <FiSettings className="service-icon" />,
            title: 'Custom Projects',
            desc: 'Tailored solutions for government needs',
        }
    ];

    return (
        <>
            {/* Embedded CSS for animations, pseudo-classes, and media queries */}
            <style>
                {`
          .services-section {
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

          .services-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 48px 16px;
          }

          .services-heading {
            color: #e1d3e3;
            font-size: 30px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 40px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .services-heading span {
            border-bottom: 4px solid #da419f;
            padding-bottom: 4px;
          }

          .services-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
          }

          .service-card {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #a4a4ae;
            border-radius: 8px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: box-shadow 0.3s ease;
          }

          .service-card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .icon-container {
            position: relative;
            background: #ad9ccc;
            padding: 12px;
            border-radius: 50%;
            margin-bottom: 16px;
          }

          .icon-container::before {
            content: '';
            position: absolute;
            top: -8px;
            left: -8px;
            right: -8px;
            bottom: -8px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(218, 65, 159, 0.5) 0%, transparent 70%);
            opacity: 0.5;
            animation: pulseGlow 2s ease-in-out infinite;
            z-index: -1;
          }

          @keyframes pulseGlow {
            0% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.8; }
            100% { transform: scale(1); opacity: 0.5; }
          }

          .service-icon {
            width: 32px;
            height: 32px;
            color: #da419f;
          }

          .service-title {
            color: #45417f;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 8px;
            text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          }

          .service-desc {
            color: #4b3f87;
            font-size: 14px;
            text-align: center;
          }

          .service-link {
            color: #da419f;
            font-size: 14px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-top: 16px;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .service-link:hover {
            color: #b73397;
            transform: scale(1.05);
          }

          .service-link-icon {
            width: 16px;
            height: 16px;
          }

          /* Responsive layout */
          @media (max-width: 640px) {
            .services-container {
              padding: 32px 8px;
            }
            .services-heading {
              font-size: 24px;
              margin-bottom: 24px;
            }
            .services-grid {
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }
            .service-card {
              width: 80%;
              max-width: 320px;
              padding: 16px;
            }
            .icon-container {
              padding: 8px;
              margin-bottom: 12px;
            }
            .service-icon {
              width: 24px;
              height: 24px;
            }
            .service-title {
              font-size: 16px;
              margin-bottom: 6px;
            }
            .service-desc {
              font-size: 12px;
            }
            .service-link {
              font-size: 12px;
              margin-top: 12px;
            }
            .service-link-icon {
              width: 14px;
              height: 14px;
            }
          }

          @media (min-width: 641px) and (max-width: 1023px) {
            .services-container {
              padding: 40px 12px;
            }
            .services-heading {
              font-size: 28px;
              margin-bottom: 32px;
            }
            .services-grid {
              gap: 20px;
            }
            .service-card {
              width: calc(50% - 12px);
              padding: 20px;
            }
            .icon-container {
              padding: 10px;
            }
            .service-icon {
              width: 28px;
              height: 28px;
            }
            .service-title {
              font-size: 17px;
            }
            .service-desc {
              font-size: 13px;
            }
          }

          @media (min-width: 1024px) {
            .service-card {
              width: calc(24% - 16px); /* Adjusted for 3 cards with consistent gap */
            }
          }
        `}
            </style>

            {/* Services Section */}
            <section id="services" className="services-section">
                <div className="services-container">
                    <h2 className="services-heading">
                        <span>Our Services</span>
                    </h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                className="service-card"
                            >
                                <div className="icon-container">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                                <div>
                                    <RouterLink to="/services" className="service-link">
                                        Learn More <FiArrowRight className="service-link-icon" />
                                    </RouterLink>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;