import useGenres from "./useGenres";
import usePlatform from "./usePlatform"

const useGenre=(id?:number)=>{
    const { data: genres } = useGenres();
    return genres?.results.find((g) => g.id === id);

}

export default usePlatform;