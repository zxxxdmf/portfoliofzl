const ServiceCard = ({ title, description, icon, isDarkMode }) => (
  <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border ${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
    <div className={`text-5xl mb-4 text-center ${isDarkMode ? 'text-[#C7F022]' : 'text-gray-800'}`}>{icon}</div>
    <h3 className={`text-2xl md:text-xl lg:text-2xl font-semibold mb-3 text-center font-playfair-display ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
    <p className={`text-center text-base font-lora ${isDarkMode ? 'text-[#7789AB]' : 'text-gray-700'}`}>{description}</p>
  </div>
);

export default ServiceCard;
