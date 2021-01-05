import React from "react";

function Header({ setisDark }) {
  const themeHandler = () => {
    setisDark((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">Chat-Lyser</div>
        <div className="right_nav">
          <button onClick={themeHandler}>Toggle theme</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
