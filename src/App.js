import React, { useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";
// import axios from "axios";
// import Pagination from "./Components/Pagination";
import { fetchAllPokemon } from "./api/server";

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [currentPageUrl, setCurrentPageUrl] = useState("");
  // const [nextPageUrl, setNextPageUrl] = useState();
  // const [prevPageUrl, setPrevPageUrl] = useState();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchPokemon = async () => {
      const response = await fetchAllPokemon();

      console.log("in useEffect on load: ", response.data);
    };
    fetchPokemon();
  }, []);

  // if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
    </>
  );
}

export default App;
