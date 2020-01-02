import React from 'react'
import EmailButton from '../SendEmailButton.js'

function Garantias() {
    return (
        <form>
            <h4>Garantias</h4>
            <iframe
                className="square"
                src='https://es.surveymonkey.com/r/QGBB9WS'></iframe>
            <br></br>
            <EmailButton></EmailButton>
        </form>
    );
}
export default Garantias;