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
  const fetchPokemon = async () => {
    const data = await fetchAllPokemon();
    data.results.map((p) => setPokemon(p.name));
  };

  useEffect(() => {
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
