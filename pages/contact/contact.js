import { useState } from 'react'

export default function Contact() {
    const [data, setData] = useState({
        name: 'Shah',
        email: 'iamshahhafiz@gmail.com',
        message: 'Testing'
    })
    
    const submitRequest = async (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center relative mt-10">
            <div className="font-black text-2xl mt-5">GOT A QUESTION?</div>
            <div className="w-full md:w-2/3 lg:w-1/3 text-center my-2 text-gray-500 text-lg">I’m  available for a job or any freelance opportunities. Looking forward to hearing from you! </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="p-5 flex items-center"> <img src="gmail.svg" className="w-5 mr-2" alt="" /> iamshahhafiz@gmail.com</div>
                <div className="p-5 flex items-center"> <img src="whatsapp.svg" className="w-5 mr-2" alt="" /> +60 13456 7473</div>
            </div>
            
            {/* email form */}
            {/* <form onSubmit={submitRequest} className="w-full md:w-2/3 lg:w-1/3 bg-gray-100 p-10 rounded-lg shadow-lg">
                <div className="mb-5">
                    <div className="text-gray-500">Name <span className="text-red-500">&#42;</span></div>
                    <input type="text"  value={data.name} onChange={e => setData({...data, name: e.target.value})} className="w-full p-3 rounded-lg shadow-sm outline-none border focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <div className="text-gray-500">Email <span className="text-red-500">&#42;</span></div>
                    <input type="text"  value={data.email} onChange={e => setData({...data, email: e.target.value})} className="w-full p-3 rounded-lg shadow-sm outline-none border focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <div className="text-gray-500">Message <span className="text-red-500">&#42;</span></div>
                    <input type="text" value={data.message} onChange={e => setData({...data, message: e.target.value})} className="w-full p-3 rounded-lg shadow-sm outline-none border focus:border-blue-500" />
                </div>
                <div className="flex justify-center ">
                    <input type="submit"  name="message" value="Send Message" className="outline-none bg-green-300 hover:bg-green-400  py-3 px-10 rounded-full cursor-pointer" />
                </div>
            </form> */}
            <div className="absolute bottom-0 ">Copyright &#169; <u>Shah Al-Hafiz</u> (2020)</div>
        </div>
    )
}