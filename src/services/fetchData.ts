import axios, { AxiosResponse } from "axios";
import { ApiData } from "../types/dataModels";
import Config from "../config";
export const fetchData = async (): Promise<ApiData> => {
  const response: AxiosResponse<ApiData> = await axios.get(Config.API_URL);
  console.log("data", response.data);
  return response.data;
};
