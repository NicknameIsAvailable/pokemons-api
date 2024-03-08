import api from "@/api";

export const getPokemons = async () => {
    const data = await api.get("/pokemon")
    const results = data.data.results
    return results
}