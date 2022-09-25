import React from "react";
import { image } from "../../public/images/images";
export default function TechStack(props) {
  switch (props.props) {
    case "javascript":
      return (
        <>
          <div className=" bg-yellow-500 p-3 rounded-md flex items-center gap-2">
          <div className="w-12 h-12">
            {image.js}
            </div>
            <span className="text-black font-semibold font-mono">
              Javascript
            </span>
          </div>
        </>
      );
      break;
    case "nodejs":
      return (
        <>
          <div className=" bg-green-700 p-3 rounded-md flex items-center gap-2">
            <div className="w-12 h-12">
            {image.nodejs}  
            </div>
           
            <span className="text-black font-semibold font-mono">NodeJS</span>
          </div>
          
        </>
      );

      break;
    case "nextjs":
      return (
        <>
          <div className="bg-white p-3 rounded-md flex items-center gap-2">
          <div className="w-12 h-12">
            {image.nextjs}
            </div>
            <span className="text-black font-semibold font-mono">NextJS</span>
          </div>
        </>
      );
      break;
    case "reactjs":
      return (
        <>
          <div className="bg-black p-3 rounded-md flex items-center gap-2">
          <div className="w-12 h-12">
            {image.reactjs}
            </div>
            <span className="text-white font-semibold font-mono">ReactJS</span>
          </div>
        </>
      );
      break;

    default:
      break;
  }
}
  