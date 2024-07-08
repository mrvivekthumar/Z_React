import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const data = location.state;

  console.log(data);

  return <div>Watch About Effect In console</div>;
}

export default About;
