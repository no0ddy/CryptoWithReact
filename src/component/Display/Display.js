import React from "react";
import "./Display.css";

const Display = (prop) => {
  // console.log(prop.data);

  return prop.data.map((ele) => {
    return (
      <div className="container" key={ele.id}>
        <div className="outerlogo">
          <img className="logo" src={ele.image} />
          <div className="coinname">{ele.name}</div>
        </div>
        <div>{ele.symbol.toUpperCase()}</div>
        <div>{`$ ${ele.current_price.toLocaleString("en-US")}`}</div>
        <div>{ele.total_volume.toLocaleString("en-US")}</div>
        <div
          className={`${ele.price_change_percentage_24h > 0 ? "up" : "down"}`}
        >
          {ele.price_change_percentage_24h.toFixed(2)}%{" "}
          {ele.price_change_percentage_24h > 0 ? "👍" : "👎"}
        </div>
        <div>Mkt Cap: ${ele.market_cap.toLocaleString("en-US")}</div>
      </div>
    );
  });
};

export default Display;
