import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlateforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms:{platform:Platform}[];
  metacritic:number;
  rating_top:number;
}

const useGames=(gameQuery:GameQuery) =>
useQuery<FetchResponse<Game>, Error>({
  queryKey:['games', gameQuery],
  queryFn:()=>
   apiClient.getAll({
    params:{
      genres: gameQuery.genre?.id ,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search:gameQuery.searchText,
    },
  }),
});

export default useGames;