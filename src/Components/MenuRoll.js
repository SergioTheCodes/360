import React, {Component} from 'react'
import {Nav} from 'react-bootstrap'
import '../StyleSheets/MenuRoll.scss'
import AssignmentIcon from '@material-ui/icons/Assignment'
import PersonIcon from '@material-ui/icons/Person'
import DashboardIcon from '@material-ui/icons/Dashboard'

class MenuRoll extends Component {
    render() {
        return (
            <nav id="menuroll">
                <ul>
                    <Nav.Link href="/DashBoard"><DashboardIcon/><a>Dashboard</a></Nav.Link>
                    <Nav.Link><PersonIcon /><a>Usuarios</a></Nav.Link>
                    <Nav.Link href="/Surveys"><AssignmentIcon/><a>Encuestas</a></Nav.Link>
                </ul>
                
            </nav>
        )
    }
}

export default MenuRoll