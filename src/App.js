import { useState } from "react";

import "./css/main.min.css";
import FilePicker from "./FilePicker";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Header from "./Header";

function App() {
  const [isDark, setisDark] = useState(true);

  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <Header setisDark={setisDark} />
      <FilePicker isDark={isDark} />
      <h5 style={{ textAlign: "center" }}>
        For Any Query Contact Rishk3
        <a
          className="social_icon"
          rel="noopener noreferrer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+918423766435&text=Hey, I Saw your ChatLyser Project.."
        >
          <Button>
            <WhatsAppIcon
              style={{
                marginTop: "-3px",
                color: "#fff",
                backgroundColor: "#25D366",
                borderRadius: "50%",
                padding: "1px",
                fontSize: "24px",
              }}
            />
          </Button>
        </a>
      </h5>
    </div>
  );
}

export default App;
