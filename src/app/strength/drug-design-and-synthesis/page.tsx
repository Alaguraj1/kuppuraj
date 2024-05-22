"use client";

import { MainNavBar } from "@/app/components";
import {
  Box,
  Center,
  Container,
  Grid,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <MainNavBar position={true} />
      <Box
        minH="300px"
        bgImage={"https://etimg.etb2bimg.com/photo/78403474.cms"} // use /imagename.extension if you have downloaded image
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        pos="relative"
        bgPos={"center"} // other values - top , bottom , left , right , top left etc
        _after={{
          position: "absolute",
          content: "''",
          top: 0,
          left: 0,
          height: "full",
          width: "full",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(to right,#00000099 60%,#00000070 100% )",
        }}
      >
        <Container
          position={"relative"}
          zIndex={100}
          maxW={"container.xl"}
          py={10}
        >
          <Heading
            as={"h1"}
            size={"3xl"}
            letterSpacing={"wide"}
            color={"white"}
          >
            Drug Design and Synthesis
          </Heading>
          <UnorderedList color="white" pt={3}>
            <ListItem>Bioinformatics</ListItem>
            <ListItem>Drug designing</ListItem>
            <ListItem>Drug repurposing</ListItem>
            <ListItem>Lead enrichments</ListItem>
            <ListItem>Pesticides designing</ListItem>
            <ListItem>Structural Bioinformatics</ListItem>
            <ListItem>Structural Pharmacogenomics</ListItem>
            <ListItem>Analog designing</ListItem>
            <ListItem>Library of molecules</ListItem>
          </UnorderedList>
        </Container>
      </Box>
      <Container as={"main"} pb={10} maxW={"container.xl"}>
        {/* TEXT - IMAGE Start */}
        <Grid gridTemplateColumns={"repeat(2,1fr)"}>
          <Box p={2}>
            <Heading as={"h1"} pb={5}>
              Exploring the Art and Science of Drug Design and Synthesis{" "}
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              Drug design and synthesis stand at the forefront of medical
              advancements, playing a pivotal role in the development of new
              pharmaceuticals. As we dive into the intricate world of drug
              discovery, it becomes evident that this field is a harmonious
              blend of art and science, where researchers meticulously craft
              molecules with the potential to revolutionize healthcare.
            </Text>
            <Heading as={"h1"} size="md">
              Introduction: Decoding the Complexity of Drug Design
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              In the vast landscape of healthcare, drug design and synthesis
              emerge as essential components, shaping the future of medicine.
              This article delves into the intricacies of this fascinating
              field, unraveling the processes that lead to the creation of
              innovative pharmaceuticals.
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/blog/dds-1.png"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="lg" as={"h1"} pb="5">
              Understanding Drug Design: Crafting Molecules with Precision{" "}
            </Heading>

            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              At its core, drug design involves the strategic creation of
              molecules that interact with specific biological targets. This
              process requires a profound understanding of molecular structures
              and the ability to identify and validate potential drug targets.
              The journey begins with an exploration of the intricacies of
              molecular structures and their role in the design phase
            </Text>

            <Heading size="md" as={"h1"}>
              Key Steps in Drug Synthesis: From Concept to Reality{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The synthesis of drugs is a meticulously orchestrated process that
              transforms theoretical designs into tangible pharmaceuticals. This
              section provides an overview of the key steps involved in drug
              synthesis, highlighting the importance of chemical reactions and
              the role of medicinal chemistry in optimizing drug properties.
            </Text>
            <Heading size="md" as={"h1"}>
              Target Identification and Validation: Navigating the Molecular
              Landscape{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Before a drug can be synthesized, researchers must identify
              suitable targets within the complex molecular landscape of the
              human body. This involves a rigorous process of target
              identification and validation, ensuring that the selected targets
              are both relevant and modifiable for therapeutic purposes.
            </Text>

            <Heading size="md" as={"h1"}>
              Rational Drug Design: Bridging Science and Technology{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Rational drug design represents a marriage of scientific
              principles and technological advancements. This section explores
              how computational techniques and computer-aided design play a
              crucial role in crafting drugs with precision. Examples of
              successful rational drug design underscore the transformative
              power of this approach.
            </Text>
            <Heading size="md" as={"h1"}>
              High-Throughput Screening: Accelerating the Drug Discovery
              Marathon{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              In the race against time, high-throughput screening emerges as a
              game-changer in drug discovery. This section sheds light on the
              significance of screening large compound libraries, accelerating
              the identification of potential drug candidates and expediting the
              overall drug development process.
            </Text>
            <Heading size="md" as={"h1"}>
              Medicinal Chemistry in Drug Development: Balancing Act for
              Efficacy and Safety{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Medicinal chemistry serves as the compass guiding researchers
              through the vast sea of potential drug candidates. This section
              delves into the role of medicinal chemistry in optimizing drug
              properties, emphasizing the delicate balance between efficacy and
              safety. Structure-activity relationship studies take center stage
              in fine-tuning pharmaceutical formulations
            </Text>
            <Heading size="md" as={"h1"}>
              Challenges in Drug Design and Synthesis: Navigating the Unknown{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              No journey is without obstacles, and drug design is no exception.
              This section explores the common challenges faced by researchers,
              from issues related to toxicity and bioavailability to the
              ever-evolving landscape of technology in drug development. Despite
              these challenges, the pursuit of innovative pharmaceuticals
              remains relentless.
            </Text>

            <Heading size="md" as={"h1"}>
              Future Trends in Drug Design: A Glimpse into Tomorrow&apos;s
              Medicine{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              As we stand on the precipice of medical innovation, this section
              peers into the future of drug design. Advancements in technology,
              the integration of artificial intelligence, and the advent of
              personalized medicine present exciting prospects for the evolution
              of pharmaceuticals. The article concludes by emphasizing the
              importance of ongoing research in shaping the future of
              healthcare.
            </Text>
          </Box>
        </Box>
        {/* IMAGE - TEXT End */}

        {/*  */}

        {/* TEXT Start */}
        <Box p={2}>
          <Box p={5}>
            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Conclusion
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              In the dynamic realm of drug design and synthesis, each discovery,
              each molecule crafted, paves the way for tomorrow&apos;s cures. As
              researchers continue to unravel the mysteries of the human body
              and push the boundaries of scientific innovation, the potential
              for groundbreaking pharmaceuticals remains boundless.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
