import React from "react"
import { Input } from "antd"
import {  Radio } from "antd"



const Theme4 = ({normalStyle, setStyle,hi})=>{
    const changeTheme = (key, value) => {
        //normalStyle = Style which appears at first without any selection
        //chosenStyles= Styles after choosing a theme
        var newStyle = { ...normalStyle };
        var joinStyle = Object.assign(newStyle, { [key]: value });
        setStyle(joinStyle)
      }
  return (
    <div>
      <div className="textInputFlex">
        <p className="w100"> Top Logo</p>
        <p>
          <Input
            placeholder="Insert image url"
            onChange={event => changeTheme("topLogo", event.target.value)}
          />
        </p>
      </div>
      <div className="textInputFlex">
        <p className="w100"> Upper Text</p>
        <p>
          <Input
            placeholder="Basic usage"
            onChange={event => changeTheme("topText", event.target.value)}
          />
        </p>
      </div>
      <div className="textInputFlex">
        <p className="w100">Bottom Text</p>
        <p>
          <Input
            placeholder="Basic usage"
            onChange={event => changeTheme("bottomText", event.target.value)}
          />
        </p>
      </div>
     
      <div className="textInputFlex">
        <p className="w100">Square Color</p>
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
export default Theme4;