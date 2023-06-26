import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {theme} = useContext(ContextGlobal)
  return (
    <div className='contact' style={{background: theme.homeBackground, color: theme.color}}>
      <h2>¿Quieres saber más de nosotros?</h2>
      <p>Envíanos tus consultas y en breve nos pondremos en contacto contigo.</p>
      <Form/>
    </div>
  )
}

export default Contact