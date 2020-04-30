import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import "./styles/index.css";
import "./styles/App.css";
import axios from "axios";

function App() {
  const [result, setResult] = useState({});

  useEffect(() => {
    async function fetchData() {
      // You can await here
      axios
        .get("https://covid-19-data.p.rapidapi.com/totals", {
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":
              "a6fc0a08femshec59c1a0bc330d1p1feee7jsn3e4030a358da",
          },
          params: {
            format: "undefined",
          },
        })
        .then((response) => {
          setResult(response.data[0]);
        });
    }
    fetchData();
  }, []);

  return (
    <div className='App container box-border min-w-full min-h-screen p-4 '>
      <Container res={result} />
    </div>
  );
}

export default App;
