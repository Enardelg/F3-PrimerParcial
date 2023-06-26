import React, { useState } from "react";
import useInput from './utils/useInput'


const Form = () => {
const name = useInput('text','name', "name")
const email = useInput('email','email', "email")
const [msg, setMsg] = useState();
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)
const validName = /^.{5,}$/.test(name.value)

const onClick = (e) =>{
  e.preventDefault();
  if(validEmail && validName){
    setMsg(`Gracias!! ${name.value}, nuestro equipo se comunicará muy pronto.`)
  } else{
    setMsg('Haz ingresado un valor incorrecto, intentalo nuevamente')
  }
}
  return (
    <div className="form">
      <form>
        <input {...name} />
        <input {...email} />
        <input type='submit' value="send" onClick={onClick}/>
        <p>{msg}</p>
      </form>
    </div>
  );
};

export default Form;
