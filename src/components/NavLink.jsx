const NavLink = ({ sectionId, activeSection, onClick, children }) => (
  <a
    href={`#${sectionId}`}
    onClick={() => onClick(sectionId)}
    className={`
      relative px-3 py-1 font-lora text-lg transition
      ${activeSection === sectionId
        ? "text-[#C7F022] font-bold"
        : "text-[#7789AB] hover:text-[#C7F022]"}
      duration-200
    `}
    style={{ display: 'inline-block' }}
  >
    {children}
    {activeSection === sectionId && (
      <span className="block h-1 rounded-full bg-[#C7F022] mt-1 w-full transition-all"></span>
    )}
  </a>
);

export default NavLink;
