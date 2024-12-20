import axios from "axios";
import { URL_HOST_API } from "../constants/Constants";
import { AuthError, NetworkError } from "../error/APIErrors";
import HttpStatus from "http-status-codes";

/**
 * Retrieves a list of endpoints from the API.
 *
 * @returns {Promise} A promise that resolves with endpoint data or rejects with an error
 */
export const listEndpointsApi = () => {
  return get(`${URL_HOST_API}/endpoints`);
};

/**
 * Gets a random image or GIF from the available categories along with its metadata.
 *
 * @returns {Promise} A promise that resolves with endpoint data or rejects with an error
 */
export const listCategoriesApi = (category) => {
  return get(`${URL_HOST_API}/${category}`);
};

/**
 * Gets a random image or GIF from the available categories along with its metadata.
 * The amount query may be used to retrieve multiple assets at once. The amount is a number such that 1 ≤ X ≤ 20.
 *
 * @returns {Promise} A promise that resolves with endpoint data or rejects with an error
 */
export const listCategoriesCountApi = (category, count) => {
  return get(`${URL_HOST_API}/${category}?amount=${count}`);
};

/**
 * Performs a GET request to a given URL with specified options
 *
 * @param {string} url - The URL to fetch data from
 * @param {Object} [options={}] - Additional request options
 * @returns {Promise} The response data from the request
 */
async function get(url, options = {}) {
  const fetchOptions = {
    method: "get",
    ...options,
  };

  const headers = fetchOptions.headers || {};
  return fetchData(url, { headers });
}

/**
 * Wrapper for Axios to simplify HTTP requests and error handling
 *
 * @param {string} url - The URL to send the request to
 * @param {Object} options - Request configuration options
 * @returns {Promise} The response from the API
 */
async function fetchData(url, options) {
  try {
    const response = await axios({
      url,
      ...options,
    });
    return response.data;
  } catch (error) {
    // Handle server response errors
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case HttpStatus.UNAUTHORIZED:
          throw new AuthError(
            "Unauthorized access. Please check your credentials."
          );

        case HttpStatus.BAD_REQUEST:
          throw new Error(data?.message || "Invalid request.");

        case HttpStatus.NOT_FOUND:
          throw new Error(data?.message || "Resource not found.");

        default:
          throw new Error(data?.message || "An unknown server error occurred.");
      }
    }

    // Handle network errors
    if (error.request) {
      console.error("No response received from the server:", error.request);
      throw new NetworkError("Network error or no response received.");
    }

    // Handle other unexpected errors
    console.error("Unexpected error:", error.message);
    throw new Error("An unexpected error occurred.");
  }
}
