import React, { useState } from "react";
import "./index.css";
const Index = () => {
  const data = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [flag, setflag] = useState(true);
  return (
    <div className="container">
      {flag && <div className="lhp">刘海平</div>}
      <div className="container-father">
        <div className="demoStick" >
          <h1 className="nav" style={{ top:flag ? "22rem" : "0" }}>头部</h1>
          <ul className="list" style={{ marginTop: flag ? "22rem" : "0"}}>
            {data.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
