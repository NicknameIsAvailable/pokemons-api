import api from "@/api";

export const getOnePokemon = async (name: string) => {
    const data = await api.get(`/pokemon/${name}`)
    const results = data.data
    return results
}