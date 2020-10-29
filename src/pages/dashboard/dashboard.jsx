import React, { Component, useState } from 'react';
import './dashboard.styles.css'

 
import Themes from './../../components/themes/mainThemes.component';

const Dashboard =()=> {

        return(
            <div className="container py-5">
                <div className="row">
               
                    <div className="col-lg-9">
                    <Themes />
                   
                    </div>
               </div>
               
            </div>
          
        )
    }

export default Dashboard;
