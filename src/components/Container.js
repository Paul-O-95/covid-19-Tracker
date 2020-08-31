import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";

function Container({ children }) {
  return (
    <Router>
      <div className='container   box-border w-full mx-auto h-full text-white'>
        <nav className='w-full py-6' id='content'>
          <span className='font-black text-3xl italic'>
            <Link to='/' className='hover:text-teal-300'>
              Covid-19 Tracker{" "}
            </Link>
          </span>
          <span className='ml-10 font-serif font-medium text-1xl italic'>
            <Link to='/about' className='hover:text-teal-300'>
              About Me
            </Link>
          </span>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>{children}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Container;
