import React from 'react'
import Navbar from '../components/navbar';
import Cards from '../components/cards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from '../redux/actions';
import { Pagination } from '../components/pagination';

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state)=>state.Pokemons);
  const [currentPage, setCurrentPage] = useState(1)

  const elementsPage = 12;
  const startIndex =  (currentPage - 1) * elementsPage ;
  const endIndex = startIndex + elementsPage;

  const currentElements = (Array.isArray(allPokemons)) ? allPokemons.slice(startIndex, endIndex) : allPokemons;
  
  const totalPages = Math.ceil(allPokemons.length / elementsPage);

  function pageHandler(pageNumber){
    setCurrentPage(pageNumber)
  }

  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch])

  return (
    <div>Home
        <Navbar/>
        <Pagination page = {pageHandler} totalPages = {totalPages} />
        <Cards allPokemons = {currentElements} />
        
    </div>
    
  )
}

export default Home;