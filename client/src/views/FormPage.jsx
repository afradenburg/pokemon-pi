import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../redux/actions";
import { validation } from "../helpers/validate";
import { Link } from 'react-router-dom';
import { FormLogin } from "../styled/formStyled";
import { SelectStyled, OptionStyled } from "../styled/selectFavorites";

const PokemonForm = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.Types);
  const [create, setCreate] = useState({
    name: "",
    attack: "",
    defense: "",
    hp: "",
    image: "",
    type: [] // Inicializar como un array vacío para almacenar los tipos seleccionados
  });
  const [errors, setErrors] = useState({
    name: "campo requerido",
    attack: "campo requerido",
    defense: "campo requerido",
    hp: "campo requerido",
    image: "campo requerido",
  });

  const handleChange = (event) => {
    setCreate({
      ...create,
      [event.target.name]: event.target.value
    });
    setErrors(
      validation({
        ...create,
        [event.target.name]: event.target.value
      })
    );
  };

  const handleByType = (event) => {
    const selectedTypes = Array.from(event.target.selectedOptions, (option) => option.value); // Obtener los valores seleccionados en un array
    setCreate({
      ...create,
      type: selectedTypes
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(create)
    dispatch(postPokemon(create));
    setCreate({
      name: "",
      attack: "",
      defense: "",
      hp: "",
      image: "",
      type: [] // Reiniciar el estado de los tipos seleccionados
    });
    alert("Pokemon creado, haz clic en volver");
  };

  function disableHandler() {
    for (let error in errors) {
      if (errors[error] !== "") {
        return true;
      }
    }
    for (let input in create) {
      if (create[input] === "") {
        return true;
      }
    }
    return false;
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={create.name} onChange={handleChange} />
      </label>
      {errors.name && <span>{errors.name}</span>}
      <label>
        Attack:
        <input type="number" name="attack" value={create.attack} onChange={handleChange} />
      </label>
      {errors.attack && <span>{errors.attack}</span>}
      <label>
        Defense:
        <input type="number" name="defense" value={create.defense} onChange={handleChange} />
      </label>
      {errors.defense && <span>{errors.defense}</span>}
      <label>
        HP:
        <input type="number" name="hp" value={create.hp} onChange={handleChange} />
      </label>
      {errors.hp && <span>{errors.hp}</span>}
      <label>
        Image:
        <input type="text" name="image" value={create.image} onChange={handleChange} />
      </label>
      {errors.image && <span>{errors.image}</span>}
      <label>
        Type:
        <SelectStyled onChange={handleByType} type="text" name="type" value={create.type} multiple>
          {types.map((type) => (
            <OptionStyled key={type.name} value={type.name}>
              {type.name}
            </OptionStyled>
          ))}
        </SelectStyled>
      </label>
      <button type="submit" disabled={disableHandler()} >
        Crear Pokemon
      </button>
      <div>
        <Link to={"/home"}>
          <button>
            volver
          </button>
        </Link>
      </div>
    </FormLogin>
  );
};

export default PokemonForm;