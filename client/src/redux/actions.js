import { RESET, REMOVE_FAV, FILTER, ORDER, GET_POKEMONS, GET_POKEMON_BY_NAME, ORDERBYATTACK } from "./actionsTypes";
import axios from "axios";

export const getPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if(!data.length) throw Error('No hay pokemons')
      return dispatch({
        type: GET_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log("Error al traer pokemones", error )
  }
  };
};

export const getPokemonsByName = (nameLower) => {
  const endpoint = `http://localhost:3001/pokemon?name=${nameLower}`
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint)
      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.log("no hay pokemons con ese nombre", error )
    } 
    }
  };


export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const orderByAttack = (orderAttack) => {
  return {
    type: ORDERBYATTACK,
    payload: orderAttack,
  }
};

export function reset() {
  return {
    type: RESET,
  };
}
