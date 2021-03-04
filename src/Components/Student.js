import React from "react";

function Student(props) {
  const listResume = props.data.Resume.map(function (value, index) {
    console.log(value, index);
    return <li key={index}>{value}</li>;
  });

  const element = (
    <div className="MenuUlLi">
      <ul>
        Menu
        <li>Name: {props.data.Name}</li>
        <li> Birth Date: {props.data.birthDate}</li>
        <li> Address: {props.data.address}</li>
        {/* Cách 1 */}
        <li>
          {" "}
          Graduate: {props.data.graduate ? "Graduated" : "Not graduated"}
        </li>
        {/* Cách 2: dùng if else */}
        {/* <li> Graduate: {Graduation}</li> */}
        {/* Cách 3: Dùng toán tử 3 ngôi */}
        <li>
          {" "}
          Graduate:{" "}
          {props.data.graduate === true ? "Graduated" : "Not Graduated"}
        </li>
        <li>
          {" "}
          Resume:
          <ul>{listResume}</ul>
        </li>
      </ul>
    </div>
  );
  return element;
}
export default Student;
