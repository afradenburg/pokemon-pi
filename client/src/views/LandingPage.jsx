import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getTypes } from '../redux/actions';

const LandingPage = () => {
  const dispatch = useDispatch()

  const getTypesBd = () =>{
    dispatch(getTypes())
  }
  
  return (
    <div>
      <h1>Bienvenido a la poke-aplicacion</h1>
      <Link to="/home">
        <button onClick={getTypesBd}> Ingresar</button>
      </Link>
    </div>
  );
}

export default LandingPage;