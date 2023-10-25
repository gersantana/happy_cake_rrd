import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import "./Formulario.css"

function Formulario() {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const enviar = (e) =>{
    e.preventDefault()
    // console.log("se envio")
      alert("Gracias por contactarnos, hemos recibido tu mensaje")
      setText("")
      setEmail("")
      navigate("/")
  }
  return (
    <Form className='w-75 m-auto mt-5' onSubmit={enviar}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control required value={text} onChange={(e) => setText(e.target.value)} as="textarea" rows={3} />
      </Form.Group>
      <button className='btn_form' type="submit">Enviar</button>
    </Form>
  );
}

export default Formulario;