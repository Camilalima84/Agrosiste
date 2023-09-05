import React from "react";
import { Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, Radio, Stack } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import Dropzone from 'react-dropzone'
import { Header } from '../../components/Header';

import { Container, FormRegister, ContentActions, UploadImage } from './style';

export const AnimalRegister = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')

  const returnSeusanimais = () => navigate('/meus-animais');

  return <>
    <Header title="Cadastro de animal" onClick={returnSeusanimais} />
    <Container>
      <FormRegister>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <UploadImage {...getRootProps()}>
              <input {...getInputProps()} />
              <p>faça o upload da imagem</p>
            </UploadImage>
          )}
        </Dropzone>
        <label>Nome do Animal</label>
        <Input variant="filled" type="text" placeholder=" Digite o nome do animal" />
        <label >Código do pai (Kg) </label>
        <Input variant="filled" type="text" placeholder="Digite o código do pai " />
        <label >Código da mãe (Kg) </label>
        <Input variant="filled" type="text" placeholder="Digite o código da mãe " />
        <label >Raça (Kg) </label>
        <Input variant="filled" type="text" placeholder="Digite a raça" />
        <label >Peso do animal (Kg) </label>
        <Input variant="filled" type="text" placeholder="Digite o peso do animal (Kg) " />
        <label >Media diaria de leite (L) </label>
        <Input variant="filled" type="text" placeholder="Digite a media diaria de leite (L)  " />
        <label >Data de nascimento</label>
        <Input placeholder="Data de Nascimento" size="md" type="date" />
        <label >Data de desmame</label>
        <Input placeholder="Data desmame" size="md" type="date" />
        <label >Sexo</label>
        <RadioGroup onChange={setValue} value={value}>
          
        
         <Radio value='1'>Macho</Radio>
            <Radio value='2'>Fêmea</Radio>
        
            
          
        </RadioGroup>

        
          <label >Faixa etaria do animal</label>
          
          <Select placeholder='Selecione'>
            <option value='option1'>Filhote </option>
            <option value='option2'>Jovem</option>
            <option value='option3'>Adulto</option>
            <option value='option4'>Velho</option>
          </Select>
     


          
          <label >Status</label>
          <Select placeholder='Selecione'>
            <option value='option1'>Novilha </option>
            <option value='option2'>Vaca Solteira</option>
            <option value='option3'>Vaca Prenha</option>
            <option value='option2'>Lactante</option>
            <option value='option2'>Garrote</option>
            <option value='option4'>Boi</option>
            <option value='option4'>Bezerros</option>

            
          </Select>
        

        <ContentActions>
          <Button  onClick={returnSeusanimais}  className="button-login"  bgColor="#47C187" color="#fff">SALVAR</Button>
        </ContentActions>
      </FormRegister>
    </Container>

  </>
};