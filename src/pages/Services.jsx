import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <>
      {/* Embedded CSS for styling and responsiveness */}
      <style>
        {`
          .services-page {
            background: #ffffff;
            padding: 48px 16px;
            font-family: Arial, sans-serif;
          }

          .services-header {
            text-align: center;
            margin-bottom: 48px;
          }

          .services-title {
            color: #45417f;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .services-title span {
            border-bottom: 4px solid #da419f;
            padding-bottom: 4px;
          }

          .services-subtitle {
            color: #5c5c5c;
            font-size: 18px;
            font-weight: 400;
          }

          .services-section {
            margin-bottom: 48px;
          }

          .section-title {
            color: #813a96;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .services-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .services-list li {
            color: #5c5c5c;
            font-size: 16px;
            margin-bottom: 8px;
          }

          .services-container {
            max-width: 1280px;
            margin: 0 auto;
          }

          .product-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            margin-top: 16px;
          }

          .product-item {
            background: #f9f9f9;
            border: 1px solid #a4a4ae;
            border-radius: 8px;
            padding: 16px;
            flex: 1;
            min-width: 280px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .product-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .product-title {
            color: #45417f;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .product-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .product-list li {
            color: #5c5c5c;
            font-size: 14px;
            margin-bottom: 4px;
          }

          /* Responsive adjustments */
          @media (max-width: 640px) {
            .services-page {
              padding: 32px 20px;
            }
            .services-title {
              font-size: 28px;
            }
            .services-subtitle {
              font-size: 16px;
            }
            .section-title {
              font-size: 20px;
            }
            .services-list li {
              font-size: 14px;
            }
            .product-item {
              min-width: 88%;
            }
            .product-title {
              font-size: 16px;
            }
            .product-list li {
              font-size: 12px;
            }
          }

          @media (min-width: 641px) and (max-width: 1023px) {
            .services-page {
              padding: 40px 12px;
            }
            .services-title {
              font-size: 32px;
            }
            .services-subtitle {
              font-size: 17px;
            }
            .section-title {
              font-size: 22px;
            }
            .product-item {
              min-width: 45%;
            }
          }
        `}
      </style>

      <div className="services-page">
        <div className="services-container">
          {/* Header */}
          <header className="services-header">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="services-title"
            >
              <span>Our Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="services-subtitle"
            >
              Comprehensive Industrial Solutions by HITECH SYSTEMS
            </motion.p>
          </header>

          {/* Industrial Supply & Sourcing Services */}
          <section className="services-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="section-title"
            >
              Industrial Supply and Sourcing Services
            </motion.h2>
            <ul className="services-list">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                End-to-end sourcing of industrial and engineering products
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Supply of customized industrial components as per client drawings or specifications
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Competitive procurement solutions for both private and government sectors
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Vendor and product approval facilitation for customer organizations
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Complete logistic and delivery support
              </motion.li>
            </ul>
          </section>

          {/* Engineering & Technical Services */}
          <section className="services-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="section-title"
            >
              Engineering and Technical Services
            </motion.h2>
            <ul className="services-list">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Engineering project modeling and process simulation
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Technical support for industrial machinery setup and operations
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Productivity improvement projects and efficiency consultancy
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Installation and commissioning support for pumps, valves, motors, and related equipment
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                On-site customization and integration services
              </motion.li>
            </ul>
          </section>

          {/* Product Categories */}
          <section className="services-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="section-title"
            >
              Product Categories Supply Services
            </motion.h2>
            <div className="product-grid">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Safety Products</h3>
                <ul className="product-list">
                  <li>Protective eyewear</li>
                  <li>Gloves</li>
                  <li>Safety instruments</li>
                  <li>Safety aprons</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Fluid Handling Products</h3>
                <ul className="product-list">
                  <li>Pumps</li>
                  <li>Tubing and fittings</li>
                  <li>Flow and water meters</li>
                  <li>Automation systems for pumps</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Valves</h3>
                <ul className="product-list">
                  <li>Butterfly valves</li>
                  <li>Gate valves</li>
                  <li>Diaphragm valves</li>
                  <li>Knife gate valves</li>
                  <li>Air valves</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Measurement and Test Equipment</h3>
                <ul className="product-list">
                  <li>Digital and analog clamp meters</li>
                  <li>Energy analyzers</li>
                  <li>Transmitters</li>
                  <li>Multimeters</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Industrial Hardware</h3>
                <ul className="product-list">
                  <li>Pliers</li>
                  <li>Wrenches</li>
                  <li>Drivers</li>
                  <li>Hammers</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Material Handling Solutions</h3>
                <ul className="product-list">
                  <li>Hydraulic pallet trucks</li>
                  <li>Stackers (manual, battery, hydraulic)</li>
                  <li>Lift tables</li>
                  <li>Industrial trolleys</li>
                  <li>Cranes</li>
                  <li>Drum lifters</li>
                  <li>Tilters</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Rubber Products</h3>
                <ul className="product-list">
                  <li>O-rings</li>
                  <li>Gaskets</li>
                  <li>Bushings</li>
                  <li>Diaphragms</li>
                  <li>Cords</li>
                  <li>Tubes</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Lab Supplies</h3>
                <ul className="product-list">
                  <li>Glassware</li>
                  <li>Sampling containers</li>
                  <li>Industrial chemicals</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Automotive Products</h3>
                <ul className="product-list">
                  <li>V-belts (classical, wedge, variable speed)</li>
                  <li>Automotive hoses (fuel, radiator, silicon, and others)</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Cleaning and Housekeeping Products</h3>
                <ul className="product-list">
                  <li>Lint-free cloths</li>
                  <li>Mops</li>
                  <li>Brooms</li>
                  <li>Wipers</li>
                  <li>Dusters</li>
                  <li>Brushes</li>
                  <li>Paper products (tissues, napkins, toilet rolls, and others)</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Office and Display Products</h3>
                <ul className="product-list">
                  <li>Display boards</li>
                  <li>Writing boards</li>
                  <li>Stands</li>
                  <li>Exhibition systems</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="product-item"
              >
                <h3 className="product-title">Spare Parts Supply</h3>
                <ul className="product-list">
                  <li>Spare parts for pumps</li>
                  <li>Spare parts for motors</li>
                  <li>Spare parts for diesel engines</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Authorized Product Distribution */}
          <section className="services-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="section-title"
            >
              Authorized Product Distribution and Representation
            </motion.h2>
            <ul className="services-list">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Authorized distributor of Vinko Auto Industries Ltd. (VAIL) for V-belts and hoses
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Supplier and partner with manufacturers including Kirloskar Brothers Ltd., Rotex Manufacturers & Engineers Pvt. Ltd., Indo Vacuum Technologies Pvt. Ltd., Ray Display Systems Pvt. Ltd., Indian Valves Company, and Hercules Mechanical Works
              </motion.li>
            </ul>
          </section>

          {/* Government & GEM Services */}
          <section className="services-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="section-title"
            >
              Government and GEM Services
            </motion.h2>
            <ul className="services-list">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Registered contractor and supplier on Government E Marketplace (GEM)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Supplies to BARC, ONGC, Indian Railways, Ordinance Factory, MCGM, and other organizations
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Authorized seller in electrical and mechanical categories
              </motion.li>
            </ul>
          </section>

          {/* Lighting Solutions */}
          <section className="services-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="section-title"
            >
              Lighting Solutions
            </motion.h2>
            <ul className="services-list">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                High-intensity, broad-beamed artificial lighting for steel and food processing, warehouses, and cold rooms
              </motion.li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;