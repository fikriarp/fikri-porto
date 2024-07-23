import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Template from "./Component/Template";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Template />
    </>
  );
}

export default App;
