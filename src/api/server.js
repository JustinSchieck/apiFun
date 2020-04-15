import axios from "axios";

export const fetchAllPokemon = () => {
  const URL = `https://pokeapi.co/api/v2/pokemon`;
  axios
    .get(URL)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
