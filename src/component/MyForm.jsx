import React from 'react';

const MyForm = () => {
  return (
    <>
      <form className='mt-4'>
      <input type="text" name='name' placeholder='Name' className='p-1 px-4 w-full rounded-md border border-gray-400 mb-3 outline-none' />
      <input type="email" name='email' placeholder='Email Address' className='p-1 px-4 w-full rounded-md border border-gray-400 mb-4 outline-none' />
      <input type="text" name='subject' placeholder='Subject'  className='p-1 px-4 w-full rounded-md border border-gray-400 mb-4 outline-none'/>
      <textarea name="message" placeholder='Message..' className='p-1 px-4 w-full rounded-md border border-gray-400 mb-4 outline-none' rows="2"></textarea>
      <input type="submit" value="Submit" className='text-white  bg-[#d00a32] px-8 text-xl rounded-md py-1
                           border-4 border-[#d00a32] hover:bg-transparent hover:text-[#d00a32]' />
      </form>
    </>
  )
}

export default MyForm
