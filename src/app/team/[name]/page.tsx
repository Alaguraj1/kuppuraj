"use client";
import {
  Box,
  Container,
  Text,
  Heading,
  Image,
  Center,
  Grid,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { teamData } from "../teamdata";
import { ArrowLeft, ArrowRight, Home2 } from "tabler-icons-react";
// import { PageProps } from '../../../../.next/types/app/layout';

export default function Page({ params }: { params: { name: string } }) {
  const [user, setUser] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    if (params.name) {
      setUser(teamData.find((user) => user.slug === params.name));
    }
  }, [params.name]);
  const nextProfile = useMemo(() => {
    const index = teamData.findIndex((user) => user.slug === params.name);
    if (index === teamData.length - 1) return teamData[0].slug;
    return teamData[index + 1].slug;
  }, [params.name]);

  const prevProfile = useMemo(() => {
    const index = teamData.findIndex((user) => user.slug === params.name);
    if (index === 0) return teamData[teamData.length - 1].slug;
    return teamData[index - 1].slug;
  }, [params.name]);
  return (
    <>
      <Box zIndex={99} position="absolute" top={5} cursor="pointer" left={5}>
        <IconButton
          color="#f95dff"
          rounded="full"
          icon={<Home2 size={32} />}
          onClick={() => router.push("/")}
          aria-label="home"
        ></IconButton>
      </Box>
      <Box
        position="fixed"
        height={"250px"}
        width={"250px"}
        // bgColor={'white'}
        border="5px white solid"
        rounded="full"
        transform="translate(-50%, -50%)"
        zIndex={2}
      ></Box>
      <Box
        position="fixed"
        top={"50%"}
        right={0}
        height={"250px"}
        width={"250px"}
        // bgColor={'white'}
        border="5px white solid"
        rounded="full"
        transform="translate(50%, -30%)"
        zIndex={2}
      >
        <Box h="full" w="full" position="relative">
          <Box
            rounded={"full"}
            bgColor={"white"}
            // bgImage={"linear-gradient(120deg, #f95dff 20%,#0192ed 100%)"}
            position="absolute"
            // right={10}
            // bottom={10}
            top={"50%"}
            transform={"translate(75%,-50%)"}
            cursor={"pointer"}
          >
            <ArrowRight
              size={50}
              color="#248aef"
              onClick={() => {
                router.push(`/team/${nextProfile}`);
              }}
            />
          </Box>
          <Text
            position="absolute"
            bottom={"30%"}
            pt={3}
            // fontFamily={"ptSans"}
            fontWeight={"bold"}
            transform={"translate(135%, 0%)"}
          >
            Next
          </Text>
        </Box>
      </Box>
      <Box
        position="fixed"
        top={"50%"}
        left={0}
        height={"250px"}
        width={"250px"}
        // bgColor={'white'}
        border="5px white solid"
        rounded="full"
        transform="translate(-50%, -30%)"
        zIndex={2}
      >
        <Box h="full" w="full" position="relative">
          <Box
            position={"absolute"}
            top={"50%"}
            left={"65%"}
            transform="translate(-20%,-50%)"
            bgColor="white"
            rounded="full"
          >
            <ArrowLeft
              size={50}
              color="#f95dff"
              onClick={() => {
                router.push(`/team/${prevProfile}`);
              }}
            ></ArrowLeft>
          </Box>
          <Text
            position="absolute"
            bottom={"30%"}
            pt={3}
            top={"50%"}
            left={"65%"}
            transform="translate(-20%,30%)"
            // fontFamily={"ptSans"}
            fontWeight={"bold"}
          >
            Previous
          </Text>
        </Box>
      </Box>
      <Box
        paddingTop={"80px"}
        height="100vh"
        bgImage="linear-gradient(120deg, #f95dff 20%,#0192ed 100%)"
      ></Box>
      <Container
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        position="fixed"
        maxW="container.xl"
        height="calc(100vh - 64px)"
        as={Grid}
        pl={"28"}
        gridTemplateColumns={"repeat(2, 1fr)"}
      >
        <Center pl={5} h="full" flexDir={"column"} alignItems={"start"}>
          <Heading fontSize={"5xl"} color="white">
            {user?.name}
          </Heading>
          <Text fontSize={"lg"} textAlign={"justify"} maxW="xl" color="white">
            {user?.description}
          </Text>
        </Center>
      </Container>
      <Box>
        <Image
          alt="person"
          src={user?.image}
          position="fixed"
          bottom={0}
          height={"90vh"}
          right={"20%"}
        ></Image>
      </Box>
    </>
  );
}
