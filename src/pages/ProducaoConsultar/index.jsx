import React from "react";
import { MdSearch } from 'react-icons/md';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { BsPlusCircleFill } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { CustomTable } from '../../components/Table'

import { Container, FormRegister  } from './style';
import { color } from "framer-motion";

export const ProducaoConsultar= () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnDashboard = () => navigate('/dashboard');
  const returnProducaoRegister=() => navigate('/producao-register');

  return <>
    <Header title="PRODUÇÃO DE LEITE" onClick={returnDashboard} />
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
        
        
        <CustomTable data={[{name: '20/08/2023', year: '24', size: '25', animalCode: '777', }, {name: '20/08/2023', year: '24', size: '25' , animalCode: '777'  }]} columns={[' Data da ordenha ' ,' Código do animal ','1º Ordenha(L)','2º Ordenha(L) ',''
        ]} />
        <div  onClick={returnProducaoRegister}  style={{ position: 'fixed', right: '40px', bottom: '40px', display: 'flex', gap: '20px', alignItems: 'center', fontSize: '18px' }}>
        ADICIONAR ORDENHA
        <BsPlusCircleFill size={40}  color=" #00A859"/>
      </div>
      </FormRegister>
      
    </Container>

  </>
};