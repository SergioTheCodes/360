import React from 'react'
import EmailButton from '../SendEmailButton.js'

function Armado() {
    return (
        <form>
            <h4>Armado</h4>
            <iframe
                className="square"
                src='https://es.surveymonkey.com/r/QM82TX2'></iframe>
            <br></br>
            <EmailButton></EmailButton>
        </form>
    );
}
export default Armado;