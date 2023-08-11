import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const Container = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
`;

export const CardLogin = styled(Box)`
  border-radius: 10px;
  width: 40%;
  margin: auto;

  @media (max-width: 425px) {
    width: 90%;
  }

  @media (max-width: 780px) {
    width: 90%;
  }

  input {
    border-radius: 8px;
  }

  input:focus {
    border-color: #47c187;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Logo = styled.div`
  background-image: ${props => `url(${props.src})`};
  height: 100px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;

  margin-bottom: 50px;
`;
