export default function Card({ tools, nameProject, imgProject }) {
  return (
    <div className="card card-work relative overflow-hidden bg-slate-900 w-[230px] hover:shadow-lg hover:shadow-slate-950 hover:-translate-y-1">
      <img className="w-[230px]" src={imgProject} />
      <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex gap-2 items-center justify-center opacity-0 transition duration-300">
        {tools}
      </div>
      <div className="flex justify-center">
        <p>{nameProject}</p>
      </div>
    </div>
  );
}
