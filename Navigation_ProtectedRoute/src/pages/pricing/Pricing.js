import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Pricing() {
  const location = useLocation();

  return (
    <div>
      Show Pricing
      <Outlet />
      <nav style={{ display: "flex", marginLeft: "30px", paddingLeft: "30px", justifyContent: "space-around", alignItems: "center" }}>
        <Link to={location.pathname + "/freePricing"}>Free</Link>
        <Link to={location.pathname + "/premiumPricing"}>Premium</Link>
        <Link to={location.pathname + "/freemium"}>Freemium</Link>
      </nav>
    </div >
  );
}

export default Pricing;
