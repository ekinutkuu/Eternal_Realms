import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const fetchRealms = async () => {
   try {
      const response = await axios.get(`${BASE_URL}/realms`);
      return response.data;
   } catch (error) {
      if (error.response) {
         console.error(`${error.response.status}: ${error.response.data}`);
      }
      console.error("Error Fetching Realms:", error);
      throw error;
   }
};
