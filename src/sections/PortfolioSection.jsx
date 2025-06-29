import AnimatedVisibilityWrapper from '../components/AnimatedVisibilityWrapper';
import PortfolioCard from '../components/PortfolioCard';

const PROJECTS = [
  {
    title: "soon",
    description: "soon",
    image: "https://placehold.co/600x400/80B0CB/FFFFFF?text=SOON",
    darkImage: "https://placehold.co/600x400/555555/C7F022?text=SOON"
  },
  {
    title: "soon",
    description: "soon",
    image: "https://placehold.co/600x400/98A99B/FFFFFF?text=SOON",
    darkImage: "https://placehold.co/600x400/555555/C7F022?text=SOON"
  },
  {
    title: "soon",
    description: "soon",
    image: "https://placehold.co/600x400/B3C7D4/FFFFFF?text=SOON",
    darkImage: "https://placehold.co/600x400/555555/C7F022?text=SOON"
  },
  {
    title: "soon",
    description: "soon",
    image: "https://placehold.co/600x400/CDB59E/FFFFFF?text=SOON",
    darkImage: "https://placehold.co/600x400/555555/C7F022?text=SOON"
  },
  {
    title: "soon",
    description: "soon",
    image: "https://placehold.co/600x400/6C8E9A/FFFFFF?text=SOON",
    darkImage: "https://placehold.co/600x400/555555/C7F022?text=SOON"
  },
  {
    title: "soon",
    description: "soon",
    image: "https://placehold.co/600x400/B5A8BE/FFFFFF?text=SOON",
    darkImage: "https://placehold.co/600x400/555555/C7F022?text=SOON"
  }
];

const PortfolioSection = ({ isDarkMode }) => (
  <section id="portfolio" className={`py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 ${isDarkMode ? 'bg-[#000000] text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 font-playfair-display ${isDarkMode ? 'text-[#C7F022]' : 'text-gray-900'}`}>Portofolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((p, i) => (
          <AnimatedVisibilityWrapper key={i} delay={i * 150}>
            <PortfolioCard
              title={p.title}
              description={p.description}
              image={isDarkMode ? p.darkImage : p.image}
              isDarkMode={isDarkMode}
            />
          </AnimatedVisibilityWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
