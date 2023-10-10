import React from 'react';
import { InputStyled } from '../styled/inputStyled';
import { useState } from 'react';
import { getPokemonsByName, filterByType, orderByAttack, orderByCreate, orderCards, reset } from '../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { FilterStyle, OptionStyled, SelectStyled } from '../styled/selectFavorites';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const types = useSelector((state) => state.Types)

  function handleChange(event) {
    event.preventDefault();
    setSearchName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getPokemonsByName(searchName));
  }

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleOrderByAttack = (event) => {
    dispatch(orderByAttack(event.target.value));
  };

  const handleOrderByCreate = (event) => {
    dispatch(orderByCreate(event.target.value));
  };
  
  const handleByType = (event) => {
    console.log(event.target.value)
    dispatch(filterByType(event.target.value));
  }
 
  function resetHandler(event) {
    event.preventDefault();
    dispatch(reset());
  }


  return (
    <div>
      <form>
        <InputStyled 
          placeholder='nombre del pokemon'
          type='search'
          onChange={(event) => handleChange(event)}
        />
        <button
          type='submit'
          onClick={handleSubmit}
        >
          Buscar
        </button>
        <button
          onClick={resetHandler}
        >
          todos los pokemons
        </button>
      </form>
      
    <FilterStyle className='order abc'>
      <h2>Orden alfabetico</h2>
      <SelectStyled onChange={handleOrder}>
        <OptionStyled value="A">Ascendente</OptionStyled>
        <OptionStyled value="B">Descendente</OptionStyled>
      </SelectStyled>
      </FilterStyle>

      <FilterStyle className='order attack'>
      <h2>Nivel de ataque</h2>
      <SelectStyled onChange={handleOrderByAttack}>
        <OptionStyled value="A">mayor a menor</OptionStyled>
        <OptionStyled value="B">menor a mayor</OptionStyled>
      </SelectStyled>
      </FilterStyle>

    <FilterStyle className='order create'>
      <h2>Filtar por creacion</h2>
      <SelectStyled onChange={handleOrderByCreate}>
       <OptionStyled value="C">Primero Creados</OptionStyled>
       <OptionStyled value="D">Primero no Creados</OptionStyled>
      </SelectStyled>
    </FilterStyle>

    <FilterStyle>
      <h2>filtrar por tipo</h2>
      <SelectStyled onChange={handleByType}>
        {types.map((type) => (
          <OptionStyled key={type.name} value={type.name}>
            {type.name}
          </OptionStyled>
        ))}
      </SelectStyled>
    </FilterStyle>

    </div>
  );
}

export default Navbar;
