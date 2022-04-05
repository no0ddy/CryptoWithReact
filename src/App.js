import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Heading from "./component/Heading/Heading";
import Search from "./component/Search/Search";
import Display from "./component/Display/Display";

const App = () => {
  const [data, setData] = useState([]);
  const [srdata, setSrdata] = useState([]);

  const coins = async function () {
    return await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
  };

  useEffect(() => {
    coins()
      .then((resp) => {
        return setData(resp.data), setSrdata(resp.data);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log(srdata);

  const handleSearch = (e) => {
    // console.log(e);
    const newData = srdata.filter((ele) =>
      // console.log(ele.name.toLowerCase());
      ele.name.toLowerCase().includes(e.toLowerCase())
    );
    console.log(newData);
    setData(newData);
  };
  return (
    <div className="main">
      <Heading />
      <Search handleSearch={handleSearch} />
      <Display data={data} />
    </div>
  );
};

export default App;
