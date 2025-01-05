import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlateforms";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms:{platform:Platform}[];
  metacritic:number;
}

const useGames=(gameQuery:GameQuery) =>
useData<Game>('/games',{
  params:{
    genres: gameQuery.genre?.id ,
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder
  }
}, [gameQuery])
export default useGames;