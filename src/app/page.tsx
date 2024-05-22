"use client";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Blob from "./canvas/blob";
import { MainNavBar, NavBar } from "./components";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { teamData } from "./team/teamdata";

const About = dynamic(() => import("./about/page").then((mod) => mod.default));
const Team = dynamic(() => import("./team/page").then((mod) => mod.default));
// const Contact = dynamic(() =>
//   import("./contact/page").then((mod) => mod.default)
// );
const Strength = dynamic(() =>
  import("./strength/page").then((mod) => mod.default)
);
const Facilities = dynamic(() =>
  import("./facilities/page").then((mod) => mod.default)
);
const Projects = dynamic(() =>
  import("./projects/page").then((mod) => mod.default)
);
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    teamData.forEach((member) => router.prefetch(member.image));
  }, [router]);
  return (
    <>
      {/* <NavBar gradient={true} position="absolute" /> */}
      <MainNavBar gradient={true} position="absolute" />
      <Box
        as="main"
        id="home"
        minH={"100vh"}
        h="100vh"
        backgroundImage={"linear-gradient(-90deg, #f95dff 20%,#0192ed 100%)"}
        position="relative"
      >
        <Image
          display={["none", "unset"]}
          position={"absolute"}
          bottom={"0"}
          // height={"300px"}
          width={"550px"}
          zIndex={"99"}
          left={"50%"}
          src="/render.gif"
          transform={"translateX(-50%)"}
          // blendMode={"add"}
          // heught={"500px"}
          alt="render"
        ></Image>
        <Box
          position={"absolute"}
          top={"46%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
          zIndex={99}
        >
          <Heading
            fontFamily={"neue"}
            color="#fbfeff"
            textTransform={"uppercase"}
            as={motion.div}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            fontSize={["5xl", "120px"]}
            letterSpacing={"wide"}
            fontWeight={"900"}
            backgroundImage={"linear-gradient(-90deg, #01fdf6 ,white 100%)"}
            backgroundClip={"text"}
            // as={"h1"}
            textShadow={"md"}
            // shadow={'md'}
          >
            Karpagam
          </Heading>
          <Box width={"full"} pt={10} position={"relative"}>
            <Heading
              // as={"h1"}
              width={"full"}
              position={"absolute"}
              top="50%"
              left="49%"
              transform={"translate(-50%, -50%)"}
              fontFamily={"bitC"}
              letterSpacing={"wider"}
              color="#fbfeff"
              textAlign={"center"}
              fontWeight={"900"}
              fontSize={["lg", "32px"]}
              textTransform={"uppercase"}
            >
              Drug Development Center
            </Heading>
          </Box>
        </Box>
        <Box display={["none", "unset"]}>
          <Canvas
            style={{
              touchAction: "none",
            }}
            flat
            linear
            camera={{
              zoom: 1,
            }}
          >
            <Blob></Blob>
          </Canvas>
        </Box>
      </Box>
      <About />
      <Strength />
      <Projects />
      <Facilities />
      <Team />
      {/* <Contact /> */}
      <Box
        // h="16"
        bgImage="linear-gradient(to right, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #99a8ed, #a2b2ed, #acbced,  )"
      >
        <Container
          maxW="container.xl"
          as={Flex}
          justifyContent={"space-between"}
          alignItems="center"
          py={5}
        >
          <Text color="white">
            All rights reserved. © 2023 Karpagam Academy of Higher Education
          </Text>
          <Text color="white">Developed by Hackbox</Text>
        </Container>
      </Box>
    </>
  );
}
