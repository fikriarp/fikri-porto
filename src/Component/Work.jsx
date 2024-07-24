import "./style.css";

export default function Work() {
  return (
    <div className="container text-white">
      <h1 className="text-xl">
        <span className="text-[#ffc14f]">My</span> Portofolio
      </h1>

      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="card card-work relative overflow-hidden bg-slate-900 w-[230px] hover:shadow-lg hover:shadow-slate-950 hover:-translate-y-1">
            <img className="w-[230px]" src="/work-4.png" />
            <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition duration-300">
              <img className="w-[50px] drop-shadow-2xl" src="/laravel.png" />
            </div>
            <div className="flex justify-center">
              <p>Web Loker</p>
            </div>
          </div>
          <div className="card card-work relative overflow-hidden bg-slate-900 w-[230px] hover:shadow-lg hover:shadow-slate-950 hover:-translate-y-1">
            <img className="w-[230px]" src="/work-3.png" />
            <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex gap-2 items-center justify-center opacity-0 transition duration-300">
              <i className="fa-brands fa-html5 text-5xl text-orange-600"></i>
              <i className="fa-brands fa-css3-alt text-5xl text-blue-600"></i>
              <i className="fa-brands fa-js text-5xl text-yellow-600"></i>
            </div>
            <div className="flex justify-center">
              <p>Web Portofolio</p>
            </div>
          </div>
          <div className="card card-work relative overflow-hidden bg-slate-900 w-[230px] hover:shadow-lg hover:shadow-slate-950 hover:-translate-y-1">
            <img className="w-[230px]" src="/work-2.png" />
            <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex gap-2 items-center justify-center opacity-0 transition duration-300">
              <i className="fa-brands fa-html5 text-5xl text-orange-600"></i>
              <i className="fa-brands fa-css3-alt text-5xl text-blue-600"></i>
              <i className="fa-brands fa-js text-5xl text-yellow-600"></i>
            </div>
            <div className="flex justify-center">
              <p>Web UMKM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
