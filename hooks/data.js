import useSWR from "swr";
import { API_GAMES_ENDPOINT, API_TEAMS_ENDPOINT } from "../config";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useTeamData() {
  const { data, error } = useSWR(API_TEAMS_ENDPOINT, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useGameData(year) {
  const { data, error } = useSWR(`${API_GAMES_ENDPOINT};year=${year}`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
