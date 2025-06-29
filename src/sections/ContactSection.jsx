import React from 'react';
// Pastikan path dan ekstensi file .jsx sudah benar.
import AnimatedVisibilityWrapper from '../components/AnimatedVisibilityWrapper.jsx'; 
// Pastikan react-icons terinstal (npm install react-icons)
import { FaInstagram, FaGithub } from "react-icons/fa"; 

const ContactSection = ({ isDarkMode }) => (
  <section id="contact" className={`py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 ${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-800'}`}>
    <AnimatedVisibilityWrapper>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 font-playfair-display ${isDarkMode ? 'text-[#C7F022]' : 'text-gray-900'}`}>Hubungi Saya</h2>
        <div className={`p-6 sm:p-8 rounded-xl shadow-lg border ${isDarkMode ? 'bg-[#000000] border-gray-800' : 'bg-white border-gray-200'}`}>
          <p className={`text-base sm:text-lg text-center mb-6 sm:mb-8 font-lora ${isDarkMode ? 'text-[#7789AB]' : 'text-gray-700'}`}>
            Tertarik untuk berkolaborasi atau ingin bertanya? Jangan ragu untuk menghubungi saya!
          </p>
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Nama Anda</label>
              <input type="text" id="name" className={`shadow appearance-none border rounded-lg w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C7F022] focus:border-transparent transition duration-200 ${isDarkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-700 border-gray-300'}`} placeholder="Nama Lengkap Anda"/>
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email Anda</label>
              <input type="email" id="email" className={`shadow appearance-none border rounded-lg w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C7F022] focus:border-transparent transition duration-200 ${isDarkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-700 border-gray-300'}`} placeholder="email@contoh.com"/>
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Pesan Anda</label>
              <textarea id="message" rows="5" className={`shadow appearance-none border rounded-lg w-full py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C7F022] focus:border-transparent transition duration-200 ${isDarkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-700 border-gray-300'}`} placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className={`font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#C7F022] focus:ring-opacity-50 transition duration-300 transform hover:scale-105 shadow-md bg-[#C7F022] text-[#000000] hover:bg-lime-500`}>Kirim Pesan</button>
            </div>
          </form>
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-8 sm:mt-10">
            {/* Tautan Instagram */}
            <a href="https://instagram.com/dmf.zl" target="_blank" rel="noopener noreferrer" className={`transition duration-300 ${isDarkMode ? 'text-[#C7F022] hover:text-lime-500' : 'text-gray-800 hover:text-gray-900'}`}>
              <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            {/* Tautan GitHub */}
            <a href="https://github.com/zxxxdmf" target="_blank" rel="noopener noreferrer" className={`transition duration-300 ${isDarkMode ? 'text-[#C7F022] hover:text-lime-500' : 'text-gray-800 hover:text-gray-900'}`}>
              <FaGithub className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedVisibilityWrapper>
  </section>
);

export default ContactSection;
