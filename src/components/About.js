import React from "react";

function About() {
  return (
    <div className='container h-full mt-10'>
      <div className='row flex'>
        <div className='profile-pic col flex  m-auto p-8'>
          <span className='img w-24 bg-white mx-1 relative'></span>
          <span className='img w-24 bg-white mx-1 relative '></span>
          <span className='img w-24 bg-white mx-1 relative '></span>
        </div>
        <div className='col w-1/2 flex-col flex justify-center px-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, est porro voluptatibus mollitia dolores similique neque
            ea. Delectus recusandae quis totam quae, labore odio obcaecati
            quidem praesentium nihil atque quod?
          </p>
          <div className='contact flex justify-around items-center mt-10'>
            <span className='border rounded-full w-16 h-16 flex items-center justify-center text-gray-500 hover:bg-teal-400 hover:text-white transition duration-500 ease-linear'>
              <a
                href='mailto:pauleke95@outlook.com?subject=Hi there!&body=So, I just
          saw your personal website and...'
              >
                <i className='far fa-envelope fa-2x z-10'></i>
              </a>
            </span>
            <span className='border rounded-full w-16 h-16 flex items-center justify-center text-gray-500 hover:bg-teal-400 hover:text-white transition duration-500 ease-linear'>
              <a href='https://github.com/Paul-O-95'>
                <i className='fab fa-github fa-2x'></i>
              </a>
            </span>
            <span className='border rounded-full w-16 h-16 flex items-center justify-center text-gray-500 hover:bg-teal-400 hover:text-white transition duration-500 ease-linear'>
              <a href='https://twitter.com/dexterous_L'>
                <i className='fab fa-twitter fa-2x'></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
