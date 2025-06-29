const PortfolioCard = ({ title, description, image, isDarkMode }) => (
  <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border ${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = isDarkMode
          ? 'https://placehold.co/600x400/222222/888888?text=Gambar+Tidak+Tersedia'
          : 'https://placehold.co/600x400/D3D3D3/666666?text=Gambar+Tidak+Tersedia';
      }}
    />
    <div className="p-6">
      <h3 className={`text-2xl md:text-xl lg:text-2xl font-semibold mb-2 font-playfair-display ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
      <p className={`text-base font-lora ${isDarkMode ? 'text-[#7789AB]' : 'text-gray-700'}`}>{description}</p>
    </div>
  </div>
);

export default PortfolioCard;
