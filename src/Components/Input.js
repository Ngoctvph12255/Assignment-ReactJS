import React, { useState } from "react";

function Input(props) {
  const [fullName, setFullName] = useState("");
  function OnChangeHandler(event) {
    setFullName(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={OnChangeHandler} />
      <p>FullName: {fullName}</p>
    </div>
  );
}

export default Input;
