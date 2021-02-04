import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
//img
import logoImage from '../../assets/images/Intro.svg'
import backgroundImage from '../../assets/images/Background.svg'

import './style.css'

function LoginPage(){


    return(

        <div id="page-landing">

            <div className="logo-landing">
                <img src={backgroundImage} alt=""/>
                <div className="logo">
                    <img src={logoImage} alt="logo"/>
                </div>
            </div>

            <div className="login-landing">
                <h1>hello world</h1>
            </div>
            
        </div>

    )

}

export default LoginPage;