 import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenu = () => {
    const[Shownav, setShownav] = useState(false);
    return (
        <div className="fixed z-100 top-0 left-0 w-full p-6  " style={{
            background:"#262626"
             }}>
            <div className="w-full text-center block md:hidden" onClick={() => setShownav(!Shownav)} role="button"  onKeyDown={() => setShownav(!Shownav)}
                tabIndex={0}>
                  <MdMenu/>
            </div>
            {/* md:hidden max-w-screen-xl -top-0 transition duration-300 bg-yellow-500  w-full max-w-7xl rounded-full absolute right-4 " : " max-w-screen-xl -top-0 transition duration-300  w-full max-w-7xl rounded-full absolute right-4 */}
                <ul style={{
                   
                    width: "90%",
                    margin: "0 auto",
                    textAlign: "center"
                }} className={!Shownav ?" -top-0 transition duration-300 bg-yellow py-2 max-w-screen-sm w-10/12 absolute right-4 md:hidden " :" -top-0 transition duration-300 bg-yellow py-2 max-w-screen-sm w-10/12 absolute right-4 "}>
                    <div className="block w-12 ml-auto cursor-pointer md:hidden" onClick={() => setShownav(!Shownav)}
                     role="button"
                    onKeyDown={() => setShownav(!Shownav)}
                    tabIndex={0}> 
                    <MdClose />
                    </div>
                    <li className=" text-white inline-block rounded-5xl transition duration-300 ease hover:text-green-300 ">
                        <Link className="inline-block font-mono py-1 px-2  text-2xl outline-none">Home</Link>
                    </li>
                    <li className=" text-white  inline-block rounded-5xl transition duration-300 ease hover:text-green-300 ">
                        <Link className="inline-block font-mono py-1 px-2  text-2xl outline-none">About</Link>
                    </li>
                    <li className=" text-white  inline-block rounded-5xl transition duration-300 ease hover:text-green-300 ">
                        <Link className="inline-block font-mono py-1 px-2  text-2xl outline-none">Project</Link>
                    </li>
                    <li className=" text-white  inline-block rounded-5xl transition duration-300 ease hover:text-green-300 ">
                        <Link className="inline-block font-mono py-1 px-2  text-2xl outline-none">Contact</Link>
                    </li>
                 

                </ul>

        </div>
    )
}

export default NavMenu
