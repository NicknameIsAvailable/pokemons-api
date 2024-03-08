import React from 'react';
import {getPokemons} from "@/api/pokemons/getPokemons";
import {Box, Chip} from "@mui/material";
import Link from "next/link";

type Pokemon = {
    name?: string
    url?: string
}

const PokemonsList = async () => {
    const data: Pokemon[] = await getPokemons()

    return (
        <Box sx={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap"
        }}>
            {data?.map((item: Pokemon) =>
                <Link href={`/pokemons/${item.name}`}>
                    <Chip sx={{
                        background: "#1986EC",
                        padding: "20px",
                        height: "60px",
                        fontSize: "20px",
                        borderRadius: 100
                    }} color="primary" label={item.name} key={item.name}/>
                </Link>
            )}
        </Box>
    );
};

export default PokemonsList;