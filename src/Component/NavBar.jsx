import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NavBar({ onSelect }) {
  return (
    <nav
      className="h-[100dvh] max-w-fit px-3 
    bg-[#405D72] flex flex-col justify-between 
    items-center py-4 text-[#ffff] shadow-lg shadow-black"
    >
      <p className="lg:text-2xl">PORTOFOLIO</p>
      <ul className="flex flex-col gap-5 items-center">
        <li
          className="cursor-pointer hover:drop-shadow-2xl"
          onClick={() => onSelect("home")}
        >
          <i className="fa-solid fa-house"></i>
        </li>
        <li
          className="cursor-pointer hover:drop-shadow-2xl"
          onClick={() => onSelect("about")}
        >
          <i className="fa-solid fa-address-card"></i>
        </li>
        <li
          className="cursor-pointer hover:drop-shadow-2xl"
          onClick={() => onSelect("skills")}
        >
          <i className="fas fa-chalkboard-teacher"></i>
        </li>
      </ul>
    </nav>
  );
}
