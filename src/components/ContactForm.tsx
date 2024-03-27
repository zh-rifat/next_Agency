import React from 'react'

type Props = {}

const ContacthtmlForm = (props: Props) => {
  return (
    <div className='flex-1 max-w-[600px]'>
      <form className="flex flex-col space-y-5">
            <div>
              <label htmlFor="" className="text-lg">Your Name</label>
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-indigo-600 text-lg"/>
            </div>
            <div>
              <label htmlFor="" className="text-lg">Your Email</label>
              <input type="email" placeholder="Email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-indigo-600 text-lg"/>
            </div>
            <div>
              <label htmlFor="" className="text-lg">Your Message</label>
              <textarea placeholder="Message" rows={3} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-indigo-600 text-lg"></textarea>
            </div>
            <button className="block bg-indigo-900 text-white font-bold rounded-lg px-6 py-3 uppercase text-lg w-full">Send Message</button>
          </form>
    </div>
  )
}

export default ContacthtmlForm;
