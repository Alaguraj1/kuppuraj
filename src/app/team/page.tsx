"use client";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavBar, SideBar } from "../components";
import Scroller from "./scroller";
import { teamData } from "./teamdata";
import { Router } from "tabler-icons-react";
import { useRouter } from "next/navigation";

export default function Team() {
  useEffect(() => {
    // document.body.style.backgroundImage = 'unset'
  }, []);
  const router = useRouter();
  return (
    <Box id="team" position="relative" height={"fit-content"} minH={"100vh"}>
      <NavBar position="absolute" />
      <Flex position="relative" display={["block", "flex"]}>
        <SideBar words={["Meaner", "Leaner", "Stronger"]} />
        <Flex
          w={{
            lg: "calc(100vw - 8rem)",
          }}
          pl={{ lg: "10" }}
          gap={5}
          flexDir="column"
          paddingTop={"64px"}
        >
          <Box>
            <Heading
              as={motion.div}
              pt={5}
              key={Math.random()}
              fontFamily={"neue"}
              size={"2xl"}
              // fontWeight={'900'}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              About the Team
            </Heading>
            <Text
              as={motion.p}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              fontSize={"xl"}
              pt={5}
              pl={[null, 2]}
              p={[5, null]}
              textAlign={"justify"}
              maxW={["full", "container.xl"]}
            >
              Welcome to Karpagam Drug Development Center, a leading center
              within an educational institution dedicated to the discovery and
              development of pharmaceutical products. We are driven by a vision
              to improve the quality of human life and make a meaningful
              contribution to society. Under the guidance of our esteemed
              Founder Chairman, Dr. R. Vasanthakumar, our team of highly
              motivated, talented, and experienced experts work diligently to
              achieve our mission and create a positive impact on healthcare.
              <br /> At Karpagam Drug Development Center, we are committed to
              excellence in pharmaceutical development. We prioritize scientific
              rigor, innovation, and collaboration to deliver impactful
              solutions. By bridging the gap between academia and industry, we
              contribute to the advancement of healthcare and the betterment of
              society as a whole. <br />
              Join us on our journey as we strive to develop pharmaceuticals,
              nutraceuticals, and phytoconstituents that improve the quality of
              human life and make a positive impact on the world.
            </Text>
          </Box>
          <Center display={["none", "flex"]} pb={5} id="scl" h="full" flex={1}>
            <Scroller users={teamData} />
          </Center>
          <Flex
            flexDir={"row"}
            maxW={"100vw"}
            overflowY={"scroll"}
            gap={4}
            display={["flex", "none"]}
            p={5}
          >
            {teamData.map((user) => (
              <Box
                flexShrink={0}
                key={user.slug}
                h="500px"
                w="90%"
                bgImage={`url(${user.image})`}
                bgPos={"top"}
                bgSize={"cover"}
                position="relative"
              >
                <Box
                  position={"absolute"}
                  p={2}
                  bgColor="#1e1e1e80"
                  borderRadius={"md"}
                  w="full"
                  h="150px"
                  backdropFilter={"blur(2px)"}
                  bottom={0}
                  left={0}
                >
                  <Heading size="lg" color="white">
                    {user.name}
                  </Heading>
                  <Text color="white">{user.designation}</Text>
                  <Button
                    pos="absolute"
                    bottom={2}
                    onClick={() => {
                      router.push(`/team/${user.slug}`);
                    }}
                    colorScheme="purple"
                    // w="full"
                  >
                    View Profile
                  </Button>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
        {/* <AboutCanvas /> */}
      </Flex>
    </Box>
  );
}
