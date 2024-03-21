import axios, { AxiosResponse } from "axios";
import { ApiData } from "../types/dataModels";

export const fetchData = async (): Promise<ApiData> => {
  const response: AxiosResponse<ApiData> = await axios.get(
    "http://localhost:3500/0",
  );
  console.log("data", response.data);
  return response.data; // Here's where you access the data property
};
