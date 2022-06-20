import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GreenButton from "./GreenButton";
import RedButton from "./RedButton";
import YellowButton from "./YellowButton";

const OrderSummary = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("Maroon");
  const colorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h1>Order Confirmed</h1>
      <h2>My Favorite Color {color} !</h2>
      <div className="colors">
        <RedButton data={colorChange} />
        <YellowButton data={colorChange} />
        <GreenButton data={colorChange} />
      </div>
      <button onClick={() => navigate(-1)} style={{ fontSize: 20, float:"right", backgroundColor:"black", color:"white" }}>
        Go Back
      </button>
    </div>
  );
};

export default OrderSummary;
