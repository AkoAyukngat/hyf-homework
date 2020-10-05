import React, { useState, useEffect } from "react";
import "./App.css";
import HeaderTimer from "./components/HeaderTimer";
import FetchedData from "./components/FetchedData";

const fetchUrl =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(fetchUrl).then((response) => {
        return response.json();
      });
      console.log("results", result);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <HeaderTimer />
      {data.length === 0 ? <p>Loading...</p> : <FetchedData todos={data} />}
    </div>
  );
}

export default App;
