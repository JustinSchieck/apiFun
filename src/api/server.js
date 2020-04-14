import axios from "axios";

export const fetchAllPokemon = (payload) => {
  const URL = `https://pokeapi.co/api/v2/pokemon`;
  return axios(URL, {
    method: "GET",
    headers: {
      "content-type": "application/json", // whatever you want
    },
    data: payload,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
