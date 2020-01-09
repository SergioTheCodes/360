import React from 'react'
import { notificationEmail } from '../../Functions/DataFunctions.js'
import {Email, FeedBack, encuesta, argumentar} from '../../Functions/UserFunctions.js'
import '../../StyleSheets/Surveys/Tienda.scss'
import {Button, InputGroup, FormControl} from 'react-bootstrap'

class Transporte extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 3,
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
            subject: '¿Cómo fue tu experiencia con la llegada del producto?',
            html: `     <p>Hola</p>

                        Para nosotros cada contacto con nuestros clientes es muy importante. Por eso,
                        queremos saber cómo te fue con el servicio de entrega del producto. Ayúdanos a
                        mejorar solamente con dos preguntas haciendo click <a href="http://tugo.harcorp.com.co/Transporte">aquí:</a>
                        <p>Equipo Servicio al Cliente
                        <br>
                        Tugó Diseño para todos.</p>
                        <br></br>
                        <p>Cualquier inquietud que tengas cuéntanos a través de nuestra página
                        www.tugo.co en la sección Contáctanos.</p>
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
export default Transporte;
