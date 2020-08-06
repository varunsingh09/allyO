
import { PENDING, SEARCH_SUCCESS, ERROR} from "./types/index";
import { getHotels } from "./../data/db";


export const fetchHotels = () => dispatch => {
  const hotels = getHotels();
  dispatch({
      type: SEARCH_SUCCESS,
      payload: hotels
  })
}