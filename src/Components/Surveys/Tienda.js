import React from 'react'
import EmailButton from '../SendEmailButton.js'
import '../../StyleSheets/Surveys/Tienda.scss'

class Tienda_Form extends React.Component {

    constructor() {
        super()
        this.state = {
            myaccesstoken: '',
            email: '',
            users: []
        }

        this.onChange = this
            .onChange
            .bind(this)
        this.onSubmit = this
            .onSubmit
            .bind(this)

    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            myaccesstoken: localStorage.getItem('wootricAuthToken'),
            email: this.state.email
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {}

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h4>Tienda</h4>
                <iframe
                    title="Tienda" 
                    className="square"
                    src='https://www.surveymonkey.com/r/RHVLVDW?embedded=1'></iframe>
                <br></br>
                <EmailButton></EmailButton>
            </form>
        )
    }
}
export default Tienda_Form;