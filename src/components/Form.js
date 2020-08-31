import React from 'react'

function Form({ text, handleChange }) {
  return (
    <form className='relative my-10' onSubmit={e => e.preventDefault()}>
      <input
        type='text'
        placeholder='Enter countrys name '
        value={text}
        onChange={handleChange}
        className='w-full h-16 p-8 border rounded-full bg-white outline-none text-black'
      />
      <button type='submit' className='absolute -ml-12 mt-4'>
        <i className='fas fa-long-arrow-alt-right text-teal-300 text-4xl' />
      </button>
    </form>

  )
}

export default Form
