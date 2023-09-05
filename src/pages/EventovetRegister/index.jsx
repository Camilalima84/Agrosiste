import React from "react";
import { Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Select, } from '@chakra-ui/react';

import { Header } from '../../components/Header';

import { Container, FormRegister, ContentActions,  } from './style';

export const EventovetRegister= () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnEventoConsultar= () => navigate('/eventos');
  
 


  return <>
    <Header title="Eventos veterinários"   onClick={ returnEventoConsultar}/>
    <Container>
      <FormRegister>
       
        <label >Código do animal </label>
        <Input variant="filled" type="text" placeholder="Digite o código do animal " />
        <label >Data </label>
        <Input placeholder="Data " size="md" type="date" />
        <label >Veterinário  </label>
        <Input variant="filled" type="text" placeholder="Digite o nome do Veterinário (a) " />
        <label >Valor Vet. (R$)   </label>
        <Input variant="filled" type="text" placeholder="Digite o valor " />
        <label >Problema   </label>
        <Input variant="filled" type="text" placeholder="Digite o Problema  " />
        <label >Medicamento </label>
        <Input variant="filled" type="text" placeholder="Digite o Medicamento  " />
        <label >Valor do medicamento (R$)   </label>
        <Input variant="filled" type="text" placeholder="Digite o valor do medicamento " />

    
          <label >Evento</label>
          <Select placeholder='Selecione'>
            <option value='option1'>Verminose</option>
            <option value='option2'>Parto</option>
            <option value='option3'>Vacinação</option>
            <option value='option4'>Doença</option>

           
          </Select>
        

        <ContentActions>
          <Button  onClick={ returnEventoConsultar} className="button-login"  bgColor="#47C187" color="#fff">Salvar</Button>
        </ContentActions>
      </FormRegister>
    </Container>

  </>
};