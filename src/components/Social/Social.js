import React from "react";
import { image } from "../../public/images/images";
export default function Social(props) {
    switch (props.props) {
      case "github":
        return (
          <>
            <div className="hover:fill-cyan transition ease-out duration-500 hover:-translate-y-3">
              {image.github}
              
            </div>
          </>
        );
        break;
      case "email":
        return (
          <>
            <div className="hover:fill-cyan transition ease-out duration-500 hover:-translate-y-3">
              {image.email}
              
            </div>
            
          </>
        );
  
        break;
      case "linkedin":
        return (
          <>
            <div className="hover:fill-cyan transition ease-out duration-500 hover:-translate-y-3">
              {image.linkedin}
             
            </div>
          </>
        );
        break;
      case "instagram":
        return (
          <>
            <div className="hover:fill-cyan transition ease-out duration-500 hover:-translate-y-3">
              {image.instagram}
      
            </div>
          </>
        );
        break;
        case "whatsapp":
            return (
              <>
                <div className="hover:fill-cyan transition ease-out duration-500 hover:-translate-y-3">
                  {image.whatsapp}
          
                </div>
              </>
            );
            break;
  
      default:
        break;
    }
  }