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
                <div className="login-section">
                    <h1>Fazer Login</h1>

                    <div className="form-login">
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                    </div>

                    <div className="especial-field">
                        <div className="remember">
                            <input type="checkbox"/>
                            <label htmlFor="">Lembrar-me</label>
                        </div>
                        <span>Esqueci minha senha</span>
                    </div>

                    <button type="submit"> entrar </button>
                </div>

                <div className="create-account">
                    <span>Não possui conta? <a href="">Cadastre-se</a></span>
                    <span>É de graças</span>
                </div>
            </div>
            
        </div>

    )

}

export default LoginPage;