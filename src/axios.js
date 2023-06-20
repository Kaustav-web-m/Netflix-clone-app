import axios from "axios";

/* base url to make requests to the databases*/
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

/*
instance.get('/foo-bar');
above url gets append to the base url : https://api.themoviedb.org/3/foo-bar
*/

export default instance;
