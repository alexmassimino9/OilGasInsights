import { ApiData, RechartDataItem } from "../types/dataModels";

export const transformData = (
  apiData: ApiData,
  xDataKey: string,
  yDataKey: string,
  yLabel: string = "value",
): RechartDataItem[] => {
  const xIndex = apiData.headers.indexOf(xDataKey);
  const yIndex = apiData.headers.indexOf(yDataKey);

  if (xIndex === -1 || yIndex === -1) {
    console.error("Invalid data keys provided.");
    return [];
  }

  return apiData.data[xIndex].map((xValue, index) => {
    const date = new Date(xValue * 1000);
    const name = date.toISOString();
    const value = apiData.data[yIndex][index];

    return {
      name,
      [yLabel]: value,
    };
  });
};
