import React from "react"
import { Input } from "antd"
import {  Radio } from "antd"

import './themes.styles.css';


const Theme2 = ({normalStyle, setStyle})=>{
  
    const changeTheme = (key, value) => {
        //normalStyle = Style which appears at first without any selection
        //chosenStyles= Styles after choosing a theme
        var newStyle = { ...normalStyle };
        var joinStyle = Object.assign(newStyle, { [key]: value });
      //  setStyle = joinStyle;
      }
  return (
    <div>
            <div className="textInputFlex">
                <p className="w100">
                    Upper Text</p>
                    <p>
                        <Input
                        placeholder=" Upper Text"
                        onChange={event=>changeTheme("uppertext",event.target.value)}
                    />
                    
                </p>
            </div>

            <div className="textInputFlex">
                <p className="w100">
                    Bottom Text   </p>
                    <p>
                        <Input
                        placeholder=" Bottom Text"
                       onChange={event=>changeTheme("bottomtext",event.target.value)}
                        />
                 
                </p>
            </div>
     
      <div className="textInputFlex">
        <p className="w100">Back Color</p>
        <div>
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            onChange={value => {
              changeTheme("backColor", value.target.value)
            }}
          >
            <Radio.Button
              value="red"
              style={{ background: "red" }}
            ></Radio.Button>
            <Radio.Button
              value="blue"
              style={{ background: "blue" }}
            ></Radio.Button>
            <Radio.Button
              value="green"
              style={{ background: "green" }}
            ></Radio.Button>
            <Radio.Button
              value="orange"
              style={{ background: "orange" }}
            ></Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
}
export default Theme2;