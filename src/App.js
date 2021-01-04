import { useState } from "react";

import "./css/main.min.css";
import FilePicker from "./FilePicker";
import Header from "./Header";

function App() {
  const [isDark, setisDark] = useState(true);

  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <Header setisDark={setisDark} />
      <FilePicker />
    </div>
  );
}

export default App;
