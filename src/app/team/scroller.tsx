import React, { MutableRefObject, useEffect, useMemo, useRef } from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

import {
  useMotionValue,
  useTransform,
  motion,
  useAnimate,
  useAnimation,
} from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollControls } from "@react-three/drei";
import ScrollItem from "./scrollItem";
gsap.registerPlugin(ScrollTrigger);
export default function Scroller({
  users,
  reverse = false,
}: {
  users: {
    name: string;
    image: string;
    description: string;
    slug: string;
    designation: string;
  }[];
  reverse?: boolean;
}) {
  const cref = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <Box
      overflowX="hidden"
      overflowY="hidden"
      h="full"
      w="full"
      className="wrap"
    >
      <Flex
        overflow={"hidden"}
        h="full"
        gap={2}
        alignItems={"center"}
        className="scroll_container"
        ref={cref}
        // width={'calc(100px * 17)'}
        justifyContent={"center"}
      >
        {users.map((user, i) => (
          <ScrollItem user={user} key={i} />
        ))}
      </Flex>
    </Box>
  );
}
