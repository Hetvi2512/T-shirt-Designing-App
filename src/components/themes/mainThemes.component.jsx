import React, { useState } from "react"
import { Menu, Dropdown, Input, Button } from "antd"
import { DownOutlined } from "@ant-design/icons"

import Theme1 from "./theme1.component"
import Theme2 from "./theme2.component"
import Theme3 from "./theme3.component"
import Theme4 from "./theme4.component"
import './themes.styles.css';
import Display from './../display/display.component';



export default ({ setThemeNumber, themeNumber, addOrder }) => {
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [theme1Style, setTheme1Style] = useState({})
  const [theme2Style, setTheme2Style] = useState({})
  const [theme3Style, setTheme3Style] = useState({})
  const [theme4Style, setTheme4Style] = useState({})
 

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setSelectedTheme(1)}>Theme 1</Menu.Item>
      <Menu.Item onClick={() => setSelectedTheme(2)}>Theme 2</Menu.Item>
      <Menu.Item onClick={() => setSelectedTheme(3)}>Theme 3</Menu.Item>
      <Menu.Item onClick={() => setSelectedTheme(4)}>Theme 4</Menu.Item>
    </Menu>
  )

  
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            boxShadow: "1px 1px 2px rgba(0,0,0,0.4)",
            borderRadius: 10,
            background: "white",
            padding: 20,
            margin: 10,
          }}
        >
          <Display
            themeNumber={selectedTheme}
            theme1Style={theme1Style}
            setTheme1Style={setTheme1Style}
            theme2Style={theme2Style}
            setTheme2Style={setTheme2Style}
            theme3Style={theme3Style}
            setTheme3Style={setTheme3Style}
            theme4Style={theme4Style}
            setTheme4Style={setTheme4Style}
          />
        </div>
        <div style={{ margin: 10, marginTop: 30 }}>
          <div style={{ fontWeight: 600, color: "black" }}>
            Select Theme
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
                style={{ background: "white", padding: 10, marginLeft: 15,width:900 }}
              >
                {selectedTheme !== 0
                  ? `Theme ${selectedTheme}`
                  : "Select Theme"}{" "}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <hr color="black" style={{ marginTop: 20 }} />

          {selectedTheme === 1 && (
            <Theme1 normalStyle={theme1Style} setStyle={setTheme1Style} />
          )}
          {selectedTheme === 2 && (
            <Theme2 normalStyle={theme2Style} setStyle={setTheme2Style} />
          )}
          {selectedTheme === 3 && (
            <Theme3 normalStyle={theme3Style} setStyle={setTheme3Style} />
          )}
          {selectedTheme === 4 && (
            <Theme4 normalStyle={theme4Style} setStyle={setTheme4Style} />
          )}

          {selectedTheme !== 0 && (
            <div>
              <div className="textInputFlex">
                <p className="w100">Order for</p>
                <p>
                  <Input
                    placeholder="Basic usage"
                  //  onChange={event => setOrderFor(event.target.value)}
                  />
                </p>
              </div>
              <Button
              //  onClick={onSubmit}
                type="default"
                style={{
                  background: "green",
                  border: "1px solid green",
                  color: "white",
                  fontWeight: 400,
                }}
              >
                Submit
              </Button>
            
            </div>
          )}
        </div>
        
      </div>
    
    </div>
  )
}