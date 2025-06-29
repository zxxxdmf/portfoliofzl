import AnimatedVisibilityWrapper from '../components/AnimatedVisibilityWrapper';
import ServiceCard from '../components/ServiceCard';

const SERVICES = [
  { title: "Pengembangan Web", description: "Membangun aplikasi web responsif dan berperforma tinggi menggunakan teknologi modern.", icon: "💻" },
  { title: "Desain UI/UX", description: "Menciptakan antarmuka pengguna yang intuitif dan pengalaman pengguna yang mulus.", icon: "🎨" },
  { title: "Konsultasi Teknologi", description: "Memberikan saran ahli tentang strategi teknologi dan implementasi proyek.", icon: "💡" },
  { title: "Pengembangan Backend", description: "Membangun arsitektur server yang kuat dan API yang efisien.", icon: "⚙️" },
  { title: "Optimasi SEO", description: "Meningkatkan visibilitas website Anda di mesin pencari untuk menjangkau audiens lebih luas.", icon: "📈" },
  { title: "Manajemen Proyek", description: "Mengelola proyek teknologi dari awal hingga akhir, memastikan penyelesaian tepat waktu.", icon: "📊" }
];

const ServicesSection = ({ isDarkMode }) => (
  <section id="services" className={`py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 ${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-800'}`}>
    <AnimatedVisibilityWrapper>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 font-playfair-display ${isDarkMode ? 'text-[#C7F022]' : 'text-gray-900'}`}>Layanan & Keahlian</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((svc, idx) => (
            <ServiceCard key={idx} {...svc} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </AnimatedVisibilityWrapper>
  </section>
);

export default ServicesSection;
