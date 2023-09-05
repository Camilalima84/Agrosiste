import React from "react";

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';


import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { CustomTable } from '../../components/Table'

import { Container, FormRegister, Titulo  } from './style';


export const TotalRebanho = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnDashboard = () => navigate('/dashboard');

  return <>
    <Header title="PRODUÇÃO DO REBANHO" onClick={returnDashboard} />
    <Container>
      <FormRegister>
      
        <Titulo>Leite</Titulo>
        <Input placeholder="Data do registro " size="md" type="date" />
        
        
        <CustomTable data={[{name: '20/08/2023', year: '24', size: '25'}, {name: '20/08/2023', year: '24', size: '25'  }]} columns={[' DATA ' ,'TOTAL DIÁRIO (L)','TOTAL MENSAL (L)',''
        ]} />
        
      </FormRegister>
      
    </Container>

  </>
};