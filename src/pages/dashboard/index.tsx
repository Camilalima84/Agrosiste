import React from "react";

import { Grid, GridItem, Button } from '@chakra-ui/react'
import image from '../../assets/fazenda-tec.png';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';

import { HeadignProfile, ContentActions, Logo } from './style';

import teste from '../../assets/listAnimals.png';
import boi from '../../assets/boi.png';
import vacina from '../../assets/vacina.png';
import alimentacao from '../../assets/capim.png';
import milk from '../../assets/icon-park_milk.png';
import producao from '../../assets/Vector.png';

export const Dashboard = () => {

  const navigate = useNavigate();

  const navigateMyanimals = () => navigate('/meus-animais')
  const navigateRegsiterAnimal = () => navigate('/animal-register')
  const navigateEvents = () => navigate('/eventos')
  const navigateFood = () => navigate('/alimentacao')
  const navigateFlock = () => navigate('/producao-rebanho')
  const navigateMilk = () => navigate('/producao-leite')
  const returnPageLogin = () => navigate('/');

  return (
    <>
      <HeadignProfile>
        <Logo>
          <img src={image} alt="Sua Logo" />
        </Logo>
        <label className="title-heading">Olá, Fulano</label>

      </HeadignProfile>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} marginX={6}>
        <GridItem>
          <Card image={teste} title="MEUS ANIMAIS" color='#47C187' onClick={navigateMyanimals} />
        </GridItem>
        <GridItem>
          <Card image={boi} title="NOVO ANIMAL" color='#2973A7' onClick={navigateRegsiterAnimal} />
        </GridItem>
        <GridItem>
          <Card image={vacina} title="EVENTOS VETERINÁRIOS" onClick={navigateEvents} color='#FFD233D9' />
        </GridItem>
        <GridItem>
          <Card image={alimentacao} title="ALIMENTAÇÃO" onClick={navigateFood} color='#FF875E' />
        </GridItem>
        <GridItem>
          <Card image={producao} title="PRODUÇÃO DO REBANHO" onClick={navigateFlock} color='#3BA99C' />
        </GridItem>
        <GridItem>
          <Card image={milk} title="PRODUÇÃO DE LEITE" onClick={navigateMilk} color='#7EBCE6' />
        </GridItem>
      </Grid>

      <ContentActions>
        <Button onClick={returnPageLogin} className="button-login" bgColor="#47C187" color="#fff">Sair</Button>
      </ContentActions>
    </>
  )
}