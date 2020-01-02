import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {login} from '../Functions/UserFunctions.js';

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            errors: {} 
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        

        login(user).then(res => {
            if(res){
                this.props.history.push(`/DashBoard`)
            }
        })
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
        </div>
        )
    }
}

export default Login;