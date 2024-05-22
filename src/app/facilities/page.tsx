"use client";
import {
  Flex,
  Container,
  Heading,
  Box,
  Center,
  HStack,
  Image,
} from "@chakra-ui/react";
import { NavBar } from "../components";
import { randomUUID } from "crypto";
import { AnimatePresence, motion } from "framer-motion";
import SvgDesign from "../components/svgDesign";
import { useState } from "react";
import { X } from "tabler-icons-react";
import { StCanvas } from "../strength/canvas";
import facilities from "./facilities";
const equipmentList = [
  "High Performance Liquid Chromatography (HPLC)",
  "FT-IR spectrophotometer",
  "Fluorescence spectrophotometer",
  "UV-Visible Spectrophotometer",
  "Dissolution Apparatus",
  "Thermal Analyzer",
  "DSC Thermal analyser",
  "Fermentor 10L",
  "Phase Contrast Microscope with sophisticated camera",
  "Ultra High Performance Liquid Chromatography (UHPLC)",
  "Gas Chromatography",
  "Atomic Absorption Spectroscopy",
  "Polymerase Chain Reaction and RT-PCR",
  "Biophotometer (Eppendorf).",
  "Gene Gun",
  "Protean® i12™ IEF cell & CHEMI DOC",
  "Cytogenetic analysis",
  "Gene mutational analysis",
  "ELISA Reader",
  "Animal model generation",
  "Stem Cell model generation",
  "Centrifuge",
  "Cooling Microcentrifuge",
  "Thermal Blocker",
  "Lyophilizer",
  "20L Reactor",
  "Flow Reactor",
  "Rotary Evaporator (Buchi)",
  "Flash Chromatography (Advion)",
  "Photocatalytic reactor",
  "Microwave synthesizer",
  "Microwave oven",
  "Animal cell culture facility",
  "Fluorescence Microscope (Accuscope)",
  "Inverted Microscope (Magnus)",
  "CO2 Incubator (Thermo Scientific)",
  "Laminar Flow Hood",
  "2D Gel Electrophoresis",
  "pH Meter",
  "Commercial Molecular Modelling Software - SchrÖdinger",
];
interface facility {
  name: string;
  text: string;
  image: string;
}
export default function Facilities() {
  const [active, setActive] = useState<facility | null>();
  return (
    <>
      <Flex
        id="facilities"
        pb={3}
        position={"relative"}
        flexDir="column"
        minH={"100vh"}
        maxW={"100vw"}
        overflowY={"hidden"}
        overflowX={"hidden"}
        // h="100vh"
      >
        <AnimatePresence>
          {active && (
            <Box
              h="full"
              w="100vw"
              bgColor="#00000030"
              position="fixed"
              top={0}
              left={0}
              zIndex={9900}
              as={Center}
            >
              <Box
                pos={"relative"}
                as={motion.div}
                layoutId={active.name}
                h={["full", "400px"]}
                bgColor="white"
                p={5}
                rounded="xl"
                w={["full", "650px"]}
                zIndex={990}
                overflowY="auto"
              >
                <Box
                  cursor="pointer"
                  onClick={() => setActive(null)}
                  top={2}
                  right={2}
                  position={"absolute"}
                >
                  <X />
                </Box>
                <HStack justifyContent={"space-between"}>
                  <Heading
                    // color={"white"}
                    fontFamily={"neue"}
                    size={"lg"}
                    fontWeight={"900"}
                    textAlign={"center"}
                  >
                    {active?.name}
                  </Heading>
                  <Image w="150px" src={active.image} alt={active.name}></Image>
                </HStack>
                <Box
                  px={3}
                  dangerouslySetInnerHTML={{
                    __html: active.text,
                  }}
                ></Box>
              </Box>
            </Box>
          )}
        </AnimatePresence>
        <NavBar position></NavBar>
        <Container maxW="container.xl">
          <Heading size="2xl" fontFamily={"neue"}>
            Facilities/Sophisticated Instruments
          </Heading>
          <Flex flexWrap={"wrap"} pt={10} justifyContent={"center"} gap={"5"}>
            {facilities.map((_, i) => {
              return (
                <Box
                  as={motion.div}
                  layoutId={_.name}
                  initial={{
                    x: i % 2 == 0 ? 100 : -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  width={"fit-content"}
                  px={3}
                  height={"50px"}
                  border={`3px solid ${
                    i % 3 == 0 ? "#08fdf6" : i % 2 == 0 ? "#5bbcf9" : "#f85cff"
                  }`}
                  cursor={"pointer"}
                  _hover={{
                    bgColor:
                      i % 3 == 0
                        ? "#08fdf6"
                        : i % 2 == 0
                        ? "#5bbcf9"
                        : "#f85cff",
                    shadow: "md",
                  }}
                  transition={"all 300ms"}
                  rounded="full"
                  // bgColor="red"
                  key={i}
                  flexShrink={0}
                  onClick={() => setActive(_)}
                >
                  <Center h="full" fontSize={"md"}>
                    {_.name}
                  </Center>
                </Box>
              );
            })}
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
