import React, { Component } from 'react';
import Display from './../../components/display/display.component';
import Themes from './../../components/themes/themes.component';
class Dashboard extends Component{
    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-5">
                    <Display/>
                    </div>
                    <div className="col-lg-4">
                    <Themes/>
                    </div>
                </div>

           
            
            </div>
          
        )
    }
}
export default Dashboard;