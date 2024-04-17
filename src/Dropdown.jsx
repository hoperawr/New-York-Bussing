import { React, useState } from "react";

const Dropdown = (props) => {
  const [display, setdisplay] = useState(false);
  return (
    <button
      onClick={() => setdisplay(!display)}
      style={{ position: "relative", zIndex: 5 }}
    >
      <div>{props.header}</div>
      {display ? (
        <ul>
          {props.data.map(function (x) {
            return <li>{x}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </button>
  );
};

export default Dropdown;
