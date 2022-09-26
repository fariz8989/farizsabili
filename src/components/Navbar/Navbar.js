import React from "react";
import { Link } from "react-router-dom";
import image from './images/F.svg'
function Navbar(props) {
  console.log(props)
  function goTo(ref){
    window.scrollTo({
      top:ref.offsetTop,
      left:0,
      behavior:'smooth' 
    })
  }
  return (
    <>
      <div className="flex sticky bg-navy justify-between px-8 py-4">
        <Link to={"/"}>
          <div id="logo" className="flex items-center">
            <img className=" ml-8 w-14"src={image}/>
           
          </div>
        </Link>
        <div id="nav" className="hidden md:flex items-center justify-evenly">
          <Link className="text-gray-400 font-mono hover:text-cyan mx-8 font-bold hover:text-red1 transition ease-out duration-500 text-lg"to={"/"}>
            <span>Home</span>
          </Link>
          
            <span onClick={()=>{
              goTo(props.props.about_me)
            }}
            className="text-gray-400 hover:cursor-pointer font-mono hover:text-cyan mx-8 font-bold hover:text-red1 transition ease-out duration-500 text-lg">About Me</span>

 
            <span onClick={()=>{
              goTo(props.props.my_work)
            }} 
            className="text-gray-400 font-mono hover:cursor-pointer hover:text-cyan mx-8 font-bold hover:text-red1 transition ease-out duration-500 text-lg">My Work</span>
   
          <Link className="text-gray-400 font-mono hover:text-cyan mx-8 font-bold hover:text-red1 transition ease-out duration-500 text-lg"to={"/"}>
            <span 
            onClick={()=>{
              goTo(props.props.contact)
            }} 
            >Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
