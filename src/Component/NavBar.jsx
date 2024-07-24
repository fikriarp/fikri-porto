import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

export default function NavBar({ onSelect }) {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState("home");

  const handleSelect = (section) => {
    setActiveSection(section);
    onSelect(section);
  };

  return (
    <nav
      className="h-[100dvh] max-w-fit px-3 
      bg-[#405D72] flex flex-col justify-between 
      items-center py-4 text-[#ffff] shadow-lg shadow-black"
    >
      <div className="flex flex-col items-center gap-2 px-4">
        <p className="lg:text-xl text-md">F</p>
        <p className="lg:text-xl text-md">I</p>
        <p className="lg:text-xl text-md text-[#ffc14f]">K</p>
        <p className="lg:text-xl text-md text-[#ffc14f]">R</p>
        <p className="lg:text-xl text-md text-[#ffc14f]">I</p>
      </div>

      <ul className="flex flex-col gap-5 items-center">
        <li
          className={`cursor-pointer hover:drop-shadow-2xl flex flex-col items-center hover:-translate-y-1 ${
            activeSection === "home" ? "text-[#ffc14f]" : ""
          }`}
          onClick={() => handleSelect("home")}
        >
          <i
            className={`fa-solid fa-house ${
              activeSection === "home" ? "text-[#ffc14f]" : ""
            }`}
          ></i>
          <p className="text-sm lg:text-base">Home</p>
        </li>
        <li
          className={`cursor-pointer hover:drop-shadow-2xl flex flex-col items-center hover:-translate-y-1 ${
            activeSection === "about" ? "text-[#ffc14f]" : ""
          }`}
          onClick={() => handleSelect("about")}
        >
          <i
            className={`fa-solid fa-address-card ${
              activeSection === "about" ? "text-[#ffc14f]" : ""
            }`}
          ></i>
          <p className="text-sm lg:text-base">About</p>
        </li>
        <li
          className={`cursor-pointer hover:drop-shadow-2xl flex flex-col items-center hover:-translate-y-1 ${
            activeSection === "works" ? "text-[#ffc14f]" : ""
          }`}
          onClick={() => handleSelect("works")}
        >
          <i
            className={`fas fa-chalkboard-teacher ${
              activeSection === "works" ? "text-[#ffc14f]" : ""
            }`}
          ></i>
          <p className="text-sm lg:text-base">Portofolio</p>
        </li>
        <li
          className={`cursor-pointer hover:drop-shadow-2xl flex flex-col items-center hover:-translate-y-1 ${
            activeSection === "contact" ? "text-[#ffc14f]" : ""
          }`}
          onClick={() => handleSelect("contact")}
        >
          <i
            className={`fa-solid fa-address-book ${
              activeSection === "contact" ? "text-[#ffc14f]" : ""
            }`}
          ></i>
          <p className="text-sm lg:text-base">Contact</p>
        </li>
      </ul>
    </nav>
  );
}
