import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import React,{useState,useEffect} from "react";

function HomePage(){
    const [data,setData]=useState({about_me:"",my_work:"",contact:""})
 useEffect(()=>{
    setData({contact:document.getElementById("contact"),about_me:document.getElementById("about_me"),my_work:document.getElementById('my-work')});
    
 },[])
    return(<>
   {console.log(data)}
    <Navbar props={data}/>   
    <Home props={data}/>
    
    </>)

}
export {HomePage};