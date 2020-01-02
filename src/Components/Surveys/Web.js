import React from 'react'
import {Email, FeedBack, encuesta, argumentar} from '../../Functions/UserFunctions.js'
import '../../StyleSheets/Surveys/Web.scss'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import EmailButton from '../SendEmailButton.js'

class Web_Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            nombre: '',
            preguntas: [],
            feedback: '',
            arguments: []
        }
        var poll;
        var qualification;
        this.EnviarMail = this.EnviarMail.bind(this);
        this.choice = this.choice.bind(this);
        this.pollAnswer = this.pollAnswer.bind(this);
    }

    EnviarMail(){
        Email().then(response => {
            console.log('the rock', response.data)
        })
    }

    choice(e){
        if(e.target.checked){
            let index = e.target.getAttribute('index')
            var mas = (parseInt(index) + 1)
          this.setState({feedback: mas})  
        }
        const userFeedback = {
            nombre: 'User',
            clasificacion: parseInt(this.qualification),
            argumento: mas,
            respuesta: parseInt(this.poll)
        }

        FeedBack(userFeedback).then(response => {
            console.log(response)
        })
    }

    pollAnswer(e) {
        e.preventDefault()
        this.poll = e.target.textContent
        this.qualification = e.target.value        
        const objeto = {
            idformulario: this.state.id,
            clasificacion: this.qualification
        }
        argumentar(objeto).then(response => {
            this.setState({arguments: response})
        })
    }

    componentDidMount() {
        encuesta(this.state.id).then(response => {
            this.setState({preguntas: response})
        })
    }

    render() {
        return (
            <form >
                <h4>Web</h4>
                <form>
                    <div>
                        {
                            this
                                .state
                                .preguntas
                                .map((pregunta) => (<p>{pregunta.pregunta}</p>))
                        }
                        <p></p>
                        <ul id="poll">
                            <li>
                                <Button onClick={this.pollAnswer} value="1">1</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="1">2</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="1">3</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="1">4</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="1">5</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="1">6</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="2">7</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="2">8</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="3">9</Button>
                            </li>
                            <li>
                                <Button onClick={this.pollAnswer} value="3">10</Button>
                            </li>
                        </ul>
                        <ul>
                        {this.state.arguments.map((argument, index) => (
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox index={index} name={argument.id} onClick={this.choice}/>
                                        </InputGroup.Prepend>
                                        <FormControl value={argument.pregunta}/>
                                    </InputGroup>
                                ))}
                                </ul>
                    </div>
                </form>
                <br></br>
                <Button onClick={this.EnviarMail}>SEND</Button>

            </form>
        )
    }
}
export default Web_Form;