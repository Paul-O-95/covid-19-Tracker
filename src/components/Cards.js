import React from "react";

function Cards({ confirmed, recovered, critical, deaths, country }) {
  const total = confirmed + recovered + critical + deaths;
  return (
    <div className='card  w-2/3 m-auto h-full  text-black  relative flex justify-center items-center rounded-lg border border-transparent'>
      <div className='back w-full h-full text-center flex justify-center items-center absolute transition-transform duration-700 bg-white rounded-lg border border-transparent'>
        <h1 className='text-6xl font-bold italic font-serif text-white'>
          {country || "World"}
        </h1>
      </div>
      <div className='front w-full h-full text-center flex absolute transition-transform duration-700 bg-white py-10 px-6 rounded-lg border border-transparent'>
        <div className='info w-full'>
          <div className='wrapper w-full h-20 flex flex-row items-center mt-2'>
            <div className='info-header m-2 w-16 h-16 border border-black flex items-center justify-center rounded-lg'>
              Total
            </div>
            <div className='info-content m-2 w-3/4 h-16 flex justify-center items-center'>
              {total || 0}
            </div>
          </div>
          <div className='wrapper w-full h-20 flex flex-row items-center mt-2'>
            <div className='info-header m-2 w-16 h-16 border flex items-center justify-center bg-green-400 text-white rounded-lg'>
              Active
            </div>
            <div className='info-content m-2 w-3/4 h-16 flex justify-center items-center'>
              {confirmed || 0}
            </div>
          </div>
          <div className='wrapper w-full h-20 flex flex-row items-center mt-2'>
            <div className='info-header m-2 w-16 h-16 border flex items-center justify-center bg-pink-600 text-white rounded-lg'>
              Critical
            </div>
            <div className='info-content m-2 w-3/4 h-16 flex justify-center items-center'>
              {critical || 0}
            </div>
          </div>
          <div className='wrapper w-full h-20 flex flex-row items-center mt-2'>
            <div className='info-header m-2 w-16 h-16 border flex items-center justify-center text-sm font-bold bg-blue-500 text-white rounded-lg'>
              Recovered
            </div>
            <div className='info-content m-2 w-3/4 h-16 flex justify-center items-center'>
              {recovered || 0}
            </div>
          </div>
          <div className='wrapper w-full h-20 flex flex-row items-center mt-2'>
            <div className='info-header m-2 w-16 h-16 border flex items-center justify-center bg-red-700 text-white rounded-lg'>
              Death
            </div>
            <div className='info-content m-2 w-3/4 h-16 flex justify-center items-center'>
              {deaths || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
