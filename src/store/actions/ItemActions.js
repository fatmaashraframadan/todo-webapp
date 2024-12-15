import { fetchItems as fetchItemsAPI } from "../../services/api";

export const fetchItems = () => async (dispatch) => {
  dispatch({ type: "FETCH_ITEMS_REQUEST" });
  try {
    const response = await fetchItemsAPI();
    dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_ITEMS_FAILURE", payload: error.message });
  }
};
