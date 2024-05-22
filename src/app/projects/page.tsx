"use client";
import {
  Flex,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  Grid,
  Text,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { NavBar, SideBar } from "../components";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { ArrowRight, X } from "tabler-icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "./data";
import { useRouter } from "next/navigation";

function ProjectCard({
  title,
  type,
  setter,
}: {
  title: string;
  type: string;
  setter: Dispatch<
    SetStateAction<{
      title: string;
      type: "onGoing" | "completed" | "trtt";
    } | null>
  >;
}) {
  const router = useRouter();
  const [item, setItem] = useState<any>();
  useEffect(() => {
    if (type === "onGoing") {
      let item = projects.onGoing.find((item) => item.title === title);
      if (item?.href === "#") {
        setItem(projects.onGoing.find((item) => item.title === title));
      } else {
        setItem(null);
        router.push(item?.href ?? "/");
      }
    } else if (type === "completed") {
      let item = projects.completed.find((item) => item.title === title);
      if (item?.href === "#") {
        setItem(projects.completed.find((item) => item.title === title));
      } else {
        setItem(null);
        router.push(item?.href ?? "/");
      }
    } else if (type === "trtt") {
      let item = projects.trtt.find((item) => item.title === title);
      if (item?.href === "#") {
        setItem(projects.trtt.find((item) => item.title === title));
      } else {
        setItem(null);
        router.push(item?.href ?? "/");
      }
    }
  }, [title, type, router]);
  return (
    <>
      {item?.title === undefined ? (
        <></>
      ) : (
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
            p={[1, 2]}
            top={[0, "50%"]}
            left={[0, "50%"]}
            backgroundImage={"linear-gradient(45deg, #01fdf6 ,white 90%)"}
            sx={{
              transform: [null, "translate(-50%,-50%) !important"],
            }}
            rounded="lg"
            position="absolute"
            as={motion.div}
            minH={["full", "500px"]}
            bgColor="white"
            boxShadow={"sm"}
            backdropFilter={"blur(10px)"}
            width={["full", "800px"]}
            onClick={() => {
              // setActive("");
            }}
          >
            <Box position={"absolute"} right={0} top={0} p={1} cursor="pointer">
              <X onClick={() => setter(null)} />
            </Box>
            <Heading
              pt={3}
              textAlign={"center"}
              size="xl"
              fontFamily={"neue"}
              dangerouslySetInnerHTML={{
                __html: item?.title,
              }}
            ></Heading>
            <UnorderedList pt={3} px={5}>
              {item?.points &&
                item?.points.map((point: string) => (
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: point,
                    }}
                    fontSize={"xl"}
                    key={point}
                  ></ListItem>
                ))}
              {item?.list &&
                item?.list.map(
                  (point: {
                    title: string;
                    points?: string[];
                    list: { title: string; points: string[] }[];
                  }) => (
                    <ListItem fontSize={"xl"} key={point.title}>
                      <Heading size="md">{point.title}</Heading>
                      <UnorderedList>
                        {point?.points?.map((nestedpoints) => (
                          <ListItem
                            dangerouslySetInnerHTML={{
                              __html: nestedpoints,
                            }}
                            key={nestedpoints}
                            fontSize="xl"
                          ></ListItem>
                        ))}
                        {point?.list?.map((secondNest) => (
                          <ListItem key={secondNest.title} fontSize="xl">
                            <Heading size="md">{secondNest.title}</Heading>
                            <UnorderedList>
                              {secondNest?.points?.map((finalPoints) => (
                                <ListItem
                                  dangerouslySetInnerHTML={{
                                    __html: finalPoints,
                                  }}
                                  key={finalPoints}
                                  fontSize="xl"
                                ></ListItem>
                              ))}
                            </UnorderedList>
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </ListItem>
                  )
                )}
            </UnorderedList>
          </Box>
        </Box>
      )}
    </>
  );
}
const animationBoxesVariant = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      stagger: 0.1,
    },
  },
};

export default function Projects() {
  const [active, setActive] = useState<{
    title: string;
    type: "onGoing" | "completed" | "trtt";
  } | null>(null);

  return (
    <Flex
      id="projects"
      flexDir="column"
      position="relative"
      height="fit-content"
      minH="100vh"
    >
      <AnimatePresence>
        {active !== null && (
          <ProjectCard
            title={active?.title}
            type={active?.type}
            setter={setActive}
          ></ProjectCard>
        )}
      </AnimatePresence>
      <NavBar position></NavBar>
      <Flex>
        <SideBar words={[]} />
        <Container maxW={["full", "container.xl"]}>
          <Box flex={1} h="full" as={Flex} flexDir={"column"}>
            <Box as={Container} maxW={"container.xl"} px={[0, null]}>
              <Heading
                size={["3xl", "4xl"]}
                fontFamily={"monoton"}
                backgroundImage={
                  "linear-gradient(-90deg, #f95dff 20%,#0192ed 100%)"
                }
                backgroundClip={"text"}
              >
                Projects
              </Heading>
              <Text maxW={["full", "xl"]} pt={5} textAlign={"justify"}>
                Welcome to our projects, where groundbreaking ideas take flight
                and transformative solutions become a reality. Here, we embark
                on a journey of collaboration and ingenuity, fueled by our
                unwavering passion for excellence. Join us as we push the
                boundaries of possibility, bringing forth a project that will
                leave a lasting impact and reshape the future.
              </Text>
            </Box>
            <Box px={[1, 4]} py={[5, 0]} flex={1} as={Center}>
              <Grid
                gridTemplateColumns={{
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap={5}
              >
                <Box
                  as={motion.div}
                  variants={animationBoxesVariant}
                  initial="initial"
                  whileInView={"animate"}
                  p={2}
                  // maxW={"390px"}
                  w="full"
                  h={"full"}
                  rounded={"lg"}
                  bgColor="#00000020"
                  backdropFilter={"blur(5px)"}
                  alignSelf={"end"}
                  // maxWidth={"md"}
                >
                  <Heading
                    textTransform={"uppercase"}
                    fontFamily={"neue"}
                    size="lg"
                  >
                    On going
                  </Heading>
                  <Flex flexDir={"column"} mt={2}>
                    {projects.onGoing.map((item, index) => (
                      <Box
                        key={index}
                        cursor="pointer"
                        onClick={() =>
                          setActive({
                            type: "onGoing",
                            title: item.title,
                          })
                        }
                        as={motion.div}
                        // layoutId={`ongoing~${item.title}`}
                      >
                        <Flex
                          flexShrink={0}
                          // alignItems={""}
                          justifyContent={"space-between"}
                        >
                          <Text
                            maxW="80%"
                            fontSize={"xl"}
                            dangerouslySetInnerHTML={{
                              __html: item.title,
                            }}
                            fontWeight={"semibold"}
                          >
                            {/* {item.title} */}
                          </Text>
                          <ArrowRight />
                        </Flex>
                      </Box>
                    ))}
                  </Flex>
                </Box>

                <Box
                  as={motion.div}
                  variants={animationBoxesVariant}
                  initial="initial"
                  whileInView={"animate"}
                  alignSelf={"end"}
                  p={2}
                  maxW={"md"}
                  rounded={"lg"}
                  // height="320px"
                  h={"full"}
                  bgColor="#00000020"
                  backdropFilter={"blur(5px)"}
                >
                  <Heading
                    textTransform={"uppercase"}
                    fontFamily={"neue"}
                    size="lg"
                    // color="white"
                  >
                    Completed
                  </Heading>
                  <Flex flexDir={"column"} mt={2}>
                    {projects.completed.map((item, index) => (
                      <Box
                        key={index}
                        cursor="pointer"
                        onClick={() =>
                          setActive({
                            type: "completed",
                            title: item.title,
                          })
                        }
                      >
                        <Flex
                          flexShrink={0}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            maxW="80%"
                            fontSize={"xl"}
                            fontWeight={"semibold"}
                            dangerouslySetInnerHTML={{
                              __html: item.title,
                            }}
                          >
                            {/* {item.title} */}
                          </Text>
                          <ArrowRight />
                        </Flex>
                      </Box>
                    ))}
                  </Flex>
                </Box>
                <Box
                  p={2}
                  as={motion.div}
                  variants={animationBoxesVariant}
                  initial="initial"
                  whileInView={"animate"}
                  maxW={"md"}
                  rounded={"lg"}
                  // height="320px"
                  bgColor="#00000020"
                  backdropFilter={"blur(5px)"}
                >
                  <Heading
                    textTransform={"uppercase"}
                    fontFamily={"neue"}
                    size="lg"
                  >
                    Technology Ready to Transfer
                  </Heading>
                  <Flex flexDir={"column"} mt={2}>
                    {projects.trtt.map((item, index) => (
                      <Box
                        key={index}
                        cursor="pointer"
                        onClick={() =>
                          setActive({
                            type: "trtt",
                            title: item.title,
                          })
                        }
                      >
                        <Flex
                          flexShrink={0}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            maxW="80%"
                            fontSize={"xl"}
                            fontWeight={"semibold"}
                            dangerouslySetInnerHTML={{
                              __html: item.title,
                            }}
                          ></Text>
                          <ArrowRight />
                        </Flex>
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Flex>
    </Flex>
  );
}
