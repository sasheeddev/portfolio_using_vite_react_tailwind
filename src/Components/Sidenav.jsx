import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false); // Use a more descriptive name

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidenav ">
      <IoMenu onClick={toggleSidenav} className="menu-icon absolute top-4 right-4 z-[99] md:hidden" />
      {isOpen && (
        <div className="fixed z-20 flex flex-col items-center justify-center w-full h-screen sidenav-content bg-white/90 md:hidden">
          <a
            onClick={toggleSidenav}
            href="#Main"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>

          <a 
            onClick={toggleSidenav}
            href="#About"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About Me</span>
          </a>

          <a
            onClick={toggleSidenav}  
            href=" #Work"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>

          <a 
            onClick={toggleSidenav}
            href=" #projects "
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a 
            onClick={toggleSidenav}
            href="#Contact"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          {/* Add more sidenav items here */}
        </div>
      )
      }


      <div className='md:block hidden top-[25%] z-10 fixed'>
        <div className='flex flex-col '>
          <a  href='#main'  className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 '>
            <AiOutlineHome size={20} />
          </a>

          <a href='#About'  className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 '>
            <BsPerson size={20} />
          </a>

          <a href='#Work'  className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 '>
            <GrProjects size={20} />
          </a>

          <a href='#projects'  className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 '>
            <AiOutlineProject size={20} />
          </a>

          <a href='#Contact'  className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 '>
            <AiOutlineMail  size={20} />
          </a>

        </div>
       


      </div>
    </div>
  );
};

export default Sidenav;
