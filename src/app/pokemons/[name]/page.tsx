import React from 'react';
import PokemonCard from "@/app/components/PokemonCard";

interface Props {
    params: {
        name: string
    }
}

const Page: React.FC<Props> = ({ params }) => {
    return (
        <PokemonCard name={params.name} />
    );
};

export default Page;