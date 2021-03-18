import React, { useState, useEffect } from "react";
import { fetchAll } from '../../api/server';
import HeroList from '../../Components/HeroList';
import Pagination from "../../Components/Pagination";


export const MyHeroDex = () => {

  const [heroes, setHeroes] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://myheroacademiaapi.com/api/character?page=${1}`
  );

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let response;
    setLoading(true);

    const fetchHeroes = async () => {
      response = await fetchAll(currentPageUrl);
      console.log(JSON.stringify(response));
      setLoading(false);
      // setNextPageUrl(`https://myheroacademiaapi.com/api/character?page=${response.data.info.currentPage + 1}`);
      // setPrevPageUrl(`https://myheroacademiaapi.com/api/character?page=${response.data.info.currentPage - 1}`);
      setHeroes(response.data.result.map((hero) => hero.name ? hero.name : hero.id));

    }
    fetchHeroes();
    return;
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
      <HeroList hero={heroes} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </>
  );

}




// export default MyHeroDex;