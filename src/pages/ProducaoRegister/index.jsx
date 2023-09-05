import React from "react";
import { Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Select, Stack } from '@chakra-ui/react';

import { Header } from '../../components/Header';

import { Container, FormRegister, ContentActions, Ordenha } from './style';

export const ProducaoRegister = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')
  const [formValues, setFormValues] = React.useState()
 

  const returnProducaoConsultar=() => navigate('/producao-leite'); 
  
  const handleValues = (param) => {
    const { name, value } = param;

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  let sumProduction = formValues && (Number(formValues.ordenha1) + Number(formValues.ordenha2));

  return <>
    <Header title="PRODUÇÃO DE LEITE" onClick={returnProducaoConsultar }/>
    <Container>
      <FormRegister onChange={(e) => handleValues(e.target)}>
        <label className="labe-form">Código do animal</label>
        <Input variant="filled" type="text" placeholder="Digite o código do animal " />
        <label className="labe-form">Data da ordenha</label>
        <Input placeholder="Data " size="md" type="date" />
        <label className="labe-form">1º Ordenha  </label>
        <Input name="ordenha1" variant="filled" type="number" placeholder=" " />
        <label className="labe-form">2º Ordenha</label>
        <Input name="ordenha2" variant="filled" type="number" placeholder="" />
        <label>ORDENHA DIARIA (L)</label>
        <Ordenha >{sumProduction}</Ordenha>
        <ContentActions>
          <Button  onClick={returnProducaoConsultar} className="button-login" bgColor="#47C187" color="#fff">Salvar</Button>
        </ContentActions>
      </FormRegister>
    </Container>

  </>
};