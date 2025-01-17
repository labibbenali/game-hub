import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlateforms";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms:{platform:Platform}[];
  metacritic:number;
  rating_top:number;
}

const useGames=(gameQuery:GameQuery) =>
useData<Game>('/games',{
  params:{
    genres: gameQuery.genre?.id ,
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search:gameQuery.searchText,
  }
}, [gameQuery])
export default useGames;