import React, {ReactNode} from 'react';
import PokemonsList from "@/app/components/PokemonsList";
import {Box, Typography} from "@mui/material";

interface Props {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginTop: "54px"
            }}>
                <PokemonsList/>
                {children}
            </Box>
        </>
    );
};

export default Layout;