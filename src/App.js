import React from "react";
import Container from "./components/Container";
import "./styles/index.css";
import "./styles/App.css";
import axios from "axios";

function App() {
  let getResult = async () => {
    let res = await axios.get("https://covid-19-data.p.rapidapi.com/totals", {
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "",
      },
      params: {
        format: "undefined",
      },
    });
    // let result = res.data;
    let { confirmed, recovered, critical, deaths } = res.data[0];
    console.log(res);
    console.log(confirmed, recovered, critical, deaths);
    return { confirmed, recovered, critical, deaths };
  };
  getResult();

  return (
    <div className='App container box-border min-w-full min-h-screen p-4 '>
      <Container res={() => getResult} />
    </div>
  );
}

export default App;
