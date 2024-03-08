import React from 'react';
import {Box, Typography} from "@mui/material";
import {getOnePokemon} from "@/api/pokemons/getOnePokemon";
import Image from "next/image";

interface Props {
    name?: string
}

const PokemonCard: React.FC<Props> = async ({ name }) => {
    const data = name && await getOnePokemon(name)

    console.log(data)

    return (
        <Box sx={{
            height: "500px",
            background: "black",
        }}>
            <Box sx={{
                paddingTop: 6,
                paddingLeft: 6,
                paddingRight: 6,
                paddingBottom: 2
            }}>
                <Typography color="#A0A0A0" fontWeight={700} fontSize={48} variant="h3">{data?.name || "Выберите покемона"}</Typography>
                {data &&
                    <>
                        <Box sx={{
                            maxHeight: "200px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image width={200} height={200} src={data.sprites.front_default} alt={data.name} />
                        </Box>
                        <Box sx={{
                            marginTop: 6
                        }}>
                            <Typography color="#A0A0A0">
                                Был в {data.game_indices.length} играх <br/>
                                Id: {data.id} <br/>
                                height: {data.height} <br/>
                                attack: {data.moves.length}
                            </Typography>
                        </Box>
                    </>
                }
            </Box>
        </Box>
    );
};

export default PokemonCard;