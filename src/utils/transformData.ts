// src/utils/transformData.ts
import { ApiData, RechartDataItem } from "../types/dataModels";

export const transformData = (
  apiData: ApiData,
  xDataKey: string, // "timestamp"
  yDataKey: string, //  "tubing_pressure", "casing_pressure, depth_analsys"
  yLabel: string = "value",
): RechartDataItem[] => {
  const xIndex = apiData.headers.indexOf(xDataKey);
  const yIndex = apiData.headers.indexOf(yDataKey);

  if (xIndex === -1 || yIndex === -1) {
    console.error("Invalid data keys provided.");
    return [];
  }

  return apiData.data[xIndex].map((xValue, index) => {
    const name = new Date(xValue * 1000).toLocaleDateString("en-US");
    const value = apiData.data[yIndex][index];

    return {
      name,
      [yLabel]: value,
    };
  });
};
