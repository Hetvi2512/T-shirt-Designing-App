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
                <div className='test-warning'>
                     Sample URL's to try logo of theme 3 and 4
                     <br/>
                     1. https://logodix.com/logo/2019692.png
                     <br/>
                     2. https://logodix.com/logo/2183284.png
                     <br/>
                     
                     3.https://logodix.com/logo/2183247.png
                     <br/>
                     4. https://logodix.com/logo/1345081.png
                    </div>
                                
                        </div>
          
        )
    }

export default Dashboard;
