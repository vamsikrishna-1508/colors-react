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
      <div
        style={{
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center"
        }}
      >
        <h1
          style={{
            fontFamily: "Bookman, URW Bookman L, serif",
            fontWeight: "bold"
          }}
        >
          Select Your Color
        </h1>
        <input
          className="form-control m-2 w-50 d-flex"
          onChange={handleChange}
        />
      </div>
      <div className="row" style={{ paddingLeft: "80px" }}>
        {colors.map((color, idx) => (
          <ColorCard key={idx} color={color} />
        ))}
      </div>
    </div>
  );
};

const ColorCard = ({ color }) => {
  const style = {
    fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
    fontWeight: "bold",
    fontSize: "large",
    width: "12rem",
    display: "flex",
    margin: "22px",
    paddingTop: "40px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
    backgroundColor: data[color],
    color: color === "Black" ? "#ffffff" : "Bslack",
    height: "25vh",
    border: "1px #000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer"
  };

  const handleClick = () => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      <Card style={style} onClick={handleClick}>
        <Card.Body>{color}</Card.Body>
      </Card>
    </div>
  );
};

export default Main;
