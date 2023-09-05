import React from 'react'
import { Container, FormRegister, CardSeusAnimais, CardTotal, Logo } from './style';
import { Header } from '../../components/Header'
import { MdSearch } from 'react-icons/md';
import { CustomTable } from '../../components/Table'
import { BsPlusCircleFill } from 'react-icons/bs';
import image from '../../assets/fazenda-tec.png';

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';


export const SeusAnimais = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnDashboard = () => navigate('/dashboard');
  const returnAnimalRegister= () => navigate('/animal-register');


  return <>
    <Header title="Seus animais" onClick={returnDashboard} />
    <Container>
      <FormRegister>
        <Logo>
          <img src={image} alt="Sua Logo" />
        </Logo>
        <InputGroup>
          <Input placeholder="Pesquisar animal" />
          <InputRightElement>
            <MdSearch size={24} />
          </InputRightElement>
        </InputGroup>
        <CardTotal>
          <label>REBANHO</label>
          <label>20</label>
        </CardTotal>
        <CardSeusAnimais>
          <label>VACAS EM LACTAÇÃO</label>
          <label>32</label>
        </CardSeusAnimais>
        <CardSeusAnimais>
          <label >BOIS</label>
          <label>32</label>
        </CardSeusAnimais>
        <CardSeusAnimais>
          <label >VACAS SOLTEIRAS</label>
          <label>32</label>
        </CardSeusAnimais>

        <CardSeusAnimais>
          <label >VACAS PRENHAS</label>
          <label>32</label>
        </CardSeusAnimais>
        <CardSeusAnimais>
          <label >BEZERROS</label>
          <label>32</label>
        </CardSeusAnimais>
        <CardSeusAnimais>
          <label >GARROTES</label>
          <label>32</label>
        </CardSeusAnimais>
        <CardSeusAnimais>
          <label >NOVILHOS</label>
          <label>32</label>
        </CardSeusAnimais>

        <div  onClick={returnAnimalRegister}  style={{ position: 'fixed', right: '40px', bottom: '40px', display: 'flex', gap: '20px', alignItems: 'center', fontSize: '18px' }}>
          ADICIONAR ANIMAL
          <BsPlusCircleFill size={40} color="#00A859" />
        </div>
      </FormRegister>
    </Container>

  </>
};