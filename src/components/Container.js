import React from "react";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";

function Container({ res }) {
  return (
    <Router>
      <div className='container   box-border w-3/4 mx-auto min-h-screen text-white'>
        <nav className='w-full py-6' id='content'>
          <span className='font-black text-3xl italic'>
            <Link to='/' className='hover:text-teal-300'>
              Covid-19Tracker
            </Link>
          </span>
          <span className='ml-10 font-serif font-medium text-1xl italic'>
            <a href='/about' className='hover:text-teal-300'>
              About Me
            </a>
          </span>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Main data={res} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Container;
