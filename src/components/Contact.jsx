import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-900  font-bold flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/da9e7ea9-6772-4d83-bce7-1f0d4e4278ef" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 inline border-pink-600"><span className="text-gray-300">Contact</span></p>
                    <p className="text-gray-300 py-4">Submit the form below or shoot me an email - WildingPipes@gmail.com</p>
                </div>
                    <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
                    <input className="bg-[#ccd6f6] p-2 my-4" type="email" placeholder="Email" name="email" />
                    <textarea className="bg-[#ccd6f6]" name="message" rows="10" placeholder="Message"></textarea>
                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    );
}

export default Contact;