import React, { Component, useState } from 'react';
import './dashboard.styles.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import ClipboardIcon from 'react-clipboard-icon'
 
import Themes from './../../components/themes/mainThemes.component';
const Dashboard =()=> {
    
  
   const [copied,setCopied]=useState(false);
   const [copied1,setCopied1]=useState(false);
   const style = { fill: 'black' }
        return(
            <div className="container py-5">
                <div className="row">
               
                    <div className="col-lg-9">
                    <Themes />
                   
                    </div>
               </div>
                <div className='test-warning'>
                  <p>Try Below Image URL's for theme 3 and 4</p>
                  <span>https://image.com/1.png  </span>
                  
                    <CopyToClipboard text={"http://www.clker.com/cliparts/j/r/L/t/m/P/no-background-wreath-md.png"}
                        onCopy={() => setCopied(true)}>
                           <ClipboardIcon
                                size={40}
                                style={style}
                                />
                       </CopyToClipboard>
                      {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                        <br/>
                        <span>https://image.com/2.png  </span>

                      <CopyToClipboard text={"https://purepng.com/public/uploads/large/purepng.com-superman-logosupermanfictional-superherocomic-booksdc-comicscharacterjerry-siegelson-of-kryptonaction-comicsman-of-steel-1701528658388ukrvz.png"}
                        onCopy={() => setCopied1(true)}>
                           <ClipboardIcon
                                size={40}
                                style={style}
                                />
                       </CopyToClipboard>
                      {copied1 ? <span style={{color: 'red'}}>Copied.</span> : null}
                </div>  
      
            </div>
          
        )
    }

export default Dashboard;
