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

      <div className="mt-4 lg:w-[50dvw]">
        <p className="text-sm">
          I am a passionate Freelance Front End Developer and Social Media
          Designer with a knack for creating visually stunning and user-friendly
          websites. My expertise lies in crafting seamless and responsive web
          experiences, while also designing engaging social media content that
          resonates with audiences. With a strong focus on both aesthetics and
          functionality, I bring creativity and technical skills to every
          project, ensuring that each design not only looks great but also
          performs flawlessly.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xl">My Skill</p>
        <div className="bg-slate-900">
          <p className="text-white pt-2 flex justify-center">{skill}</p>

          {/* Front End */}
          <div
            className={`grid grid-cols-3 gap-y-5 text-white py-5 ${
              buttonValue === "Social Media Design" ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-html5 text-5xl text-orange-600"></i>
              <p>HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-css3-alt text-5xl text-blue-600"></i>
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-js text-5xl text-yellow-600"></i>
              <p>Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-bootstrap text-5xl text-violet-600"></i>
              <p>Bootstrap</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img src="/tailwind.png" className="w-[3rem]" />
              <p className="mt-3">Tailwind</p>
            </div>
            <div className="flex flex-col items-center pt-2">
              <img src="/vite.png" className="w-[2rem]" />
              <p className="mt-2">Vite Js</p>
            </div>
          </div>

          {/* Social Media */}
          <div
            className={`grid grid-cols-3 gap-y-5 text-white py-5 ${
              buttonValue === "Front End" ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center ">
              <img src="/ai.png" className="w-[3rem]" />
              <p className="text-center">Adobe Illustrator</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/canva.png" className="w-[3rem]" />
              <p>Canva</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSkill}
          className="mt-3 bg-slate-900 px-2 py-1 text-white cursor-pointer"
        >
          {buttonValue}
        </button>
      </div>
    </div>
  );
}
