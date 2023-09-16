import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form
        method='POST' // It should be 'POST', not 'Post'
        action='https://getform.io/f/a689efe6-d5e4-471d-a339-47c235f04ecf'
        className='flex flex-col max-w-[600px] w-full'
      >
        
        <div className='p-8'> {/* Corrected class name from 'pd-8' to 'p-8' */}
          <p className='text-4xl font-bold inline border-b-4 border-[#2fadc6] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'> {/* Removed the comment from here */}
            Submit the form below or shoot me an email - <i>nikolavlavce@gmail.com</i>
          </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email" />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'></textarea>
        <button
          type='submit' // Added the 'type' attribute to make it a submit button
          className='text-white border-2 hover:bg-[#2fadc6] hover:border-[#2fadc6] px-2 py-3 my-8 mx-auto flex items-center'
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;