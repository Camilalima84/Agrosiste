import React from "react";
import { Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Select } from '@chakra-ui/react';

import { Header } from '../../components/Header';

import { Container, FormRegister, ContentActions,  } from './style';

export const AlimentacaoRegister = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnPageFood = () => navigate('/alimentacao');

  return <>
    <Header title="ALIMENTAÇÃO" onClick={returnPageFood} />
    <Container>
      <FormRegister>
        
      
        
        <label>Código do animal </label>
        <Input variant="filled" type="text" placeholder="Digite o código do animal " />
        <label >Data do registro</label>
        <Input placeholder="Data do registro " size="md" type="date" />
        
      
          <label >Regime</label>
          <Select placeholder='Selecione'>
            <option value='option1'>Pastagem </option>
            <option value='option2'>Forragem</option>
            <option value='option3'>Ração</option>
           
          </Select>
      

        <label >Tipo</label>
        <Input variant="filled" type="text" placeholder="Digite o tipo de regime" />
        <label >Quantidade (Kg)</label>
        <Input variant="filled" type="text" placeholder="Digite a Quantidade" />
        

        <ContentActions>
          <Button  onClick={returnPageFood} className="button-login"  bgColor="#47C187" color="#fff">Salvar</Button>
        </ContentActions>
      </FormRegister>
    </Container>

  </>
};