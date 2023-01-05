import React, { useState,useEffect } from "react";
import { Container, ContainerItems,Image, H1, User, Button } from "../pageUsers/styles" 
import People from './assets/people2.svg'
import Delete from './assets/delete.svg'
import axios from "axios";

const App1 = () => {

  const [users, setUsers] = useState([])
  

  useEffect(() => {

    async function fetchUser(){
      const {data:newUsers} = await axios.get('http://localhost:3003/users')
      setUsers(newUsers)
    }

    fetchUser()

  },[])

  async function userDelete(userId) {

    await axios.delete(`http://localhost:3003/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }


  return (
    <Container>
      <Image  src={People} alt="logo-imagem"/>
      <ContainerItems>
      <H1>Usuários</H1>
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
        <Button to="/"> Voltar </Button>
      </ContainerItems>
    </Container>
  );
}


export default App1