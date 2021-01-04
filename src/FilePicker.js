import React, { useRef, useState } from "react";
import { countTotalMsgs } from "./jsLogic/stringFuncs";

function FilePicker() {
  const [file, setFile] = useState(null);
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
    };
  };

  return (
    <div className="filePicker">
      <h2>Drop your files here</h2>
      <h2>or click to upload!</h2>
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
    </div>
  );
}

export default FilePicker;
