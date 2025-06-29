import React, { useState, useEffect } from 'react';
// Pastikan Anda telah membuat src/index.css dan memindahkan gaya global ke sana
import './index.css'; 

// Impor komponen NavLink dari folder src/components
// Pastikan path dan ekstensi benar (misalnya: NavLink.jsx)
import NavLink from './components/NavLink.jsx'; 

// Impor section-section dari folder src/sections
// Pastikan path dan ekstensi benar (misalnya: HeroSection.jsx)
import HeroSection from './sections/HeroSection.jsx'; 
import AboutSection from './sections/AboutSection.jsx'; 
import ServicesSection from './sections/ServicesSection.jsx'; 
import PortfolioSection from './sections/PortfolioSection.jsx'; 
import ContactSection from './sections/ContactSection.jsx'; 

// Menggunakan react-icons (pastikan sudah diinstal: npm install react-icons)
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const SECTIONS = ['home', 'about', 'services', 'portfolio', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [navOpen, setNavOpen] = useState(false);

  // Efek untuk menerapkan kelas mode gelap ke body dan menyimpan preferensi
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, activeSection]); // activeSection ditambahkan ke array dependensi untuk re-render theme state

  // Mengunci scroll body saat nav mobile terbuka
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'auto';
  }, [navOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setNavOpen(false); // Tutup menu saat bagian diklik
    }
  };

  // Memperbarui bagian aktif berdasarkan posisi gulir
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const sectionId of SECTIONS) {
        const el = document.getElementById(sectionId);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-lora antialiased ${isDarkMode ? 'bg-black text-white' : 'bg-white text-[#181818]'}`}>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-3 sm:py-4 lg:px-24 flex justify-between items-center rounded-b-2xl shadow-xl ${isDarkMode ? 'bg-black' : 'bg-white/80 backdrop-blur'}`}>
        <a
          href="#home"
          onClick={() => scrollToSection('home')}
          className={`text-xl sm:text-2xl font-bold font-playfair-display tracking-wide select-none ${isDarkMode ? 'text-[#C7F022]' : 'text-[#181818]'}`}
        >
          FXZL
        </a>

        {/* Tombol Mobile & Dark Mode (Tampilan Mobile) */}
        <div className="sm:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition ${isDarkMode ? 'bg-gray-800 text-[#C7F022]' : 'bg-gray-200 text-gray-700'}`}
            title={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button onClick={() => setNavOpen(!navOpen)} className="text-xl">
            {navOpen ? <FaTimes size={24} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} /> : <FaBars size={24} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />}
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden sm:flex gap-6 items-center">
          {SECTIONS.map((id) => (
            <NavLink
              key={id}
              sectionId={id}
              activeSection={activeSection}
              onClick={scrollToSection}
              isDarkMode={isDarkMode}
            >
              {id === 'home' ? 'Beranda' :
               id === 'about' ? 'Tentang' :
               id === 'services' ? 'Layanan' :
               id === 'portfolio' ? 'Portofolio' : 'Kontak'}
            </NavLink>
          ))}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition ${isDarkMode ? 'bg-gray-800 text-[#C7F022]' : 'bg-gray-200 text-gray-700'}`}
            title={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile (Overlay) */}
      {navOpen && (
        <div className={`sm:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] z-40 rounded-b-2xl shadow-lg py-6 flex flex-col items-center space-y-4 transition-all duration-200 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-[#181818]'}`}>
          {SECTIONS.map((id) => (
            <NavLink
              key={id}
              sectionId={id}
              activeSection={activeSection}
              onClick={scrollToSection}
              isDarkMode={isDarkMode}
            >
              {id === 'home' ? 'Beranda' :
               id === 'about' ? 'Tentang' :
               id === 'services' ? 'Layanan' :
               id === 'portfolio' ? 'Portofolio' : 'Kontak'}
            </NavLink>
          ))}
        </div>
      )}

      {/* Kompensasi Tinggi Navbar untuk Konten */}
      <div className="pt-[60px] sm:pt-[68px]"> {/* Responsive padding to compensate fixed navbar height */}
        <HeroSection isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
        <AboutSection isDarkMode={isDarkMode} />
        <ServicesSection isDarkMode={isDarkMode} />
        <PortfolioSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </div>

      {/* Footer */}
      <footer className={`py-6 px-4 text-sm font-lora text-center ${isDarkMode ? 'bg-black text-[#7789AB]' : 'bg-gray-800 text-gray-300'}`}>
        <p className="mb-2">&copy; {new Date().getFullYear()} FZL. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="flex justify-center gap-4">
          <a href="#home" onClick={() => scrollToSection('home')} className="hover:underline">Beranda</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="hover:underline">Tentang</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="hover:underline">Kontak</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
