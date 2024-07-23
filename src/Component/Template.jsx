import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Skill from "./Skill";
import { useState } from "react";

export default function Template() {
  const [activeSection, setActiveSection] = useState("home");
  // const bg = "bg-gradient-to-b from-[#2F3645] to-[#A3B2C2] to-[#2F3645]";
  const [bgSection, setBGSection] = useState("");

  const handleSelect = (section) => {
    setActiveSection(section);
    switch (section) {
      case "home":
        setBGSection(bg); // Background untuk Home
        break;
      case "about":
        setBGSection("bg-[#ffc14f]"); // Background untuk About
        break;
      case "skills":
        setBGSection("bg-[#A3B2C2]"); // Background untuk Skill
        break;
      default:
        setBGSection("bg-[#2F3645]"); // Default background
        break;
    }
  };

  return (
    <>
      <div className={`flex gap-5 ${bgSection}`}>
        <NavBar onSelect={handleSelect} />
        {activeSection === "home" && <Home />}
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skill />}
      </div>
    </>
  );
}
