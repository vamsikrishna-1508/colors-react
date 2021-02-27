import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { data } from "./utils";

const initialColors = Object.keys(data);

const Main = () => {
  const [colors, setColors] = useState(initialColors);

  const handleChange = (e) => {
    const value = e?.target?.value;
    const filteredColors = initialColors.filter(
      (color) => color.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setColors(filteredColors);
  };

  return (
    <div>
      <input className="form-control m-2 w-50 d-flex" onChange={handleChange} />
      <div className="row">
        {colors.map((color, idx) => (
          <ColorCard key={idx} color={color} />
        ))}
      </div>
    </div>
  );
};

const ColorCard = ({ color }) => {
  const style = {
    width: "12rem",
    display: "flex",
    margin: "22px",
    backgroundColor: data[color],
    color: color === "black" ? "#fff" : "black",
    height: "20vh",
    border: "1px solid #000",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  };

  const handleClick = () => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <Card style={style} onClick={handleClick}>
        <Card.Body>{color}</Card.Body>
      </Card>
    </>
  );
};

export default Main;
