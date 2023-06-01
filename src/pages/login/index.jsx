import React from "react";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Container, CardLogin, ButtonArea, Logo } from "./style";
import { FaLock, FaUserAlt } from "react-icons/fa";
import image from '../../assets/logo.png'

export const Login = () => {
  return (
    <Container>
      <CardLogin>
        <Logo src={image} />
        <InputGroup colorScheme="#47C187">
          <InputLeftElement>
            <FaUserAlt color="#47C187" />
          </InputLeftElement>
          <Input variant="filled" placeholder="usuário" />
        </InputGroup>
        <InputGroup marginTop="2">
          <InputLeftElement>
            <FaLock color="#47C187" />
          </InputLeftElement>
          <Input variant="filled" type="password" placeholder="senha" />
        </InputGroup>
        <ButtonArea>
          <Button bgColor="#47C187" color="#fff">
            ENTRAR
          </Button>
          <Button bgColor="#2973A7" color="#fff">
            CADASTRAR
          </Button>
        </ButtonArea>
      </CardLogin>
    </Container>
  );
};
