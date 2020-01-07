import React from 'react'
import {Email, FeedBack, encuesta, argumentar} from '../../Functions/UserFunctions.js'
import '../../StyleSheets/Surveys/Web.scss'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import { notificationEmail } from '../../Functions/DataFunctions.js'

class Garantias extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 6,
            nombre: '',
            preguntas: [],
            feedback: '',
            userFeedback: '',
            mailOptions: '',
            arguments: [],
            customtext: '',
            buy: ''
        }
        var poll;
        var qualification;
        this.EnviarMail = this.EnviarMail.bind(this);
        this.choice = this.choice.bind(this);
        this.pollAnswer = this.pollAnswer.bind(this);
        this.enviarFeedback = this.enviarFeedback.bind(this);
    }

    EnviarMail(){       
        Email(this.state.mailOptions).then(response => {
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

    enviarFeedback(e){
        e.preventDefault()
        const feedbackRequest = {
            id: this.state.feedback,
            idformulario: this.state.id,
            clasificacion: this.qualification
        }
        var email;
        notificationEmail(feedbackRequest).then(ne => {
            email = ne.data;
            console.log(email)
        })
        
      FeedBack(this.state.userFeedback).then(response => {
          document.getElementById('argumentos').setAttribute('hidden', 'true')
          document.getElementById('enviar').setAttribute('hidden', 'true')
        })

        
        const mailNotification = {
            html: '<p>Notificaciones NPS TUGO Web</p>',
            emails: email
        }
        Email(mailNotification)
        .then(response => {
        })
    }

    pollAnswer(e) {
        e.preventDefault()
        document.getElementById('argumentos').removeAttribute('hidden')
        this.poll = e.target.textContent
        this.qualification = parseInt(e.target.value)           
        const objeto = {
            idformulario: this.state.id,
            clasificacion: this.qualification
        }
        argumentar(objeto).then(response => {
            this.setState({arguments: response})
        })
    }

    componentDidMount() {
        const options ={
            html: `
                        <h3>Cuéntanos tu experiencia en nuestra tienda online tugo.co</h3> 
                        <p>Hola</p>

                        Tu experiencia es muy importante para nosotros. Por eso, queremos saber cómo
                        te fue con tu compra realizada del día por nuestra tienda online tugo.co.
                        Ayúdanos a mejorar solamente con dos preguntas haciendo click <a href="http://localhost:3000/Garantias">aquí</a>:
                        <p>Equipo Servicio al Cliente
                        <br>
                        Tugó Diseño para todos.</p>
                        <br></br>
                        <p>Para más información no dudes en contactarnos a través de nuestro correo
                        electrónico ventasweb@tugo.com.co</p>
                        <p>Gracias por tu tiempo<p>
                        `,
            emails: 'sergioesteban2049@gmail.com'
                };
        this.setState({mailOptions: options})

        encuesta(this.state.id).then(response => {
            this.setState({preguntas: response})
        })
    }

    render() {
        return (
            <form>
                    <div>
                        {
                            this
                                .state
                                .preguntas
                                .map((pregunta) => (<p>{pregunta.pregunta}</p>))
                        }                        
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
                            {
                            this.state.preguntas.map(avisos => { 
                                if(this.poll <= 6)
                                    return(
                                        <p>{avisos.textoClasificacion1}</p>
                                    )
                            }) 
                        }
                        {
                            this.state.preguntas.map(avisos => {
                                if(this.poll == 7)
                                    return(
                                        <p>{avisos.textoClasificacion2}</p>
                                    )    
                                if(this.poll == 8)
                                    return(
                                        <p>{avisos.textoClasificacion2}</p>
                                    )
                            }) 
                        }
                        {
                            this.state.preguntas.map(avisos => {
                                if(this.poll >= 9)
                                    return(
                                        <p>{avisos.textoClasificacion3}</p>
                                    )
                            }) 
                        }
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
export default Garantias;