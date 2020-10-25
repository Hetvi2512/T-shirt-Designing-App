import React, { Component } from 'react';
import {TwitterPicker} from 'react-color'
import collar from "./collar.png"
import shadow from "./shadow.png"
import outerr from "./outerr.png"
class Display extends Component{
    render(){
        return(

     <div>
         <div
              style={{
                height: 300,
                width: 300,
                backgroundColor:"blue",
                position: "relative",
                }}
            >   
             <img
                className="img-responsive"
              src={collar} 
                alt="tshirt"
                style={{ position: "absolute", height: "100%", opacity: 0.29 }}
              />
              <img
                 className="img-responsive"
                src={shadow}
                alt="collar"
                style={{ position: "absolute", height: "100%", opacity: 0.33 }}
              />
              <img
               className="img-responsive"
                src={outerr}
                alt="outter"
                style={{ position: "absolute", height: "100%" }}
              />
             
          </div>
          <div className="memeText text-center">
              <div className="upperText">

              </div>

          </div>
          </div>
 
       
        )
    }
}
export default Display;