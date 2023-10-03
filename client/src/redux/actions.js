import { RESET, REMOVE_FAV, FILTER, ORDER, GET_POKEMONS } from "./actionsTypes";
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

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(endpoint)
      if(data.id > 800 ) throw Error(" No hay favoritos con ese id")
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log("Error al eliminar un favorito", error )
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
export function reset() {
  return {
    type: RESET,
  };
}
