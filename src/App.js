import React, { useState, useRef } from "react";
import { Container, ContainerItems, Image, H1, InputLabel, Input, Button, User } from "./styles";
import People from './assets/people1.svg'
import Arrow from './assets/arrow.svg'
import Delete from './assets/delete.svg'
import axios from "axios";

const App = () => {

  const [users, setUsers] = useState([])
  let inputName = useRef()
  let inputAge = useRef()

   const addNewUser = async () => {

    const {data: newUser} = await axios.post('http://localhost:3003/users', {name: inputName.current.value, age: inputAge.current.value})

    setUsers([...users, newUser])
  }
  const handleClick = () => {
    addNewUser()
    resetInput()
  }

  function userDelete(userId) {

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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

        <Button onClick={() => handleClick()}>Cadastrar <Image alt="flecha-imagem" src={Arrow} /></Button>
        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name} </p>  <p> {user.age} </p>
              <button onClick={() => userDelete(user.id)}>
                <img src={Delete} alt="Lata-de-Lixo" />
              </button>
            </User>
          ))
          }
        </ul>
      </ContainerItems>
    </Container>
  );
}


export default App