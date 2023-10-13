import {
  POST_POKEMON,
  ORDER,
  RESET,
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  ORDER_BY_ATTACK,
  GET_POKEMON_DETAIL,
  ORDER_BY_CREATE,
  GET_TYPES,
  FILTER_BY_TYPE,
} from "./actionsTypes";

let initialState = { Pokemons: [], CopyPokemons: [], Types: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return {
        Types: action.payload,
      };
    case GET_POKEMONS:
      return {
        ...state,
        Pokemons: action.payload,
        CopyPokemons: action.payload,
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        Pokemons: action.payload,
      };

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        CopyPokemons: action.payload,
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

    case ORDER_BY_ATTACK:
      const CopyPokemonsAttack = [...state.Pokemons];
      return {
        ...state,
        Pokemons:
          action.payload === "A"
            ? CopyPokemonsAttack.sort((a, b) => b.attack - a.attack)
            : CopyPokemonsAttack.sort((a, b) => a.attack - b.attack),
      };

    case ORDER_BY_CREATE:
      const CopyPokemonsId = [...state.CopyPokemons];
      const filteredPokemons =
        action.payload === "C"
          ? CopyPokemonsId.filter((pokemon) => typeof pokemon.id === "string")
          : CopyPokemonsId.filter((pokemon) => typeof pokemon.id === "number");
      return {
        ...state,
        Pokemons: filteredPokemons,
      };

    case FILTER_BY_TYPE:
      const copyPokemonsType = [...state.CopyPokemons];
      const filteredPokemonType = copyPokemonsType.filter((pokemon) => {
        return pokemon.type.includes(action.payload);
      });
      return {
        ...state,
        Pokemons: filteredPokemonType,
      };

    case POST_POKEMON:
      return {
        ...state,
        Pokemons: [...state.Pokemons, action.payload],
      };

    case RESET:
      return {
        ...state,
        Pokemons: state.CopyPokemons,
      };

    default:
      return state;
  }
};

export default rootReducer;
