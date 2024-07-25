import Card from "./Card";
import Tool from "./Tool";
import "../style.css";
import { useState } from "react";

export default function Work() {
  const [buttonValue, setButtonValue] = useState("Social Media Design");

  function handleButtonValue() {
    setButtonValue((prevValue) =>
      prevValue === "Social Media Design" ? "Front End" : "Social Media Design"
    );
  }

  return (
    <div className="container text-white mt-2 text-sm font-mono">
      <h1 className="text-xl">
        <span className="text-[#ffc14f]">My</span> Portfolio
      </h1>
      {buttonValue === "Social Media Design" ? (
        <i className="absolute right-3 fa-solid fa-code text-xl text-white"></i>
      ) : (
        <i className="absolute right-3 fa-solid fa-pen-nib text-xl text-white"></i>
      )}
      <h2 className="text-lg">
        Project
        <span className="text-[#ffc14f]">
          {buttonValue === "Social Media Design"
            ? " Front End"
            : " Social Media Design"}
        </span>
      </h2>
      <div className="mt-10 flex justify-center bg-slate-800 py-5 shadow-lg shadow-black">
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-5 ${
            buttonValue === "Front End" && "hidden"
          }`}
        >
          <Card
            nameProject="Web Lowongan Kerja"
            imgProject="/work-4.png"
            className="lg:w-500px"
            tools={[
              <Tool key="1" imgTool="/laravel.png" />,
              <Tool key="2" imgTool="/tailwind.png" />,
            ]}
          />
          <Card
            nameProject="Web UMKM"
            imgProject="/work-2.png"
            className="lg:w-[500px]"
            tools={[
              <i
                key="icon1"
                className="fa-brands fa-html5 text-5xl text-orange-600"
              ></i>,
              <i
                key="icon2"
                className="fa-brands fa-css3-alt text-5xl text-blue-600"
              ></i>,
              <i
                key="icon3"
                className="fa-brands fa-js text-5xl text-yellow-600"
              ></i>,
            ]}
          />
          <Card
            nameProject="Web Portfolio"
            imgProject="/work-3.png"
            className="lg:w-[500px]"
            tools={[
              <i
                key="icon1"
                className="fa-brands fa-html5 text-5xl text-orange-600"
              ></i>,
              <i
                key="icon2"
                className="fa-brands fa-css3-alt text-5xl text-blue-600"
              ></i>,
              <i
                key="icon3"
                className="fa-brands fa-js text-5xl text-yellow-600"
              ></i>,
            ]}
          />
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-5 ${
            buttonValue === "Social Media Design" && "hidden"
          }`}
        >
          <Card
            nameProject="Instagram Social Media Design"
            imgProject="/sosmed-1.png"
            className="h-[200px]"
            tools={<Tool imgTool="/canva.png" />}
          />
          <Card
            nameProject="Logo Design"
            imgProject="/sosmed-2.png"
            className="h-[200px]"
            tools={<Tool imgTool="/ai.png" />}
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hover:drop-shadow-lg hover:-translate-y-1">
        <button onClick={handleButtonValue} className="bg-slate-950 py-1 px-3">
          {buttonValue}
        </button>
      </div>
    </div>
  );
}
