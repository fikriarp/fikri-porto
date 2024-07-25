import "../style.css";

export default function Card({
  key,
  tools,
  className,
  nameProject,
  imgProject,
}) {
  return (
    <div className="card card-work relative overflow-hidde w-[230px] lg:w-[300px] hover:drop-shadow-2xl hover:-translate-y-1">
      <div className="flex items-center justify-center">
        <img key={key} className={`card-work ${className}`} src={imgProject} />
      </div>
      <div class="overlay absolute inset-0  flex gap-2 items-center justify-center opacity-0 transition duration-300">
        {tools}
      </div>
      <div className="flex justify-center bg-slate-950">
        <p>{nameProject}</p>
      </div>
    </div>
  );
}
