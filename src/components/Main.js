import React from "react";
import Cards from "./Cards";

function Main({ data }) {
  return (
    <div className='content mt-12'>
      <div className='row  flex '>
        <div className='col w-1/2  mr-2 mt-32'>
          <h2 className='font-bold leading-normal text-4xl mb-16 text-center'>
            What is Covid-19? A short definition <br />
            <i className='fas fa-long-arrow-alt-down' />
          </h2>
          <p className='font-thin mb-16'>
            Acoording to{" "}
            <abbr title='World Health Organization' className='text-teal-400'>
              WHO
            </abbr>{" "}
            :{" "}
            <q cite='https://www.who.int/health-topics/coronavirus#tab=tab_1'>
              {" "}
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus.
            </q>
            {"            "}
            <a
              href='https://www.who.int/health-topics/coronavirus#tab=tab_1'
              target='_blank'
              rel='noreferrer noopener'
              className='bg-teal-400 tex-white font-extrabold rounded-sm w-64 px-2 hover:bg-teal-600'
            >
              Learn More...
            </a>
          </p>
          <form action='' className='relative my-10'>
            <input
              type='text'
              placeholder='Enter countrys name '
              className='w-full h-16 p-8 border rounded-full bg-white outline-none text-black'
            />
            <button type='submit' className='absolute -ml-12 mt-4'>
              <i className='fas fa-long-arrow-alt-right text-teal-300 text-4xl' />
            </button>
          </form>
        </div>
        <div className='col w-1/2 ml-2 text-center'>
          <Cards
            confirmed={data.confirmed}
            recovered={data.recovered}
            critical={data.critical}
            deaths={data.deaths}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
