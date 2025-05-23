import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/', scrollTo: 'hero', isScroll: false },
    { name: 'Clients', to: '/clients', scrollTo: 'clients', isScroll: true },
    { name: 'Services', to: '/services', scrollTo: 'services', isScroll: true },
    { name: 'Projects', to: '/projects', scrollTo: 'projects', isScroll: true },
    { name: 'Contact', to: '/contact', scrollTo: 'contact', isScroll: true },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          color: #45417f;
          font-weight: 500;
          font-size: 18px;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .nav-link:hover {
          color: #da419f;
          transform: scale(1.05);
          cursor: pointer;
        }

        .nav-link.active {
          color: #da419f;
        }

        .mobile-link {
          display: block;
          padding: 16px 24px;
          color: #45417f;
          font-weight: 500;
          font-size: 18px;
          text-decoration: none;
          transition: color 0.3s ease, background-color 0.3s ease;
        }

        .mobile-link:hover {
          color: #da419f;
          background-color: #e1d3e3;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }

        @media (max-width: 480px) {
          .brand-title {
            font-size: 18px !important;
          }
          .mobile-link {
            font-size: 16px !important;
          }
        }
      `}</style>

      <header
        style={{
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid #e1d3e3',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <RouterLink
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <img
              src="/logos/hitech-logo.png"
              alt="Hitech Systems Logo"
              style={{ height: '60px', width: 'auto' }}
              onError={(e) => (e.target.src = '/images/placeholder.jpg')}
            />
            <span
              className="brand-title"
              style={{
                fontWeight: 600,
                color: '#45417f',
                letterSpacing: '-0.025em',
                fontSize: '24px',
              }}
            >
              Hitech Systems
            </span>
          </RouterLink>

          <div
            className="desktop-nav"
            style={{
              display: isMobile ? 'none' : 'flex',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {navLinks.map((link) =>
              link.isScroll ? (
                <ScrollLink
                  key={link.name}
                  to={link.scrollTo}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink key={link.name} to={link.to} className="nav-link">
                  {link.name}
                </RouterLink>
              )
            )}
          </div>

          <button
            className="mobile-toggle"
            style={{
              display: isMobile ? 'flex' : 'none',
              color: '#45417f',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX style={{ width: '32px', height: '32px' }} />
            ) : (
              <FiMenu style={{ width: '32px', height: '32px' }} />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              display: isMobile ? 'block' : 'none',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e1d3e3',
            }}
          >
            {navLinks.map((link) =>
              link.isScroll ? (
                <ScrollLink
                  key={link.name}
                  to={link.scrollTo}
                  smooth={true}
                  duration={500}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.name}
                  to={link.to}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </RouterLink>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;