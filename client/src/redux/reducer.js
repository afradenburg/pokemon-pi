import {  REMOVE_FAV, FILTER, ORDER, RESET, GET_POKEMONS } from "./actionsTypes";

let initialState = { Pokemons: [], copyPokemons: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, 
        Pokemons: action.payload, 
        copyPokemons: action.payload 
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload
      };

    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
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
