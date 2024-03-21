export interface ApiData {
  headers: string;
  units_of_measure: string[];
  data: number[][];
}
export interface RechartDataItem {
  name: string;
  [key: string]: string | number;
}

export interface TransformedData {
  name: string;
  timestamp?: string;
  depth?: number;
  tubing_pressure?: number;
  casing_pressure?: number;
}

export interface ConfigStructure {
  headers: string[];
  units_of_measure: string[];
  data: number[][];
}

export interface ChartData {
  name: string;
  [key: string]: string | number;
}
