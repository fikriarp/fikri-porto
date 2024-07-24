export default function Contact() {
  return (
    <div className="container text-black">
      <h1 className="text-xl mt-2">Contact</h1>
      <p className="mt-5">
        Contact me for questions, suggestions, or collaboration through the
        email below. I am ready to assist you
      </p>
      <div className=" text-white py-5 bg-slate-800 text-lg flex flex-col mt-20 justify-center items-center gap-4">
        <div className="flex justify-end gap-2 px-4 w-full">
          <div className="w-2 h-2 rounded-full bg-green-600"></div>
          <div className="w-2 h-2 rounded-full bg-red-600"></div>
          <div className="w-2 h-2 rounded-full bg-red-800"></div>
        </div>
        <a
          href="https://wa.me/6282361611007"
          target="_black"
          className="text-lg flex items-center gap-2 hover:drop-shadow-lg cursor-pointer hover:-translate-y-1"
        >
          <i className="fa-brands fa-whatsapp text-green-600"></i>
          <p>+62 823 6161 1007</p>
        </a>
        <a
          href="https://www.instagram.com/fikriarly/"
          target="_black"
          className="text-lg flex items-center gap-2 hover:drop-shadow-lg cursor-pointer hover:-translate-y-1"
        >
          <i className="fa-brands fa-instagram text-red-500"></i>
          <p>@fikriarly</p>
        </a>
        <a
          href="mailto:fikriarly11@gmail.com"
          target="_black"
          className="text-lg flex items-center gap-2 hover:drop-shadow-lg cursor-pointer hover:-translate-y-1"
        >
          <i className="fa-regular fa-envelope text-red-700"></i>
          <p>fikriarly11@gmail.com</p>
        </a>
      </div>
    </div>
  );
}
