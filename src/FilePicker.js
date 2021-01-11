import React, { useRef, useState } from "react";
import DataCharts from "./DataCharts";
import { countTotalMsgs } from "./jsLogic/stringFuncs";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FAQ from "./FAQ";

function FilePicker({ isDark }) {
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
          <h2 style={{ textAlign: "left", fontWeight: "600" }}>
            Have you ever wondered what's going on in your WhatsApp groups?
            Well, We Might Help You
          </h2>

          <ul style={{ textAlign: "left", margin: "20px" }}>
            <h2 style={{ textAlign: "left", fontWeight: "500" }}>
              Steps to follow
            </h2>
            <li>Step 1: Go to Whatsapp contact or group</li>
            <li>
              Step 2: Click on the right corner and select "EXPORT CHAT" option{" "}
            </li>
            <li>Step 3: Select Without Media and email to yourself </li>
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
            <li>
              You May also take The print out of the Statistics Page, and Share
              it with whom you like
            </li>
          </ul>
          <p>Click And Select your file</p>
          <button className="upload_btn" onClick={fileUploading}>
            Upload Your .txt File
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

          <FAQ />
        </div>
      ) : (
        <DataCharts isDark={isDark} />
      )}
    </div>
  );
}

export default FilePicker;
