import { useState } from "react";
import { FaBars } from "react-icons/fa"; import { RxCross2 } from "react-icons/rx";

const NavBar = () => {

    const [ open, setOpen] = useState(false);
    const navs = [
                {
                  "name": "Home",
                  "url": "/home"
                },
                {
                  "name": "Plan",
                  "url": "/plan"
                },
                {
                  "name": "Progress",
                  "url": "/progress"
                },
                {
                  "name": "Contact",
                  "url": "/contact"
                }
    ]

    
    return (
        <div className=" mx-[2rem] pt-[2rem] mb-[1rem]">

    <div className=" flex justify-between md:justify-around items-center">

    
    <div>
            <h1 className=" font-bold text-[2rem] text-cyan-900">FitPlanner</h1>
    </div>

    <div className="md:hidden" onClick={() => setOpen(!open)}> 
    {
        open ? <RxCross2 size={30} /> : <FaBars size={30} />
    } 
    </div>

    <div className=" hidden md:flex justify-between  gap-4">
        {
            navs.map( (item , index) => (
                <div key={index}>
                <ul>
                    <a className=" hover:text-cyan-500 font-semibold" href={item.url}>{item.name}</a>
                </ul>
                </div>
            ))
        }
    </div> 
        
    <ul className={`z-50 md:hidden flex flex-col items-center bg-slate-500 p-4 text-white font-extrabold fixed top-[4rem] left-0 w-[50%] transition-transform duration-500 ${open ? 'translate-y-4' : '-translate-y-[40rem]'}`}> 
    {
        navs.map((item,index) => ( 
            <li key={index} className="my-2"> 
            <a className="hover:text-cyan-300" href={item.url}> {item.name} </a> 
            </li> 
            ))
    }

    </ul>


    <div className=" hidden md:block">
        <button className=" bg-cyan-900 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded">Contact</button>
        </div>

    </div>

        </div>
    );
};

export default NavBar;