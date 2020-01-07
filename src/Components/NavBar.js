import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import "../StyleSheets/NavBar.scss";
class NavBar extends React.Component {

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this
            .props
            .history
            .push(`/`)
    }

    render() {
        const IndexLinks = (
            <Navbar  className="flex-column primera">
                <Nav.Link id="one" href="/SignUp">Register</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
            </Navbar>
        )

        const UserLinks = (
            <Navbar  className="flex-column">
                <Nav.Link id="one" href="/DashBoard">Dashboard</Nav.Link>
                <a
                    href="/"
                    onClick={this
                        .logOut
                        .bind(this)}>Logout</a>
                        
            </Navbar>
        )
        return (
            <Navbar  className="flex-column primera">
                <Navbar.Brand href="/">
                    NPS 360
                </Navbar.Brand>
                {
                    localStorage.usertoken
                        ? UserLinks
                        : IndexLinks
                }
            </Navbar>
        )
    }
}
export default withRouter(NavBar)