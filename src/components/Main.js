import React from "react";
import Form from "./Form";

function Main({ children, text, handleChange }) {
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
          <Form text={text} handleChange={handleChange}></Form>
        </div>
        <div className='col w-1/2 ml-2 text-center'>{children}</div>
      </div>
    </div>
  );
}

export default Main;
