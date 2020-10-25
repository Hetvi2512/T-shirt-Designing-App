import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Theme1 from './theme1.component';
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Theme 1
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Theme 2
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Theme 3
        </a>
      </Menu.Item>
      <Menu.Item >Theme 4</Menu.Item>
    </Menu>
  );
class Themes extends Component{
    render(){
        return(
          <div style={{ display: "flex" }}>
           
            <div style={{ margin: 10, width: 400, marginTop: 30 }}>
               <div style={{ fontWeight: 600, color: "black" }}>
               Select Theme
                    <Dropdown overlay={menu}>
                    <a 
                    className="ant-dropdown-link"
                    onClick={e => e.preventDefault()}
                    style={{ background: "white", padding: 10, marginLeft: 15 }}
                    >
                    Select Theme
                    <DownOutlined />
                    </a>
                </Dropdown>
              </div>
              <hr color="black" style={{ marginTop: 20 }} />
           <Theme1/>
            </div>
        </div>
   
      
        
          
        )
    }
}
export default Themes;