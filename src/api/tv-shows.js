import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
import { FAKE_POPULARS } from "./fake_data";

//https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

//dfbd5e60921632084a3e446dac8a1b8e

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log(response.data.results);
    return response.data.results;
    //return FAKE_POPULARS;
    //perform the request
    //return the response
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    console.log(response.data.results);
    return response.data.results;
    //return FAKE_POPULARS;
    //perform the request
    //return the response
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
