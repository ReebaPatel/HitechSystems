import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiArrowRight, FiCheckCircle, FiSettings, FiTool, FiChevronDown } from 'react-icons/fi';
import { SlEnergy } from 'react-icons/sl';
import { motion } from 'framer-motion';
import HeroSection from '/src/components/layout/HeroSection';
import ClientsSection from '/src/components/layout/ClientsSection';
import StatsSection from '/src/components/layout/StatsSection';
import ServicesSection from '/src/components/layout/ServicesSection';
import ProjectsSection from '/src/components/layout/ProjectsSection';

const HomePage = () => {
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

    const services = [
        {
            icon: <SlEnergy className="w-8 h-8 text-red-600" />,
            title: 'Electrical Solutions',
            desc: 'Complete electrical installations & maintenance',
        },
        {
            icon: <FiTool className="w-8 h-8 text-red-600" />,
            title: 'Mechanical Services',
            desc: 'Industrial machinery & process equipment',
        },
        {
            icon: <FiSettings className="w-8 h-8 text-red-600" />,
            title: 'Custom Projects',
            desc: 'Tailored solutions for government needs',
        },
        {
            icon: <FiCheckCircle className="w-8 h-8 text-red-600" />,
            title: 'Quality Assurance',
            desc: 'ISO-standard compliant services',
        },
    ];

    const clients = ['MCGM', 'BARC', 'IndianRailways', 'ONGC', 'BEST', 'NPCIL'];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <HeroSection />
            <ClientsSection />
            <StatsSection />
            <ServicesSection />
            <ProjectsSection />
        </div >
    );
};

export default HomePage;