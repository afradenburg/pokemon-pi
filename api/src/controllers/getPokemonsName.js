const axios = require("axios");

async function getPokemonsName(req, res) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const { name } = req.query;
    const { data: pokemons } = await axios.get(`${URL}`);
    
    const result = pokemons.find((pokemon)=>{
        if(name.toLowerCase() === pokemon.name){
            return pokemon
        }
    })
    const pokemonDetail = {
      name: result.name,
      id: result.id,
      image: result.sprites.front_default,
      hp: result.stats.find((props) => props.stat.name === "hp").base_stat,
      attack: result.stats.find((props) => props.stat.name === "attack").base_stat,
      defense: result.stats.find((props) => props.stat.name === "defense").base_stat,
      type: result.types.map((type)=> type.type.name)
    };
    
    pokemonDetail
      ? res.status(200).json(`aqui tienes tu name ${name}`) 
      : res.status(404).json({ message: "este pokemon no existe" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPokemonsName;