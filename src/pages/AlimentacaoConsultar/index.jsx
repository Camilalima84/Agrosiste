import React from "react";
import { MdSearch } from 'react-icons/md';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { BsPlusCircleFill } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { CustomTable } from '../../components/Table'

import { Container, FormRegister  } from './style';

export const AlimentacaoConsultar = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnDashboard = () => navigate('/dashboard');
  const gotToRegister = () => navigate('/alimentacao-animal');

  return <>
    <Header title="ALIMENTAÇÃO" onClick={returnDashboard} />
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
        
        
        <CustomTable data={[{name: '20/08/2023', year: '24', size: '25', animalCode: '777', }, {name: '20/08/2023', year: '24', size: '25' , animalCode: '777'  }]} columns={[' Data do evento ' ,' Código do animal ',' Regime','Tipo',''
        ]} />
       <button onClick={gotToRegister} style={{ position: 'fixed', right: '40px', bottom: '40px', display: 'flex', gap: '20px', alignItems: 'center', fontSize: '18px' }}>
        Adicionar alimentação
        <BsPlusCircleFill size={40} color=" #00A859"/>
      </button>
      </FormRegister>
      
    </Container>

  </>
};