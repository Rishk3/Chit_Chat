import React, { useRef, useState } from "react";
import DataCharts from "./DataCharts";
import { countTotalMsgs } from "./jsLogic/stringFuncs";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function FilePicker() {
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const inputRef = useRef(null);

  const fileUploading = () => {
    inputRef.current.click();
  };

  const readSingleFile = (e) => {
    let fileName = e.target.files[0];
    if (fileName != null && fileName.type === "text/plain") {
      setFile(e.target.files[0].name);
      console.log("text file Uploading Started");
    } else {
      console.log("No files or txt files selected");
    }

    // executes on load of file
    let reader = new FileReader();
    reader.readAsText(fileName);
    // console.log(reader.readAsText(fileName));
    reader.onload = (e) => {
      console.log("file uploading finished");
      let contents = e.target.result;

      let totalmsgs = countTotalMsgs(contents);
      setIsFileUploaded(true);
    };
  };

  return (
    <div className="filePicker">
      {!isFileUploaded ? (
        <div>
          <p>Please Follow the Steps Given Below</p>
          <h2 style={{ margin: "20px" }}>Click And Select your file</h2>
          <button className="upload_btn" onClick={fileUploading}>
            Upload Now
          </button>
          <input
            required
            ref={inputRef}
            type="file"
            accept=".txt"
            hidden
            onChange={(e) => {
              readSingleFile(e);
            }}
          ></input>
          <p>{file}</p>
          <ul style={{ textAlign: "left" }}>
            <h2 style={{ textAlign: "center" }}>Steps to follow</h2>
            <li>Step 1: Go to Whatsapp contact or group</li>
            <li>
              Step 2: click on the right corner and select "EXPORT CHAT" option{" "}
            </li>
            <li>Step 3: select Without Media and email to yourself </li>
            <li>
              Step 4: Now download the .txt file from recived Email to your
              local storage
            </li>
            <li>
              Step 5: now click to upload and select the file You just
              downloaded{" "}
            </li>
            <li>
              As soon you pick the desired .txt file it will automatically show
              the result
            </li>
          </ul>
          <h3 style={{ margin: "20px" }}>
            Your Privacy is Our Top Priority, Nothing is Sent to Server
          </h3>
          <h3 style={{ margin: "20px" }}>
            You can Upload your File after turning off Your internet conncetion
            if you dont trust me
          </h3>

          <h5>
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
      ) : (
        <DataCharts />
      )}
    </div>
  );
}

export default FilePicker;
