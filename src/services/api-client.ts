import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"c6a1ab3262a94ec28695023bc471b63e"
    }
})