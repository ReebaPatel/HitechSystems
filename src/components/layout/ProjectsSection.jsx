import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Diamond Garden, Chembur',
            image: '/images/diamond-garden.jpg',
            client: 'MCGM',
            stats: '40% Increased Footfall',
        },
        {
            title: 'Biogas Plant Installation',
            image: '/images/biogas-plant.jpg',
            client: 'ONGC',
            stats: '30% Energy Savings',
        },
    ];

    return (
        <>
            {/* Embedded CSS for animations, pseudo-classes, and media queries */}
            <style>
                {`
          .projects-section {
            background: #ffffff; /* Match StatsSection */
            padding: 48px 0;
          }

          .projects-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 16px;
          }

          .projects-heading {
            color: #45417f; /* Match StatsSection */
            font-size: 30px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 40px;
          }

          .projects-heading span {
            border-bottom: 4px solid #da419f; /* Match StatsSection accent */
            padding-bottom: 4px;
          }

          .projects-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
          }

          .project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
//   border: 1px solid #a4a4ae;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in, box-shadow 0.3s ease 0.1s;
  background-color: #fff; /* Ensures content like text stays readable */
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.9); /* Softer shadow for clean visibility */
}


          /* Pulsating glow effect around card */
          .project-card::before {
            content: '';
            position: absolute;
            top: -8px;
            left: -8px;
            right: -8px;
            bottom: -8px;
            border-radius: 12px;
            background: radial-gradient(circle, rgba(218, 65, 159, 0.5) 0%, transparent 70%); /* #da419f */
            opacity: 0.5;
            animation: pulseGlow 2s ease-in-out infinite;
            z-index: -1;
          }

          @keyframes pulseGlow {
            0% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 0.5; }
          }

          .project-image {
            width: 100%;
            height: 224px; /* Match original h-56 */
            object-fit: cover;
             transition: box-shadow 0.4s ease, border-color 0.4s ease;
          }

      
.project-card:hover {
   box-shadow: 0 8px 20px rgba(129, 58, 150, 0.3);
//   border-color: #813a96;
}



          .project-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(69, 65, 127, 0.9) 0%, transparent 100%); /* #45417f */
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }

          .project-title {
            color: #e1d3e3; /* Contrast on dark overlay */
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 4px;
          }

          .project-details {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #e1d3e3;
            font-size: 14px;
          }

          .project-client {
            background: rgba(218, 65, 159, 0.3); /* #da419f with opacity */
            padding: 4px 8px;
            border-radius: 9999px;
          }

          /* Responsive layout */
          @media (max-width: 640px) {
            .projects-grid {
              flex-direction: column;
              align-items: center;
            }
            .project-card {
              width: 100%;
              max-width: 320px;
            }
            .projects-heading {
              font-size: 24px;
            }
          }

          @media (min-width: 641px) and (max-width: 1023px) {
            .project-card {
              width: calc(45% - 12px);
            }
            .projects-heading {
              font-size: 28px;
            }
          }

          @media (min-width: 1024px) {
            .project-card {
              width: calc(45% - 12px); /* Keep 2 columns as per original design */
            }
          }
        `}
            </style>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <div className="projects-container">
                    <h2 className="projects-heading">
                        <span>Featured Projects</span>
                    </h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="project-card"
                            >
                                <LazyLoadImage
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    effect="blur"
                                    placeholderSrc="/images/placeholder.jpg"
                                />
                                <div className="project-overlay">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-details">
                                        <span className="project-client">{project.client}</span>
                                        <span>{project.stats}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsSection;