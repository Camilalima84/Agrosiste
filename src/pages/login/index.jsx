import React from "react";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Container, CardLogin, ButtonArea, Logo } from "./style";
import { FaLock, FaUserAlt } from "react-icons/fa";
import image from '../../assets/fazenda-tec.png';

import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const naviteToCreateUser = () => navigate('/register');
  const navigateDashboard = () => navigate('/dashboard');

  return (
    <Container>
      <CardLogin>
        <Logo src={image} />
        <InputGroup colorScheme="#47C187">
          <InputLeftElement>
            <FaUserAlt color="#47C187" />
          </InputLeftElement>
          <Input className="login-user" variant="filled" placeholder="usuário"
          />
        </InputGroup>
        <InputGroup marginTop="2">
          <InputLeftElement>
            <FaLock color="#47C187" />
          </InputLeftElement>
          <Input className="senha-user" variant="filled" type="password" placeholder="senha" />
        </InputGroup>
        <ButtonArea>
          <Button className="button-login" onClick={navigateDashboard} bgColor="#47C187" color="#fff">
            ENTRAR
          </Button>
          <Button className="button-cadastro" onClick={naviteToCreateUser} bgColor="#0004ff" color="#fff">
            CADASTRAR
          </Button>
        </ButtonArea>
      </CardLogin>
    </Container>
  );
};
