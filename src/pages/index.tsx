import { Divider, Flex, Image, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { OptionIcon } from "../components/OptionIcon";

export default function Home() {

  return (
    <>
      <Head>
        <title>world trip | Home</title>
      </Head>
      <Header />
      <Banner />
      <Flex direction="column" maxWidth={1480} w="100%" mx="auto" mb="8">


        <SimpleGrid p={["6", "8"]} mt="15" minChildWidth="85px" spacing={["4", "6"]}>
          <OptionIcon image="/cocktail.svg" text="vida noturna" />
          <OptionIcon image="/surf.svg" text="praia" />
          <OptionIcon image="/building.svg" text="moderno" />
          <OptionIcon image="/museum.svg" text="clássico" />
          <OptionIcon image="/earth.svg" text="e mais..." />
        </SimpleGrid>

        <Divider my="6" mx="auto" w="90px" mt="20" borderColor="gray.700" />

        <Stack mx="auto" p={["6", "8"]}>
          <Text mx="auto" fontWeight="bold" color="gray.700" fontSize="30">Vamos nessa?</Text>
          <Text mx="auto" fontWeight="bold" color="gray.700" fontSize="30">Então escolha seu continente</Text>
        </Stack>

        <Carousel />

      </Flex>
    </>
  )
}
