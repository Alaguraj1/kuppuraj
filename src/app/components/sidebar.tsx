"use client";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export function SideBar({ words }: { words: string[] }) {
  return (
    <Box
      display={{
        base: "none",
        lg: "unset",
      }}
      h="calc(100vh - 80px)"
      w={32}
      // position='absolute'
      // left={0}
      // top={0}
    >
      <Flex
        position="absolute"
        top="0"
        bgColor={"yellow"}
        left="0"
        w="32"
        h="100vh"
        backgroundImage="linear-gradient(to bottom, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #99a8ed, #a2b2ed, #acbced, #c5cbf1, #dadcf5, #eeedfa, #ffffff 50%)"
        flexDir="column"
        alignItems={"center"}
        justifyContent="space-between"
        py={10}
        gap={10}
      >
        <Box></Box>
        <Grid
          gap={words.includes("Meaner") ? "20" : "24"}
          pb={10}
          gridTemplateRows={"repeat(3,1fr)"}
        >
          {words.map((word) => (
            <Text
              flexShrink={0}
              key={word}
              height="fit-content"
              transform="rotate(-90deg)"
              fontFamily={"inter"}
              fontSize={"md"}
              color="black"
            >
              {word}
            </Text>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
