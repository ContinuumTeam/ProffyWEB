import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
//pages
import Landing from './pages/landing'
import TeacherList from './pages/teacherList'
import TeacherForm from './pages/teacherForm'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'

function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
            <Route path="/register" component={RegisterPage}/>
        </BrowserRouter>
    )
}
export default Routes;