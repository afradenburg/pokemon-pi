import React from 'react'
import Navbar from '../components/navbar';
import Cards from '../components/cards';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state)=>state.Pokemons);
  
  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch])



  return (
    <div>Home
        <Navbar />
        <Cards allPokemons = {allPokemons} />
    </div>
    
  )
}

export default Home;