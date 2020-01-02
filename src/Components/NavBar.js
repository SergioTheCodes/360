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
        localStorage.removeItem('wootricAuthToken')
        localStorage.removeItem('usertoken')
        this
            .props
            .history
            .push(`/`)
        console.log("Exitado")
    }

    render() {
        const IndexLinks = (
            <Navbar  className="flex-column primera">
                <Nav.Link href="/SignUp">Register</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
            </Navbar>
        )

        const UserLinks = (
            <Navbar  className="flex-column">
                <a
                    href="/"
                    onClick={this
                        .logOut
                        .bind(this)}>Logout</a>
                        <Nav.Link href="/DashBoard">Dashboard</Nav.Link>
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