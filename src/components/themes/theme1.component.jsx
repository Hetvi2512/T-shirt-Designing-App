import React from "react"
import { Menu, Dropdown, Input, Button, Radio, Select } from "antd"
const { Option } = Select
const Theme1 = ({ normalStyle, setStyle }) => {
  //Custom Style = Existing style in parent

  //SetStyle = What new change we need to do in the parent

  const changeTheme = (key, value) => {
    //Take the existing theme and add the new theme style to it
    var newStyle = { ...normalStyle }
    var joinStyle = Object.assign(newStyle, { [key]: value })
    setStyle(joinStyle)
  }

  return (
    <div>
      <div className="textInputFlex">
        <p className="w100"> Top Text</p>
        <p>
          <Input
            placeholder="Basic usage"
            onChange={event => changeTheme("upperText", event.target.value)}
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
        <p className="w100">Circle Color</p>
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
export default Theme1;