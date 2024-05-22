import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const mission = [
  "To develop cost effective process for synthesis of Active Pharmaceutical Ingredients (APIs)",
  "To develop the process for Key Starting Material (KSM)",
  "To identify new nutraceutical products to improve the quality of human life",
  "To isolate phytoconstituents from natural sources for efficient therapeutic effect",
  "To formulate new dosage forms for effective drug delivery",
  "To identify small molecules for drug discovery",
];

const listVariants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
  hidden: {
    opacity: 0,
    x: 300,
  },
};
const variants = {
  in: {
    opacity: 1,
    x: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 1,
    },
  },
  out: {
    opacity: 0,
    x: -300,
  },
};
export default function Mission() {
  return (
    <>
      <Heading
        as={motion.div}
        variants={variants}
        initial="out"
        animate="in"
        exit={"out"}
        pt={5}
        fontFamily={"neue"}
        // fontFamily={'bitC'}
        // letterSpacing={'wide'}
        size={"2xl"}
        fontWeight={"900"}
      >
        Mission
      </Heading>
      <UnorderedList
        spacing={2}
        py={3}
        px={2}
        fontSize="xl"
        textAlign="justify"
      >
        {mission.map((item, i) => (
          <ListItem
            exit="hidden"
            key={item}
            animate="visible"
            as={motion.li}
            variants={listVariants}
            initial="hidden"
            custom={i}
          >
            {item}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
