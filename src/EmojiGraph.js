import React, { useState, useEffect } from "react";
import { totalLoveEmojiSentObj } from "./jsLogic/stringFuncs";

function EmojiGraph() {
  const [totalEmoji, settotalEmoji] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalLoveEmojiSentObj);
    settotalEmoji(entries);
  }, []);

  const picData = totalEmoji.map((entry) => {
    return (
      <p key={entry[0]}>
        Total ❤️ sent By {entry[0]} is {entry[1]}
      </p>
    );
  });

  return (
    <div style={{ margin: "20px" }}>
      <h3>Emoji Shared</h3>
      {picData}
    </div>
  );
}

export default EmojiGraph;
