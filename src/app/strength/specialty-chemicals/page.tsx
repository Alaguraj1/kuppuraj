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
        h="300px"
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
            Specialty Chemicals
          </Heading>
          <UnorderedList color="white" pt={3}>
            <ListItem>Formulation of Nutraceutical products</ListItem>
            <ListItem>
              Biological characterization of the{" "}
              <Link href="https://karpagamddc.in/" color="blue">
                {" "}
                nutraceuticals
              </Link>
            </ListItem>
            <ListItem>
              Isolation and characterization of the key constituents from the
              plant source
            </ListItem>
          </UnorderedList>
        </Container>
      </Box>
      <Container as={"main"} pb={10} maxW={"container.xl"}>
        {/* TEXT - IMAGE Start */}
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        >
          <Box p={2}>
            <Heading as={"h1"} pb={5}>
              The Crucial Role of Specialty Chemicals in Pharmaceuticals{" "}
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              The pharmaceutical industry has seen remarkable advancements over
              the years, leading to the development of life-saving drugs and
              therapies that have revolutionized healthcare. At the heart of
              these innovations lie specialty chemicals - the unsung heroes of
              pharmaceuticals. These chemicals play a pivotal role in drug
              discovery, development, and manufacturing, contributing
              significantly to the effectiveness and safety of pharmaceutical
              products. In this blog, we will delve into the world of specialty
              chemicals in pharmaceuticals, exploring their importance, types,
              and key applications.
            </Text>
            <Heading as={"h1"} size="md">
              Understanding Specialty Chemicals
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Specialty chemicals, often referred to as fine chemicals, are a
              diverse group of chemical compounds with unique properties and
              applications. They are typically produced in smaller quantities
              and with a high degree of purity, making them suitable for
              specific functions in various industries, including
              pharmaceuticals. The use of specialty chemicals in pharmaceuticals
              is indispensable, as they serve as the building blocks for drug
              formulation, synthesis, and quality control.
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/aaaa.jpg"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="lg" as={"h1"} pb="5">
              Types of Specialty Chemicals in Pharmaceuticals{" "}
            </Heading>

            <Heading size="md" as={"h1"}>
              {" "}
              1. Intermediates:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              : Specialty chemicals are used as intermediates in the synthesis
              of active pharmaceutical ingredients (APIs). These intermediates
              are essential compounds that form the core structure of a drug
              molecule. They enable chemists to modify and optimize the
              properties of the final drug product, ensuring efficacy and
              safety.
            </Text>

            <Heading size="md" as={"h1"}>
              2. Excipients:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Excipients are inactive substances added to pharmaceutical
              formulations to enhance drug stability, solubility, and
              bioavailability. Specialty chemicals like binders, fillers, and
              disintegrants are used as excipients in tablet and capsule
              formulations. They play a crucial role in drug delivery and
              release.
            </Text>
            <Heading size="md" as={"h1"}>
              3. Catalysts:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Catalysts are substances that accelerate chemical reactions
              without being consumed in the process. In pharmaceutical
              manufacturing, specialty catalysts are vital for efficient and
              selective synthesis of complex molecules. They enable chemists to
              achieve higher yields and purity.
            </Text>

            <Heading size="md" as={"h1"}>
              4. Chiral Compounds:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Chirality, or handedness, is an essential property in drug
              development. Many drug molecules exist as enantiomers, which are
              mirror-image isomers. Specialty chemicals are used to create
              chiral intermediates and resolve enantiomeric mixtures, ensuring
              the production of safe and effective drugs.
            </Text>
            <Heading size="md" as={"h1"}>
              5. Coatings{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Specialty chemical coatings are applied to pharmaceutical dosage
              forms to control drug release, protect against degradation, and
              improve patient compliance. These coatings are essential for
              extended-release and enteric-coated formulations.
            </Text>
            <Heading size="md" as={"h1"}>
              6. Applications of Specialty Chemicals in Pharmaceuticals{" "}
            </Heading>
            <Heading size="md" as={"h1"}>
              7. Drug Discovery:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Specialty chemicals play a pivotal role in the early stages of
              drug discovery by providing the necessary tools for target
              identification, lead optimization, and hit-to-lead development.
              They enable scientists to create and test new chemical entities
              with therapeutic potential.
            </Text>
            <Heading size="md" as={"h1"}>
              8. Process Development:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              In the pharmaceutical industry, the efficient and cost-effective
              synthesis of APIs is critical. Specialty chemicals are employed to
              develop and optimize synthetic routes, ensuring high yields,
              purity, and reproducibility.
            </Text>

            <Heading size="md" as={"h1"}>
              Purification:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The harvested broth goes through a series of purification steps to
              isolate the target compound from other impurities. These
              purification steps may include techniques like filtration,
              chromatography, and crystallization.
            </Text>
            <Heading size="md" as={"h1"}>
              Characterization:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The isolated compound is then characterized to confirm its
              identity, purity, and potency. This involves using various
              analytical techniques to verify that it meets the required quality
              standards.
            </Text>
            <Heading size="md" as={"h1"}>
              Formulation and Packaging:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              After successful characterization, the API is often formulated
              into a final dosage form, such as tablets, capsules, or
              injections. It is then packaged for distribution.
            </Text>
          </Box>
        </Box>
        {/* TEXT - IMAGE End */}

        {/*  */}

        {/* IMAGE - TEXT Start */}
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        >
          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/bbbbbb.jpg"
              pt="5"
              px="10"
            ></Image>
          </Box>
          <Box p={2}>
            {" "}
            <Heading as={"h1"} size="lg" pb="2">
              {" "}
              Quality Control:{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"} pb="3">
              Rigorous quality control measures are essential in pharmaceutical
              manufacturing to ensure product safety and efficacy. Specialty
              chemicals are used in analytical techniques such as
              high-performance liquid chromatography (HPLC) and mass
              spectrometry (MS) for precise and accurate analysis of drug
              samples.
            </Text>{" "}
            <Heading as={"h1"} size="md">
              {" "}
              Formulation:{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Formulating a drug product that is stable, effective, and
              patient-friendly is a complex task. Specialty excipients,
              coatings, and solubilizers are employed to create formulations
              that meet these criteria while ensuring ease of administration.
            </Text>
          </Box>
        </Grid>
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
              Specialty chemicals are the unsung heroes of the pharmaceutical
              industry, driving innovation and ensuring the development of safe
              and effective drugs. From drug discovery to formulation and
              manufacturing, these chemicals are integral to every step of the
              pharmaceutical process. As the industry continues to evolve, the
              role of specialty chemicals will only become more prominent,
              leading to the creation of breakthrough therapies that improve and
              save countless lives. So, the next time you take a medication,
              remember the significant contribution of specialty chemicals in
              making it possible.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
