import axios from "axios";

export interface FetchResponse<T>{
    count:number;
    results :T[];
} 
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"c6a1ab3262a94ec28695023bc471b63e"
    }
})