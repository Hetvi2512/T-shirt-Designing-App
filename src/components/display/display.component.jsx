import React, { Component, useState } from 'react';
import {TwitterPicker} from 'react-color'
import collar from "./collar.png"
import shadow from "./shadow.png"
import outerr from "./outerr.png"
import ThemeOne from './onChangeTheme/themeone';
import ThemeTwo from './onChangeTheme/themetwo';
import ThemeThree from './onChangeTheme/themethree';
import ThemeFour from './onChangeTheme/themefour';


const Display=({ themeNumber, theme1Style,
  theme2Style,
  theme3Style,
  theme4Style,
  setTheme1Style,
  setTheme2Style,
  setTheme3Style,
  setTheme4Style})=>{
  const [color, setColour] = useState("#000EE0");
 
   return(
        <div>
         <div
              style={{
                height: 300,
                width: 300,
                backgroundColor:color,
                position: "relative",
                }}
            >   
            { themeNumber === 1 && (
              <ThemeOne customStyle={theme1Style} setStyle={setTheme1Style} />
              )}
              {themeNumber === 2 && (
            <ThemeTwo customStyle={theme2Style} setStyle={setTheme2Style} />
          )}
          {themeNumber === 3 && (
            <ThemeThree customStyle={theme3Style} setStyle={setTheme3Style} />
          )}
          {themeNumber === 4 && (
            <ThemeFour customStyle={theme4Style} setStyle={setTheme4Style} />
          )}
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
         <TwitterPicker 
           colors={[ "#550000",
           "#0CAC68",
           "#FFF040",
           "#0019A3",
           "#A24A79",
           "#9F9F9F",
           "#313131",
            "#8ED1FC",
           "#ABB8C3",
           "#E91E63"]}
           onChange={(color)=>{setColour(color.hex)}}
           
           
           />
          </div>
 
       
        )
    
}


export default Display;