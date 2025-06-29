import React from 'react';
// Hapus import heroBg karena kita akan menggunakan CSS gradient
// import heroBg from '../assets/bg.png'; // path ke gambar kamu

const HeroSection = ({ isDarkMode, scrollToSection }) => (
  <section
    id="home"
    className={`relative h-screen flex items-center justify-center text-center pt-20 sm:pt-24
      ${isDarkMode ? 'bg-[#000000] text-gray-50' : 'bg-gradient-to-br from-gray-900 to-gray-700 text-white'}`}
  >
    {/* Mengganti div ini dengan kelas CSS baru untuk gradient bergerak */}
    <div
      className="absolute inset-0 opacity-30 animated-gradient-background" // Tambahkan kelas ini
    ></div>
    <div className="relative z-10 p-4 sm:p-6 max-w-xl md:max-w-4xl mx-auto">
      <h1 className={`text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-3 sm:mb-4 font-playfair-display ${isDarkMode ? 'text-[#C7F022]' : 'text-white'}`}>
        Halo, Saya <span className={`${isDarkMode ? 'text-[#C7F022]' : 'text-white'}`}>Faizal</span>
      </h1>
      <p className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 font-lora ${isDarkMode ? 'text-[#7789AB]' : 'text-gray-200'}`}>
        Seorang Pengembang Web 
      </p>
      <button
        onClick={() => scrollToSection('portfolio')}
        className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg
          ${isDarkMode ? 'bg-[#C7F022] text-[#000000] hover:bg-lime-500' : 'bg-[#C7F022] text-[#000000] hover:bg-lime-500'}`}
      >
        Lihat Portofolio Saya
      </button>
    </div>
  </section>
);

export default HeroSection;
