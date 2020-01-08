import axios from 'axios'
import react from 'react'

export const notificationEmail = ne => {
  return axios.post('http://45.33.19.127:5000/nps/argumentemail', {
    id: ne.id,
    idformulario: ne.idformulario,
    clasificacion: ne.clasificacion
  })
  .then(response => {
    console.log(response)
    return response
  })
  .catch(err => {
    console.log(err)
  })
}
