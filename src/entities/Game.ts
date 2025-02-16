import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers:Publisher[];
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  background_image: string;
  metacritic: number;
  rating_top: number;
}
