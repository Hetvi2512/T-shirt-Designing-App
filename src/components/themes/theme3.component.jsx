import React from "react"
import { Input } from "antd"
import { Select, Radio } from "antd"
const { Option } = Select

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
     
      <div className="textInputFlex">
        <p className="w100">Circle Color</p>
        <div>
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            onChange={event => changeTheme("stripeColor", event.target.value)}
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
            <Radio.Button
              value="white"
              style={{ background: "white" }}
            ></Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
}
export default Theme3;