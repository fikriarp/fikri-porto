export default function Home() {
  return (
    <div className="lg:flex w-full lg:mx-20 justify-between flex flex-col">
      <div
        className="text-white lg:h-full lg:flex lg:items-center mt-20
      md:h-full md:flex md:items-center"
      >
        <div className="bg-slate-600 px-5 py-5">
          <div className="flex justify-between items-center">
            <p>Hello</p>
            <div className="flex justify-end gap-2">
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-2xl lg:text-3xl text-[#ffc14f]">
            I'm Fikri Arly Pane
          </h1>
          <p className="text-base lg:text-lg">
            Freelance Front End & Social Media Design
          </p>
        </div>
      </div>
      <figure className="lg:h-full  flex items-end justify-end">
        <img
          className="drop-shadow-xl w-[300px] lg:w-[350px]"
          src="/public/porto-01.png"
          alt="Porto"
        />
      </figure>
    </div>
  );
}
