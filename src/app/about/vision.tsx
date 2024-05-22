import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <Box key={Math.random()}>
      <Heading
        pt={5}
        fontFamily={"neue"}
        // fontFamily={'bitC'}
        // letterSpacing={'wide'}
        size={"2xl"}
        fontWeight={"900"}
        as={motion.div}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
      >
        Vision
      </Heading>
      <Text
        px={2}
        py={3}
        fontSize="xl"
        as={motion.div}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        textAlign={"justify"}
      >
        To discover and develop pharmaceutical products to improve the quality
        of human life and contribute to the society.
      </Text>
    </Box>
  );
}
