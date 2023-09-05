import React from "react";
import { Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Container, FormRegister, ContentActions } from './style';

export const Register = () => {
  const navigate = useNavigate();

  const returnPageLogin = () => navigate('/');

  return <Container>
    
    <FormRegister>
      <Heading size="xl">Cadastro de novo usuário</Heading>
      <Input variant="filled" type="text" placeholder="Nome" />
      <Input variant="filled" type="email" placeholder="Email do usuário" />
      <Input variant="filled" type="password" placeholder="Senha" />
      <Input variant="filled" type="password" placeholder="Repita sua senha" />
      <ContentActions>
      <Button className="button-login"  bgColor="#47C187" color="#fff">SALVAR</Button>
        <Button  variant="link" onClick={returnPageLogin} >Voltar parta o login</Button>
      </ContentActions>
    </FormRegister>
  </Container>
};