import useSWR from "swr";
import { API_BASE } from "../config";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useData(config) {
  const url = new URL(API_BASE);
  for (const key in config) {
    url.searchParams.append(key, config[key]);
  }
  const urlString = url.toString().replaceAll('%2C', ',');
  const { data, error } = useSWR(urlString, fetcher);

  let forecast = new Array((data?.daily?.time)?.length).fill(null).map(() => new Object());
  
  for (const key in data?.daily) {
    for (let i = 0; i < data?.daily[key].length; ++i) {
      forecast[i][key] = data?.daily[key][i];
    }
  }

  return {
    forecast,
    isLoading: !error && !data,
    isError: error
  }
}
