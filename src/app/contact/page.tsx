'use client'
import React, {FormEvent, useState} from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'

function page() {
  
const [email, setEmail] = useState('');
const [message, setMessage] = useState('')

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("Submitted:", {email, message})
}
  return (
     <div className="w-auto rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased h-screen overflow-hidden">
      <div className="max-w-2xl m-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
           We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
         <div>
        <form onSubmit= {handleSubmit} className="relative z-10 flex flex-col max-w-lg mx-auto mt-4">
        <input
          type="email"
          value={email}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 py-3 px-2 required"
        />
        <textarea 
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        placeholder='Your message'
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 py-3 px-2 required"
            rows={5}
            required
        ></textarea>

        <button 
        type='submit'
        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 my-2">
            Send Message
          
        </button>
        </form>
       </div>
      </div>
      
   
        <BackgroundBeams />
    </div>
  )
}


export default page