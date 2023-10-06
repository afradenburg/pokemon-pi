import {   FILTER, ORDER, RESET, GET_POKEMONS, GET_POKEMON_BY_NAME, ORDERBYATTACK } from "./actionsTypes";

let initialState = { Pokemons: [], CopyPokemons: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, 
        Pokemons: action.payload, 
        copyPokemons: action.payload 
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        Pokemons: action.payload
      };

      case ORDER:
  const CopyPokemonsAll = [...state.Pokemons];
  return {
    ...state,
    Pokemons:
      action.payload === "A"
        ? CopyPokemonsAll.sort((a, b) => a.name.localeCompare(b.name))
        : CopyPokemonsAll.sort((a, b) => b.name.localeCompare(a.name)),
  };

  case ORDERBYATTACK:
  const CopyPokemonsAttack = [...state.Pokemons];
  return {
    ...state,
    Pokemons:
      action.payload === "A"
        ? CopyPokemonsAttack.sort((a, b) => b.attack - a.attack)
        : CopyPokemonsAttack.sort((a, b) => a.attack - b.attack),
  };

    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharactersFav,
      };

    default:
      return state;
  }
};

export default rootReducer;
