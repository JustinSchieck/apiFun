import axios from "axios";

export const fetchAllPokemon = async (url) => {
  let cancel;
  let data;
  await axios
    .get(url, { cancelToken: new axios.CancelToken((c) => (cancel = c)) })
    .then(function (response) {
      console.log(response);
      data = response.data;
    })
    .catch(function (error) {
      console.log(error);
      window.alert("error: ", error);
    });
  return { data, cancel };
};
