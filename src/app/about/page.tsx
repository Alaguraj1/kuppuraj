"use client";
import { Canvas } from "@react-three/fiber";
import AboutCanvas from "@/app/components/canvas";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { NavBar } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import Vision from "./vision";
import Mission from "./mission";
import React from "react";
import { SideBar } from "../components";

export default function About() {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  return (
    <Box id="about" position="relative" h="fit-content" minH="100vh">
      <NavBar position="absolute" />
      <Flex h="full" position="relative">
        <SideBar words={["Visionary", "Philanthropist", "Industrialist"]} />
        <Grid
          px={[2, null]}
          paddingTop={[5, "80px !important"]}
          w={[null, "calc(100vw - 8rem)"]}
          pl={{ lg: "10" }}
          gap={10}
          // as={Grid}
          gridTemplateColumns={["repeat(1,1fr)", null, "repeat(2,1fr)"]}
          // maxW={'container.xl'}
        >
          <Box as={GridItem}>
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <Box key={0}>
                  <Heading
                    as={motion.div}
                    pt={[0, 5]}
                    key={Math.random()}
                    fontFamily={"neue"}
                    size={"2xl"}
                    fontWeight={"900"}
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Founders
                  </Heading>
                  <Text
                    as={motion.p}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    fontSize={"2xl"}
                    fontWeight={"500"}
                    py={3}
                    pl={2}
                    textAlign={"justify"}
                  >
                    Dr. R. Vasanthakumar <br /> Shri. V. Karthick
                  </Text>
                  <Text
                    as={motion.p}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    fontSize={"lg"}
                    py={2}
                    pl={2}
                    textAlign={"justify"}
                  >
                    Dr. R. Vasanthakumar, the President of Karpagam Academy of
                    Higher Education and an enterprising industrialist, is known
                    for his philanthropy and academic achievements. He holds
                    leadership positions in various companies, employing over
                    700 personnel. With a gold medal from Madras University in
                    Electrical & Electronics Engineering, his academic interests
                    have driven his efforts in the field of education. Dr.
                    Vasanthakumar&apos;s philanthropic endeavors include temple
                    maintenance and the establishment of Panniru Thirumurai
                    Aaivu Mayyam, focusing on research and dissemination of
                    ancient Tamil Saivism literature. His contributions have
                    been recognized through honorary doctorates and titles. He
                    has also served in prestigious associations and
                    organizations, contributing to the industrial and
                    educational sectors. As a corporate member and member of
                    professional bodies, he has been involved in the Coimbatore
                    Stock Exchange and various chambers of commerce. Dr.
                    Vasanthakumar&apos;s extensive international travels have
                    provided him with rich experience and expertise, making him
                    an inspirational figure to many.
                  </Text>
                </Box>
              ) : (
                <React.Fragment key={1}>
                  <Vision key={Math.random()} />
                  <Mission />
                </React.Fragment>
              )}
            </AnimatePresence>
            <Heading
              pt={5}
              fontFamily={"neue"}
              // fontFamily={'bitC'}
              // letterSpacing={'wide'}
              size={"2xl"}
              fontWeight={"normal"}
            >
              {isOpen ? "Vision and Mission" : "Founder"}
            </Heading>
            <Box px={5} py={5}>
              <Button
                onClick={onToggle}
                colorScheme="purple"
                borderRadius={"full"}
                backgroundImage={
                  "linear-gradient(to right top, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #7caaf5, #67b6f9, #54c0fa, #06d1fd, #00e1f5, #07efe4, #5ffbcd)"
                }
                fontSize={"xl"}
                // variant={'outline'}
                px={10}
                py={5}
              >
                View
              </Button>
            </Box>
          </Box>
          <Flex
            pl={5}
            flexDir={"column"}
            justifyContent={"space-between"}
            h={"full"}
            w={"full"}
            display={["none", "flex"]}
          >
            <Box></Box>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <React.Fragment key={Math.random()}>
                  <Box h="full" w="full" position={"relative"}>
                    <Box
                      position="absolute"
                      h="300px"
                      w="full"
                      background="linear-gradient(to right top, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #7caaf5, #67b6f9, #54c0fa, #06d1fd, #00e1f5, #07efe4, #5ffbcd)"
                      // top='30%'
                      bottom="0"
                      left={0}
                      zIndex={-1}
                    ></Box>
                    <Center
                      bottom={0}
                      top={0}
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        position={"absolute"}
                        bottom={0}
                        left={0}
                        transform={"translateX(25%)"}
                        alt="Founder"
                        h="700px"
                        // width={'400px'}
                        src="/assets/images/founder.webp"
                      ></Image>
                    </Center>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment key={Math.random()}>
                  <Box position={"relative"}>
                    <Box
                      position="absolute"
                      h="70%"
                      w="full"
                      background="linear-gradient(to right top, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #7caaf5, #67b6f9, #54c0fa, #06d1fd, #00e1f5, #07efe4, #5ffbcd)"
                      top="30%"
                      left={0}
                      zIndex={-1}
                    ></Box>
                    <Box
                      as={motion.div}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 300 }}
                    >
                      <Image
                        // background: rgb(215,193,219);
                        src={"/assets/images/kahe2.webp"}
                        // mb={5}
                        alt="bg"
                        pb={44}
                        pl={0}
                        pr={0}
                        transform="scaleX(-1)"
                      ></Image>
                    </Box>
                  </Box>
                </React.Fragment>
              )}
            </AnimatePresence>
          </Flex>
        </Grid>
        {/* <AboutCanvas /> */}
      </Flex>
    </Box>
  );
}
