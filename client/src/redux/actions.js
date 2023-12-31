import {
  RESET,
  ORDER,
  POST_POKEMON,
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  ORDER_BY_ATTACK,
  GET_POKEMON_DETAIL,
  ORDER_BY_CREATE,
  GET_TYPES,
  FILTER_BY_TYPE,
} from "./actionsTypes";
import axios from "axios";

export const getPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      // console.log(data)
      if (!data.length) throw Error("No hay pokemons");
      return dispatch({
        type: GET_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log("Error al traer pokemones", error);
    }
  };
};

export const getTypes = () => {
  const endpoint = "http://localhost:3001/types";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!data.length) throw Error("No hay tipos");
      return dispatch({
        type: GET_TYPES,
        payload: data,
      });
    } catch (error) {}
  };
};

export const getPokemonsByName = (nameLower) => {
  const endpoint = `http://localhost:3001/pokemon?name=${nameLower}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert("asi no se llama ningun pokemon");
    }
  };
};

export const getPokemonsByDetail = (id) => {
  const endpoint = `http://localhost:3001/pokemons/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_POKEMON_DETAIL,
        payload: data,
      });
    } catch (error) {
      alert("error al mostrar detalles");
    }
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
    type: ORDER_BY_ATTACK,
    payload: orderAttack,
  };
};

export const orderByCreate = (orderCreate) => {
  return {
    type: ORDER_BY_CREATE,
    payload: orderCreate,
  };
};

export const filterByType = (type) => {
  return {
    type: FILTER_BY_TYPE,
    payload: type,
  };
};

export const postPokemon = (props) => {
  const endpoint = "http://localhost:3001/pokemons";
  const { name, attack, defense, hp, image, type } = props;

  return async (dispatch) => {
    try {
      await axios.post(endpoint, { name, attack, defense, hp, image, type });
      return dispatch({
        type: POST_POKEMON,
        payload: { name, attack, defense, hp, image, type },
      });
    } catch (error) {
      alert("Error al crear pokemon", error);
    }
  };
};

export function reset() {
  return {
    type: RESET,
  };
}
