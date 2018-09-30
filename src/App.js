import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import  NavBar from './Componts/layout/NavBar'
import  Dashboard from './Componts/dashboard/Dashboard'
import  ProjectDetails from './Componts/projects/ProjectDetails'
import  SignIn from './Componts/auth/SignIn'
import  SignUp from './Componts/auth/SignUp'
import CreateProject from './Componts/projects/CreateProject'

class App extends Component {
  render() {
    return (

        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/project/:id' component={ProjectDetails}/>
                    <Route path='/signin' component={SignIn}/>
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/create' component={CreateProject}/>

                </Switch>
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
