import React, { useState, useRef } from "react"

import { Container, ContainerItems, H1, InputLabel, Input, Button, Image} from '../pageHome/styles' 
import axios from "axios"

import People from './assets/people1.svg'
import Arrow from './assets/arrow.svg'


const App = () => {

  const [users, setUsers] = useState([])
  let inputName = useRef()
  let inputAge = useRef()

  const handleClick = () => {
    addNewUser()
    resetInput()
  }

  const addNewUser = async () => {

    const {data: newUser} = await axios.post('http://localhost:3003/users', {name: inputName.current.value, age: inputAge.current.value})

    setUsers([...users, newUser])
  }


  function resetInput() {
    inputName.current.value = ""
    inputAge.current.value = ""

  }


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" type="text" inputmode="numeric" />

        <Button to="/usuarios" onClick={() => handleClick()}>Cadastrar <img alt="flecha-imagem" src={Arrow} /></Button>
      </ContainerItems>
    </Container>
  );
}


export default App