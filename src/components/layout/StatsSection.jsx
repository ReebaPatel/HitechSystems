import { motion } from 'framer-motion';
import { Pointer } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        { number: '18+', label: 'Years of Excellence' },
        { number: '10+', label: 'Government Partners' },
        { number: '10+', label: 'Brand Dealerships' },
    ];

    return (
        <>
            {/* Embedded CSS for animations, pseudo-classes, and media queries */}
            <style>
                {`
  .stats-section {
    background: #ffffff;
    padding: 48px 0;
  }

  .stats-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    padding: 0 16px;
  }

  .stat-orb {
    position: relative;
    background: #f9f5fa; /* soft lilac/white contrast */
    border-radius: 50%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .stat-orb::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(218, 65, 159, 0.2) 0%, transparent 70%);
    opacity: 0.6;
    animation: pulseGlow 2s ease-in-out infinite;
    z-index: -1;
  }

  @keyframes pulseGlow {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0.5; }
  }

  .stat-number {
    color: #813a96;
    font-weight: 900;
    font-size: 36px;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0% { transform: scale(1); }
    10% { transform: scale(1.1); }
    20% { transform: scale(1); }
    30% { transform: scale(1.1); }
    40% { transform: scale(1); }
    100% { transform: scale(1); }
  }

  .stat-label {
    color: #813a96;
    font-size: 18px;
    font-weight: 600;
    margin-top: -36px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .stats-container {
      flex-direction: column;
      align-items: center;
    }
    .stat-orb {
      width: 150px;
      height: 150px;
    }
    .stat-number {
      font-size: 30px;
    }
    .stat-label {
      font-size: 14px;
    }
  }

  @media (min-width: 769px) {
    .stat-orb {
      width: 180px;
      height: 180px;
    }
  }
`}
            </style>

            {/* Stats Section */}
            <section
                id="stats"
                className="stats-section"
                style={{
                    padding: '48px 0',
                }}
            >
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, cursor: Pointer }}
                            className="stat-orb"
                        >
                            <p className="stat-number">{stat.number}</p>
                            <p className="stat-label">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default StatsSection;