import React from 'react';
import { InputStyled } from '../styled/inputStyled';
import { useState } from 'react';
import { getPokemonsByName, handleOrderByAttack, orderByAttack, orderCards } from '../redux/actions';
import { useDispatch } from "react-redux";
import { FilterStyle, OptionStyled, SelectStyled } from '../styled/selectFavorites';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');

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
        <button>
          todos los pokemons
        </button>
      </form>
      
    <FilterStyle>
      <h2>Orden alfabetico</h2>
      <SelectStyled onChange={handleOrder}>
        <OptionStyled value="A">Ascendente</OptionStyled>
        <OptionStyled value="B">Descendente</OptionStyled>
      </SelectStyled>
      </FilterStyle>

      <FilterStyle>
      <h2>Nivel de ataque</h2>
      <SelectStyled onChange={handleOrderByAttack}>
        <OptionStyled value="A">mayor a menor</OptionStyled>
        <OptionStyled value="B">menor a mayor</OptionStyled>
      </SelectStyled>
      </FilterStyle>
    </div>
  );
}

export default Navbar;
