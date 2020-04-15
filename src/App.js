import React, { useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";
import { fetchAllPokemon } from "./api/server";
import Pagination from "./Components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let response;
    // resets the loading state so it shows loading between api calls
    setLoading(true);
    const fetchPokemon = async () => {
      response = await fetchAllPokemon(currentPageUrl);
      // data has been found, loading false
      setLoading(false);
      // sets urls for button onclicks
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
      // getting just pokemon names atm
      setPokemon(response.data.results.map((pokemon) => pokemon.name));
    };
    fetchPokemon();

    return () => response.cancel();

    // waits till url changes from the button click for next and prev
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </>
  );
}

export default App;
