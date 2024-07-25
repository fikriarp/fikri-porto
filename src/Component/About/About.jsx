import { useState } from "react";

export default function About() {
  const [skill, setSkill] = useState("Front End");
  const [buttonValue, setButtonValue] = useState("Social Media Design");

  const handleSkill = () => {
    if (skill === "Front End") {
      setButtonValue("Front End");
      setSkill("Social Media Design");
    } else if (skill === "Social Media Design") {
      setButtonValue("Social Media Design");
      setSkill("Front End");
    }
  };

  return (
    <div className="container mt-4">
      <div className="flex items-center gap-2">
        <div className="bg-slate-700 w-5 h-1"></div>
        <p>About Me</p>
      </div>
      <p className="text-2xl">Who Am I</p>

      <div class="bg-gray-900 text-gray-300 font-mono p-1">
        <div class="p-2 bg-gray-800 rounded-lg shadow-lg">
          <p class="text-[12px] lg:text-lg md:text-md">
            I'm a passionate Freelance
            <span className="text-[#ffc14f]"> Front End Developer </span> and
            <span className="text-[#ffc14f]"> Social Media Designer</span>. I
            create visually stunning, user friendly websites and engaging social
            media content. My expertise ensures seamless, responsive web
            experiences that look great and perform flawlessly.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xl">My Skill</p>
        <div className="bg-slate-900 shadow-lg shadow-black">
          <p className="text-white pt-2 flex justify-center">{skill}</p>

          {/* Front End */}
          <div
            className={`grid grid-cols-4 gap-y-5 text-white py-5 ${
              buttonValue === "Social Media Design" ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-html5 text-5xl text-orange-600"></i>
              <p className="text-xs lg:text-base">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-css3-alt text-5xl text-blue-600"></i>
              <p className="text-xs lg:text-base">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-js text-5xl text-yellow-600"></i>
              <p className="text-xs lg:text-base">Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-bootstrap text-5xl text-violet-600"></i>
              <p className="text-xs lg:text-base">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img
                src="/tailwind.png"
                className="w-[3rem]"
                alt="Tailwind CSS"
              />
              <p className="mt-3 text-xs lg:text-base">Tailwind</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img src="/vite.png" className="w-[2rem]" alt="Vite JS" />
              <p className="mt-2 text-xs lg:text-base">Vite Js</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img
                className="w-[2rem] drop-shadow-2xl"
                src="/laravel.png"
                alt="Laravel"
              />
              <p className="mt-2 text-xs lg:text-base">Laravel</p>
            </div>
          </div>

          {/* Social Media */}
          <div
            className={`grid grid-cols-3 gap-y-5 text-white py-5 ${
              buttonValue === "Front End" ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center">
              <img src="/ai.png" className="w-[3rem]" alt="Adobe Illustrator" />
              <p className="text-center text-xs lg:text-base">
                Adobe Illustrator
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/canva.png" className="w-[3rem]" alt="Canva" />
              <p className="text-xs lg:text-base">Canva</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSkill}
          className="mt-3 bg-slate-900 px-2 py-1 text-white cursor-pointer hover:-translate-y-1 hover:text-[#ffc14f] hover:drop-shadow-lg"
        >
          {buttonValue}
        </button>
      </div>
    </div>
  );
}
