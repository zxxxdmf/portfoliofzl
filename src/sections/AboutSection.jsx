import AnimatedVisibilityWrapper from '../components/AnimatedVisibilityWrapper';
import fotoProfil from '../assets/221.png'; // path ke gambar kamu

const AboutSection = ({ isDarkMode }) => (
  <section id="about" className={`py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 ${isDarkMode ? 'bg-[#000000] text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
    <AnimatedVisibilityWrapper>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 font-playfair-display ${isDarkMode ? 'text-[#C7F022]' : 'text-gray-900'}`}>Tentang Saya</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={fotoProfil}
              alt="Foto Profil"
              className={`w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 ${isDarkMode ? 'border-[#C7F022]' : 'border-gray-500'}`}
            />
          </div>
          <div className={`md:w-2/3 text-base sm:text-lg leading-relaxed font-lora ${isDarkMode ? 'text-[#7789AB]' : 'text-gray-700'}`}>
            <p className="mb-4">
              Saya adalah seorang profesional yang bersemangat dengan pengalaman lebih dari 5 tahun dalam pengembangan web dan desain UI/UX. Saya berdedikasi untuk menciptakan solusi digital yang inovatif dan berorientasi pada pengguna.
            </p>
            <p className="mb-4">
              Saya memiliki keahlian dalam React, Node.js, dan berbagai teknologi frontend dan backend lainnya. Pendekatan saya berfokus pada detail, memastikan setiap proyek tidak hanya fungsional tetapi juga estetis dan mudah digunakan.
            </p>
            <p>
              Saya percaya bahwa teknologi adalah alat yang kuat untuk memecahkan masalah kompleks dan saya selalu mencari tantangan baru untuk terus belajar dan berkembang.
            </p>
          </div>
        </div>
      </div>
    </AnimatedVisibilityWrapper>
  </section>
);

export default AboutSection;
