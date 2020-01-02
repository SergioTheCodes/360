import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {register} from '../Functions/UserFunctions.js';
import {roles} from '../Functions/UserFunctions.js';

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            rol: roles
        }
        console.log(this.state.rol)
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
            password: this.state.password,
            rol: this.state.rol
        }
        register(user).then(res => {
                this.props.history.push(`/Login`)
        })
    }

    render(){
        return(
            <div>
                <h2>Sign Up</h2>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Form.Group>
                    <select>
                        <option value={this.state.rol}></option>
                    </select>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    <Button type="submit" >Sign Up</Button>
                </Form>
        </div>
        )
    }
}

export default SignUp