import React from 'react'
import MenuRoll from './Components/MenuRoll.js'
import Surveys from './Components/Surveys/Surveys.js'
import Armado from './Components/Surveys/Armado.js'
import Garantias from './Components/Surveys/Garantias.js'
import NoGarantias from './Components/Surveys/NoGarantias.js'
import Tienda from './Components/Surveys/Tienda.js'
import Transporte from './Components/Surveys/Transporte.js'
import Transporte_y_Armado from './Components/Surveys/Transporte&Armado.js'
import Web from './Components/Surveys/Web.js'
import './App.css'
import NavBar from './Components/NavBar'
import Dashboard from './Components/DashBoard'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import './StyleSheets/App.scss'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Components/Home'
function App(props) {
    const isLoged = props.isLoged;
    if(isLoged){
        return(<MenuRoll />)
    }
    return (
        <Router>
            <div className="App">
                <NavBar></NavBar>
                <Route exact="exact" path="/Dashboard" component={Dashboard}/>
                <div className="fluid-container">
                    <Route exact="exact" path="/SignUp" component={SignUp}/>
                    <Route exact="exact" path="/Login" component={Login}/>
                    <Route exact="exact" path="/Surveys" component={Surveys}/>
                    <Route exact="exact" path="/Web" component={Web}/>
                    <Route exact="exact" path="/Armado" component={Armado}/>
                    <Route exact="exact" path="/Garantias" component={Garantias}/>
                    <Route exact="exact" path="/NoGarantias" component={NoGarantias}/>
                    <Route exact="exact" path="/Tienda" component={Tienda}/>
                    <Route exact="exact" path="/Transporte" component={Transporte}/>
                    <Route exact="exact" path="/TransporteyArmado" component={Transporte_y_Armado}/>

                </div>
                <Route exact="exact" path="/" component={Home}/>
            </div>
        </Router>
    );
}

export default App;
