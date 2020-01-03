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
            userFeedback: '',
            arguments: []
        }
        var poll;
        var qualification;
        this.EnviarMail = this.EnviarMail.bind(this);
        this.choice = this.choice.bind(this);
        this.pollAnswer = this.pollAnswer.bind(this);
        this.enviarFeedback = this.enviarFeedback.bind(this);
}
    EnviarMail(){
        Email().then(response => {
            console.log(response.data)
        })
    }

    choice(e){
        if(e.target.checked){
            let index = e.target.getAttribute('index')
            var mas = (parseInt(index) + 1)
          this.setState({feedback: mas})  
        }
       const userfeedback = {
            nombre: 'User',
            clasificacion: parseInt(this.qualification),
            argumento: mas,
            respuesta: parseInt(this.poll)
        }

        this.setState({ userFeedback: userfeedback})
        
        document.getElementById('enviar').removeAttribute('hidden')
    }

    enviarFeedback(){
      FeedBack(this.state.userFeedback).then(response => {
          document.getElementById('argumentos').setAttribute('hidden', 'true')
          document.getElementById('enviar').setAttribute('hidden', 'true')
          var ko = document.querySelector('input[type="checkbox"]').setAttribute('checked', 'false')
            console.log( ko )
        })  
    }

    pollAnswer(e) {
        e.preventDefault()
        document.getElementById('argumentos').removeAttribute('hidden')
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
                        <ul id="argumentos">
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
                <br></br>
                <Button onClick={this.EnviarMail}>Email</Button>
                <Button id="enviar" onClick={this.enviarFeedback} hidden={true}>Enviar</Button>

            </form>
        )
    }
}
export default Web_Form;