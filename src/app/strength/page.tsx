"use client";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "tabler-icons-react";
import { NavBar } from "../components";
import strengths from "./data";
import { useRouter } from "next/navigation";

export default function Strength() {
  const [active, setActive] = useState("");
  const router = useRouter();

  return (
    <Flex id="strength" flexDir="column" position="relative">
      <NavBar position />
      <Container
        // as={Flex}
        h={{
          lg: "calc(100vh - 80px)",
        }}
        flexDir="column"
        maxW="container.xl"
      >
        <Heading color="black" fontFamily={"neue"} size="2xl">
          Strength
        </Heading>
        <Box pt={10} h="full">
          <Grid
            p={5}
            // flex={1}
            pt={5}
            gap={[5, "10"]}
            gridTemplateColumns={{
              lg: "repeat(5,1fr)",
              md: "repeat(2,1fr)",
            }}
            maxW={"100vw"}
            // display={["flex", "grid"]}
            // overflowX={""}
          >
            {strengths.map((_, i) => (
              <Box
                height={["150px", "200px"]}
                initial={{
                  opacity: 0,
                  // x: i % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                as={motion.div}
                layoutId={`#${_.title}`}
                // flexBasis={"300px"}
                flexFlow={"column"}
                flexGrow={2}
                rounded="xl"
                flexShrink={0}
                // textDecor={"underline"}
                width={"100%"}
                p={3}
                flexWrap={"nowrap"}
                key={i}
                bg="#00000010"
                boxShadow={"lg"}
                _hover={{
                  border: "1px blue solid",
                }}
                whileHover={{ scale: 1.05 }}
                cursor="pointer"
                filter={"saturate(180%)"}
                backdropFilter={"blur(10px) saturate(180%)"}
                border={"1px #ffffff40 solid"}
                onClick={() => {
                  router.push(_.url);
                }}
              >
                <Center h="full">
                  <Heading
                    color=""
                    fontWeight={"semibold"}
                    fontSize="1.6rem"
                    dangerouslySetInnerHTML={{
                      __html: _.title,
                    }}
                    textAlign={"center"}
                  ></Heading>
                </Center>
              </Box>
            ))}
            <Box
              height={["150px", "200px"]}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              as={motion.div}
              // flexBasis={"300px"}
              flexFlow={"column"}
              flexGrow={2}
              rounded="xl"
              flexShrink={0}
              // textDecor={"underline"}
              width={"100%"}
              p={3}
              flexWrap={"nowrap"}
              bg="#00000010"
              boxShadow={"lg"}
              _hover={{
                border: "1px blue solid",
              }}
              whileHover={{ scale: 1.05 }}
              cursor="pointer"
              filter={"saturate(180%)"}
              backdropFilter={"blur(10px) saturate(180%)"}
              border={"1px #ffffff40 solid"}
              onClick={() => {
                window.open("/Speciality Chemicals.pdf");
              }}
            >
              <Center h="full">
                <Heading
                  color=""
                  fontWeight={"semibold"}
                  fontSize="1.6rem"
                  textAlign={"center"}
                >
                  Specialty Chemicals
                </Heading>
              </Center>
            </Box>
          </Grid>
        </Box>
      </Container>
      <AnimatePresence>
        {active && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            bg={"#00000020"}
            h="100vh"
            w="100vw"
            zIndex="200"
            position="fixed"
            top={0}
            left={0}
          >
            <Box
              p={2}
              top={[0, "50%"]}
              left={[0, "50%"]}
              backgroundImage={"linear-gradient(45deg, #01fdf6 ,white 90%)"}
              sx={{
                transform: [
                  "translate(0%,0%) !important",
                  "translate(-50%,-50%) !important",
                ],
              }}
              rounded="lg"
              position="fixed"
              as={motion.div}
              layoutId={`#${active}`}
              height={["full", "500px"]}
              bgColor="white"
              // border="white solid 5px"
              boxShadow={"sm"}
              // color="b"
              backdropFilter={"blur(10px)"}
              width={["full", "800px"]}
              overflowY={"auto"}
            >
              <Box
                position={"absolute"}
                right={0}
                top={0}
                p={1}
                cursor="pointer"
              >
                <X
                  onClick={() => {
                    setActive("");
                  }}
                />
              </Box>
              <Heading
                pt={3}
                textAlign={"center"}
                size="xl"
                fontFamily={"neue"}
                dangerouslySetInnerHTML={{
                  __html: active,
                }}
              ></Heading>
              <UnorderedList pt={3} px={5}>
                {strengths
                  .find((_) => _.title === active)
                  ?.points.map((_) => (
                    <ListItem
                      dangerouslySetInnerHTML={{
                        __html: _,
                      }}
                      fontSize={"2xl"}
                      key={_}
                    ></ListItem>
                  ))}
              </UnorderedList>
              {active ===
                "Active Pharmaceutical Ingredient (API) Development" && (
                <Box px={4} pt={1}>
                  <Heading size="md">Patents</Heading>
                  <Flex fontSize={"xl"} flexDir={"column"}>
                    <Flex gap={5}>
                      <Text
                        w="fit-content"
                        flexShrink={0}
                        textDecor={"underline"}
                      >
                        Title of the patent:
                      </Text>
                      <Text>
                        A mechanochemical process for the synthesis of tropinone
                        derivatives under solvent free conditions
                      </Text>
                    </Flex>
                    <Flex gap={5}>
                      <Text
                        w="fit-content"
                        flexShrink={0}
                        textDecor={"underline"}
                      >
                        Patent No.:
                      </Text>
                      <Text>362154</Text>
                    </Flex>
                    <Flex gap={5}>
                      <Text
                        w="fit-content"
                        flexShrink={0}
                        textDecor={"underline"}
                      >
                        Application No:
                      </Text>
                      <Text>201741033646</Text>
                    </Flex>
                    <Flex gap={5}>
                      <Text
                        w="fit-content"
                        flexShrink={0}
                        textDecor={"underline"}
                      >
                        Date of Grant:
                      </Text>
                      <Text>19.03.2021</Text>
                    </Flex>
                    <Flex gap={5}>
                      <Text
                        w="fit-content"
                        flexShrink={0}
                        textDecor={"underline"}
                      >
                        Patentee:
                      </Text>
                      <Text>
                        R. Parthiban, A. Thangamani, S. Ravi and Karpagam
                        Academy of Higher Education
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Flex>
  );
}
