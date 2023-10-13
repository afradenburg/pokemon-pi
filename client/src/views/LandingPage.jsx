import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Button } from '../styled/landinPageStyled';
import { Container } from '../styled/containerStyled';

const LandingPage = () => { 
  return (
    <Container>
      <Title>Bienvenido a la poke-aplicacion</Title>
      <Link to="/home">
        <Button> Ingresar</Button>
      </Link>
    </Container>
  );
}

export default LandingPage;