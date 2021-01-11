import React, { useState, useEffect } from "react";
import {
  totalLoveEmojiSentObj,
  totalLaughEmojiSentObj,
  commonEmojiObj,
} from "./jsLogic/stringFuncs";

function EmojiGraph() {
  const [totalEmoji, settotalEmoji] = useState([]);
  const [laughEmoji, setLaughEmoji] = useState([]);
  const [commonEmoji, setCommonEmoji] = useState([]);
  useEffect(() => {
    const entries = Object.entries(totalLoveEmojiSentObj);
    settotalEmoji(entries);
    const laughEntry = Object.entries(totalLaughEmojiSentObj);
    setLaughEmoji(laughEntry);
    const commonEntry = Object.entries(commonEmojiObj);
    setCommonEmoji(commonEntry);
  }, []);

  const picData = totalEmoji.map((entry) => {
    return (
      <p key={entry[0]}>
        By {entry[0]} -> {entry[1]}
      </p>
    );
  });
  const commonEmojiData = commonEmoji.map((entry) => {
    return (
      <p style={{ fontSize: "20px" }} key={entry[0]}>
        {entry[0]} is the Most Common Emoji Shared in Chat with a no of{" "}
        {entry[1]} times
      </p>
    );
  });
  const laughData = laughEmoji.map((entry) => {
    return (
      <p key={entry[0]}>
        by {entry[0]} -> {entry[1]}
      </p>
    );
  });

  return (
    <div style={{ margin: "20px" }}>
      <h3 style={{ marginTop: "20px" }}>Emojis Shared</h3>
      {commonEmojiData}
      <div className="textDisplay">
        <div>❤️ {picData}</div>
        <div>
          <span style={{ fontSize: "30px" }}> 😂</span>
          {laughData}
        </div>
      </div>
    </div>
  );
}

export default EmojiGraph;
