import Card from "./Card";
import Tool from "./Tool";
import "../style.css";
import { useState } from "react";

export default function Work() {
  const [buttonValue, setButtonValue] = useState("Social Media Design");

  function handleButtonValue() {
    if (buttonValue == "Social Media Design") {
      setButtonValue("Front End");
    } else if (buttonValue == "Front End") {
      setButtonValue("Social Media Design");
    }
  }

  return (
    <div className="container text-white mt-2">
      <h1 className="text-xl">
        <span className="text-[#ffc14f]">My</span> Portofolio
      </h1>
      <h2 className="text-lg mt-2">
        Project
        <span className="text-[#ffc14f]">
          {buttonValue == "Social Media Design"
            ? " Front End"
            : " Social Media Design"}
        </span>
      </h2>
      <div className="mt-10 flex justify-center">
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-5 ${
            buttonValue == "Front End" && "hidden"
          }`}
        >
          <Card
            nameProject={"Web Lowongan Kerja"}
            imgProject={"/work-4.png"}
            tools={<Tool imgTool={"/laravel.png"} />}
          />
          <Card
            nameProject={"Web UMKM"}
            imgProject={"/work-2.png"}
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
            nameProject={"Web Portofolio"}
            imgProject={"/work-3.png"}
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
      </div>
      <div className="absolute bottom-0 right-0 hover:drop-shadow-lg hover:-translate-y-1">
        <button onClick={handleButtonValue} className="bg-slate-950 px-3">
          {buttonValue}
        </button>
      </div>
    </div>
  );
}
