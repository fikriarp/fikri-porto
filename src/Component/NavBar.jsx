import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NavBar({ onSelect }) {
  return (
    <nav
      className="h-[100dvh] max-w-fit px-3 
    bg-[#405D72] flex flex-col justify-between 
    items-center py-4 text-[#ffff] shadow-lg shadow-black"
    >
      <div className="flex flex-col items-center gap-2 px-4">
        <p className="lg:text-xl text-sm">P</p>
        <p className="lg:text-xl text-sm">O</p>
        <p className="lg:text-xl text-sm">R</p>
        <p className="lg:text-xl text-sm">T</p>
        <p className="lg:text-xl text-sm">O</p>
        <p className="lg:text-xl text-sm">F</p>
        <p className="lg:text-xl text-sm">O</p>
        <p className="lg:text-xl text-sm">L</p>
        <p className="lg:text-xl text-sm">I</p>
        <p className="lg:text-xl text-sm">O</p>
      </div>

      <ul className="flex flex-col gap-5 items-center">
        <li
          className="cursor-pointer hover:drop-shadow-2xl flex flex-col items-center hover:-translate-y-1"
          onClick={() => onSelect("home")}
        >
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </li>
        <li
          className="cursor-pointer hover:drop-shadow-2xl flex flex-col items-center hover:-translate-y-1"
          onClick={() => onSelect("about")}
        >
          <i className="fa-solid fa-address-card"></i>
          <p>About</p>
        </li>
        <li
          className="cursor-pointer hover:drop-shadow-2xl flex flex-col items-center hover:-translate-y-1"
          onClick={() => onSelect("skills")}
        >
          <i className="fas fa-chalkboard-teacher"></i>
          <p>Work</p>
        </li>
      </ul>
    </nav>
  );
}
