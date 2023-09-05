import React from "react";
import { MdSearch } from 'react-icons/md';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { BsPlusCircleFill } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { CustomTable } from '../../components/Table'

import { Container, FormRegister  } from './style';
import { color } from "framer-motion";

export const EventoConsultar= () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnDashboard = () => navigate('/dashboard');
  const returnEventovetRegister = () => navigate('/evento-register');

  return <>
    <Header title="Eventos veterinário" onClick={returnDashboard} />
    <Container>
      <FormRegister>

      <label>Busca pelo código</label>
        <InputGroup>
          <Input />
          <InputRightElement>
          <MdSearch />
          </InputRightElement>
        </InputGroup>
        <label >Data do registro</label>
        <Input placeholder="Data do registro " size="md" type="date" />
        
        <CustomTable data={[{name: '20/08/2023', year: '24', size: '25', animalCode: '777', }, {name: '20/08/2023', year: '24', size: '25' , animalCode: '777'  }]} columns={[' Data do evento ' ,' Código do animal ',' Evento','Valor R$',''
        ]} />
        <div  onClick={returnEventovetRegister}  style={{ position: 'fixed', right: '40px', bottom: '40px', display: 'flex', gap: '20px', alignItems: 'center', fontSize: '18px' }}>
        ADICIONAR EVENTO
        <BsPlusCircleFill size={40}  color=" #00A859"/>
      </div>
      </FormRegister>
      
    </Container>

  </>
};