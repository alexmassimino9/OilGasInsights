import { ChartData } from "../types/dataModels";

export const aggregateData = (
  data: ChartData[],
  maxPoints: number,
  dataKey: string,
): ChartData[] => {
  const interval = Math.ceil(data.length / maxPoints);
  return data.reduce<ChartData[]>((acc, curr, index) => {
    if (index % interval === 0) {
      const end =
        index + interval < data.length ? index + interval : data.length;
      let sum = 0;
      for (let i = index; i < end; i++) {
        sum += data[i][dataKey] as number;
      }
      const avg = sum / (end - index);
      acc.push({ name: curr.name, [dataKey]: avg });
    }
    return acc;
  }, []);
};
