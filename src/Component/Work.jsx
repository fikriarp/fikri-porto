import "./style.css";

export default function Work() {
  return (
    <div className="container text-white">
      <h1>
        <span className="text-[#ffc14f]">My</span> Portofolio
      </h1>

      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-slate-900 w-[230px] hover:shadow-lg hover:shadow-slate-950 hover:-translate-y-1">
            <img className="w-[230px]" src="/work-4.png" />
            <div className="flex justify-center">
              <p>Web Loker</p>
            </div>
          </div>
          <div className="bg-slate-900 w-[230px] hover:shadow-lg hover:shadow-slate-950 hover:-translate-y-1">
            <img className="w-[230px]" src="/work-3.png" />
            <div className="flex justify-center">
              <p>Web Portofolio</p>
            </div>
          </div>
          <div className="bg-slate-900 w-[230px] hover:shadow-lg hover:shadow-slate-950 hover:-translate-y-1">
            <img className="w-[230px]" src="/work-2.png" />
            <div className="flex justify-center">
              <p>Web UMKM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
