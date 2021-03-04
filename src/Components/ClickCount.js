import { useState } from "react";
function ClickCount() {
  const [count, setCount] = useState(0);
  const onClickHander = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={onClickHander}>
        Click me!
      </button>{" "}
      <br />
      <label>Click {count} time! </label>
    </div>
  );
}
export default ClickCount;
