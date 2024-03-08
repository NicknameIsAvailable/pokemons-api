import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import {Box, Container, Typography} from "@mui/material";
import Image from "next/image";
import FingerIcon from "/public/icons/finger.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemons API",
  description: "Test task for Evil Union",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <main className={styles.main}>
      <Container sx={{
        paddingTop: "100px",
        paddingBottom: "100px"
      }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box border={"white 1px solid"} display="flex" justifyContent="center" alignItems="center" padding={"7px"} width={"100px"}>
            <Typography fontWeight={500} textAlign="center" color={"white"} fontSize={12} variant="h1">ПОКЕМОНЫ API</Typography>
          </Box>
          <Box display="flex" gap="10px">
            <Image src={FingerIcon} alt="Палец"/>
            <Typography color="white" fontSize="12px">Нажмите на <br/> нужное Покемона</Typography>
          </Box>
        </Box>
        {children}
      </Container>
    </main>
    </body>
    </html>
  );
}
