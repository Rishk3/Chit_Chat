import React from "react";

function Header({ setisDark }) {
  const themeHandler = () => {
    setisDark((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="nav" style={{ justifyContent: "space-around" }}>
        <div
          className="logo"
          style={{
            color: "#fff",
          }}
        >
          Chatayser
        </div>

        <div className="right_nav">
          <input
            onClick={themeHandler}
            type="checkbox"
            id="themeSwitch"
            name="theme-switch"
            class="theme-switch__input"
          />
          <label for="themeSwitch" class="theme-switch__label">
            <span></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
