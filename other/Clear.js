import React from "react";

function Clear({ setHistory }) {
  return (
    <span
      style={{
        opacity: 0.65,
        margin: "10px 0",
        fontSize: ".75em",
        display: "inline-block",
        padding: 3,
        cursor: "pointer",
        backgroundColor: "white",
        borderRadius: 4,
        textTransform: "uppercase"
      }}
      onClick={() => setHistory([])}
    >
      Clear History
    </span>
  );
}

export default Clear;
