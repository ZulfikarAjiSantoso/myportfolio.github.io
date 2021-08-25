import React,{useState} from 'react'

const ContactForm = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('')
    
    return (
        <div className="w-full mt-4">
            <div className="w-full mr-2">
                <label htmlFor="name"className="text-xl text-gray-300 font-mono"> 
                    Your name
                    <input
                    type="text" 
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName (e.target.value)}
                    className="w-full text-base p-3 md:pr-52 outline-none border-none rounded-xl mt-1 "
                    style={{
                        background:" #1a1a1a"
                    }}
                    >
                    </input>
                </label>
            </div>
            <div className="w-full mr-2 mt-3">
                <label htmlFor="email" className="text-xl text-gray-300  font-mono"> 
                    Your email
                    <input type="email" 
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail (e.target.value)}
                    className="w-full text-base p-3 md:pr-52   outline-none border-none rounded-xl mt-1 md:mt-3"
                    style={{
                        background:" #1a1a1a"
                    }}>
                    </input>
                </label>
            </div>
            <div className="w-full mr-2 mt-3">
                <label htmlFor="message" className="text-xl text-gray-300  font-mono"> 
                    Your message
                    <textarea type="text" 
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-base p-3 pb-5 md:pb-20 md:pr-52   outline-none border-none rounded-xl mt-1 md:mt-3"
                    style={{
                        background:" #1a1a1a"
                    }}>
                    </textarea>
                </label>
            </div>
            <button type="submit" className="bg-gray-300 text-lg px-8 py-1 mt-4 rounded-3xl font-semibold text-black outline-none border-none cursor-pointer 
                hover:bg-green-300  hover:text-black
            ">Kirim</button>
        </div>
    )
}

export default ContactForm
