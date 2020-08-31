import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import Cards from "./components/Cards";
import Main from "./components/Main";
import "./styles/index.css";
import "./styles/App.css";
import axios from "axios";
import dotenv from "dotenv";

function App() {
  dotenv.config();
  const key = process.env.REACT_APP_key;
  const [result, setResult] = useState({});
  const [size, setSize] = useState(window.innerWidth);
  let [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, [size]);

  useEffect(() => {
    const fetchData = async () => {
      if (!text.trim()) {
        await axios
          .get("https://covid-19-data.p.rapidapi.com/totals", {
            headers: {
              "content-type": "application/octet-stream",
              "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
              "x-rapidapi-key": key,
              useQueryString: true,
            },
            params: {
              format: "json",
            },
          })
          .then(async (response) => {
            setResult(await response.data[0]);
          });
      } else {
        await axios
          .get("https://covid-19-data.p.rapidapi.com/country", {
            headers: {
              "content-type": "application/octet-stream",
              "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
              "x-rapidapi-key": key,
              useQueryString: true,
            },
            params: {
              format: "json",
              name: `${text}`,
            },
          })
          .then(async (response) => {
            setResult(await response.data[0]);
            console.log(await response.data[0]);
            console.log(text);
          });
      }
    };
    fetchData();
  }, [key, text]);

  return (
    <div className='App container box-border min-w-full h-screen p-4 '>
      {size < 768 ? (
        <h1 className='font-bold leading-normal text-4xl text-center pt-64'>
          The mobile view for this project is not available. Please use a
          computer to view.
        </h1>
      ) : (
        <Container>
          {console.log(size)}
          <Main text={text} handleChange={handleChange}>
            <h2>
              Warning: If values do not display please check your spellings or
              type again
            </h2>
            <Cards {...result} country={text} />
          </Main>
        </Container>
      )}
    </div>
  );
}

export default App;
