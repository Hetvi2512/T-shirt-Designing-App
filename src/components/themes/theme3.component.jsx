import React, {useState} from "react"
import { Input } from "antd"
import { Select, Radio } from "antd"



const Theme3 = ({normalStyle, setStyle})=>{

    const changeTheme = (key, value) => {
        //normalStyle = Style which appears at first without any selection
        //chosenStyles= Styles after choosing a theme
        var newStyle = { ...normalStyle };
        var joinStyle = Object.assign(newStyle, { [key]: value });
       setStyle(joinStyle);
      }
  return (
    <div>
      <div className="textInputFlex">
        <p className="w100">  Logo</p>
        <p>
          <Input
            placeholder="Insert Image URL"
            onChange={event => changeTheme("rightLogo", event.target.value)}
          />
        </p>
      </div>
     
      
      
    </div>
    
  )
}
export default Theme3;