export default function Contact() {
  return (
    <div className="container text-white">
      <h1 className="text-xl mt-2">Contact</h1>

      <div className="text-lg flex flex-col w-[75dvw] h-[65dvh] justify-center items-center gap-4">
        <a
          href="https://wa.me/6282361611007"
          target="_black"
          className="text-2xl flex items-center gap-2 hover:drop-shadow-2xl cursor-pointer hover:-translate-y-1"
        >
          <i className="fa-brands fa-whatsapp text-green-600"></i>
          <p>+62 823 6161 1007</p>
        </a>
        <a
          href="https://www.instagram.com/fikriarly/"
          target="_black"
          className="text-2xl flex items-center gap-2 hover:drop-shadow-2xl cursor-pointer hover:-translate-y-1"
        >
          <i className="fa-brands fa-instagram text-red-500"></i>
          <p>@fikriarly</p>
        </a>
        <a
          href="mailto:fikriarly11@gmail.com"
          target="_black"
          className="text-2xl flex items-center gap-2 hover:drop-shadow-2xl cursor-pointer hover:-translate-y-1"
        >
          <i className="fa-regular fa-envelope text-red-700"></i>
          <p>fikriarly11@gmail.com</p>
        </a>
      </div>
    </div>
  );
}
