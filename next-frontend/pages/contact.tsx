import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { getContact } from "../lib/api";
import { ContactType } from "../types/singles";

const Contact: NextPage<ContactType> = (about) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault();
    let data = {
      name,
      email,
      subject,
      message
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    });
  }

  return (
    <div className="flex justify-center">
      <div className="w-9/12 flex flex-col md:flex-row mt-6">
        <div className="md:w-1/2 flex flex-col justify-around p-5">
          <h1 className="text-4xl font-serif font-thin mb-4">Contact</h1>
          <div className="text-lg leading-8 mb-6 font-thin" dangerouslySetInnerHTML={{ __html: about.text }}></div>
          <Image alt="Post cover image" src={about.image} height={600} width={1380}></Image>
        </div>
        <div className="md:w-1/2 p-5">
          <form className="flex flex-col space-y-3 mt-11" action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input value={name} onChange={e => {setName(e.currentTarget.value);}} className="mb-4 px-3 py-1.5 bg-gray-900 border border-solid focus:outline-none border-gray-400 focus:border-[#EB5A3E]" type="text" name="name" required/>
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={e => {setEmail(e.currentTarget.value);}} className="mb-4 px-3 py-1.5 bg-gray-900 border border-solid focus:outline-none border-gray-400 focus:border-[#EB5A3E]" type="email" name="email" required/>
            <label htmlFor="subject">Subject:</label>
            <input value={subject} onChange={e => {setSubject(e.currentTarget.value);}} className="mb-4 px-3 py-1.5 bg-gray-900 border border-solid focus:outline-none border-gray-400 focus:border-[#EB5A3E]" type="text" name="subject" required/>
            <label htmlFor="messsage">Message:</label>
            <textarea value={message} onChange={e => {setMessage(e.currentTarget.value);}} rows={7} className="resize-none px-3 py-1.5 bg-gray-900 border border-solid focus:outline-none focus:border-[#EB5A3E]" name="messsage" required/>
            <button onClick={(e)=>{handleSubmit(e)}} type="submit" className="hover:bg-[#EB5A3E] border-none bg-[#333] self-baseline px-7 py-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {

  const contactData = await getContact();
  return {
    props: {
      ...contactData,
    },
  }
};


export default Contact;