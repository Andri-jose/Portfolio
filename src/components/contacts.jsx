import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contacts() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h9274s7', 'template_stcxdyv', form.current, {
        publicKey: 'kmIOVgqjFaXYmSZGp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Clear the form
          form.current.reset();
          setValue({
            name: '',
            email: '',
            telephone: '',
            direction: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [value, setValue] = useState({
    name: '',
    email: '',
    telephone: '',
    direction: '',
    subject: '',
    message: ''
  });

  const handleChanges = (e) => {
    setValue({
      ...value,
      [e.target.name]: [e.target.value]
    });
  }

 

  return (
    <>
      <footer id="contacts" className="min-h-screen py-40 gap-4 grid md:grid-cols-2">
        <div className="flex flex-col gap-8 justify-start">
          <h2 className="text-4xl text-[#4FA1C6] mb-5">Contact</h2>
          <p className="">Argentina, Capital Federal</p>
          <p>andr-y2008@hotmail.com</p>
          <p>11-70444287</p>

        </div>
        <div className="flex justify-center items-start mt-15 md:mt-0">
          <form ref={form} className="md:grid md:grid-cols-2 gap-4 md:grid-rows-4 flex flex-col max-w-lg md:w-full" 
          onSubmit={sendEmail}>
            <label htmlFor="name" className="col-start-1 flex justify-start ">Name</label>
            <input type="text" id="name" name="name" className="col-start-1 " placeholder="Enter you name" required 
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="email" className="row-start-1 col-start-2 flex justify-start sm:items-center">Email</label>
            <input type="email" id="email" name="email" className="row-start-2 col-start-2" placeholder="Enter you email" required 
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="telephone" className="row-start-3 col-start-1 flex justify-start">Telephone</label>
            <input type="tel" id="telephone" name="telephone" className="col-start-1" placeholder="Enter your phone number" 
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="direction" className="row-start-3 col-start-2 flex justify-start">Direction</label>
            <input type="text" id="direction" name="direction" className="col-start-2" placeholder="Enter you address" 
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="subject" className="row-start-5 col-span-2 flex justify-start">Subject</label>
            <input type="text" id="subject" name="subject" className="row-start-6 col-span-2" placeholder="Enter the subject" required 
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="message" className="row-start-7 col-span-2 flex justify-start">Message</label>
            <textarea id="message" name="message" className="row-start-8 col-span-2" placeholder="Enter you message here..." required 
            onChange={(e) => handleChanges(e)}/>

            <input type="submit" value="Submit" className="row-start-9 col-span-2 bg-sky-500 hover:bg-sky-700 text-white hover:text-black font-bold py-3 cursor-pointer transition-colors duration-300 ease-in-out" />
          </form>
        </div>
      </footer>

    </>
  );
}

export default Contacts;

