import { loginApi } from "../api/login.api";



const BASE_URL = import.meta.env.VITE_API_URL;

export const  getLogin = async()=>{

    const {data} = await loginApi('/auth/login'); 

    // const heroes = data.heroes.map(hero => ({
    //     ...hero,
    //     image: `${BASE_URL}/images/${hero.image}`
    // }))
    
    return {
        ...data,
        // heroes: heroes,
    };
}