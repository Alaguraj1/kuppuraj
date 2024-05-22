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
        bgPos={"right"} // other values - top , bottom , left , right , top left etc
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
            Analytical Method Development
          </Heading>
          <UnorderedList pt={3} color="white">
            <ListItem>
              Method developed and validated using Waters HPLC for the following
              molecules and ready for method transfer
              <UnorderedList>
                <ListItem>Paracetamol</ListItem>
                <ListItem>Metformin</ListItem>
                <ListItem>Pantoprazole</ListItem>
                <ListItem>Atorvastatin</ListItem>
                <ListItem>Eugenol</ListItem>
                <ListItem>Valsartan</ListItem>
                <ListItem>Sacubitril</ListItem>
                <ListItem>Penicillin</ListItem>
                <ListItem>Streptomycin</ListItem>
                <ListItem>Povidone-Iodine</ListItem>
                <ListItem>Ivacaftor</ListItem>
              </UnorderedList>
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
              Concept of Analytical Method Development :{" "}
            </Heading>
            <Heading as={"h1"} size="md" pb={1}>
              Their current strategical approaches:{" "}
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              Analytical method development is the cornerstone of ensuring the
              quality, safety, and efficacy of pharmaceuticals and
              nutraceuticals. Whether it&apos;s an Active Pharmaceutical
              Ingredient (API), a finished pharmaceutical product, or a
              nutraceutical, precise and reliable analytical methods are
              imperative for regulatory compliance and consumer trust. This blog
              describes deeply the intricacies of analytical method development
              for the vital components of the healthcare industry.
            </Text>
            <Heading as={"h1"} size="md">
              Understanding the Significance of Analytical Methods
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Analytical methods are protocols that define how a particular
              property or characteristic of a substance is measured. In the
              pharmaceutical and nutraceutical industries, these methods are
              employed to assess the identity, purity, potency, and stability of
              substances. Robust analytical methods are critical for
              establishing product specifications, validating manufacturing
              processes, and ensuring batch-to-batch consistency. The
              development process typically follows these steps:
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/blog/ad-1.jpg"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="md" as={"h1"}>
              Selection of Analytical Technique:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Depending on the nature of the compound and the desired attribute,
              various techniques such as high-performance liquid chromatography
              (HPLC), gas chromatography (GC), spectrophotometry, and mass
              spectrometry may be employed
            </Text>
            <Heading size="md" as={"h1"}>
              {" "}
              Method Optimization:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              This step involves fine-tuning parameters like mobile phase
              composition, column type, wavelength, and sample preparation
              techniques to achieve the best separation and detection of target
              compounds.
            </Text>
            <Heading size="md" as={"h1"}>
              Specificity and Selectivity:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The method should be able to accurately measure the target
              analyte(s) without interference from other components in the
              sample matrix.
            </Text>
            <Heading size="md" as={"h1"}>
              Linearity and Range:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The method should exhibit a linear response over a defined
              concentration range, allowing for accurate quantification at
              different levels of analyte concentration.
            </Text>
            <Heading size="md" as={"h1"}>
              Precision and Accuracy:
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The method should yield consistent and reproducible results
              (precision) and the results should be close to the true value
              (accuracy).
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
              src="/blog/ad-2.png"
              pt="5"
              px="10"
            ></Image>
          </Box>
          <Box p={2}>
            <Heading as={"h1"} size="lg" pb="10">
              API Analytical Method Development{" "}
            </Heading>

            <Heading as={"h1"} size="md">
              Characterization and Identification:{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"} pb="3">
              The first step in API method development involves characterizing
              and identifying the substance. Techniques like High-Performance
              Liquid Chromatography (HPLC), Mass Spectrometry (MS), and Nuclear
              Magnetic Resonance (NMR) spectroscopy are commonly used for this
              purpose.{" "}
            </Text>
            <Heading as={"h1"} size="md">
              Purity and Impurity Profiling:
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              It&apos;s essential to determine the purity of the API and
              quantify any impurities present. Gas Chromatography (GC), HPLC,
              and Thin Layer Chromatography (TLC) are often used for this
              assessment.
            </Text>
          </Box>
        </Grid>
        {/* IMAGE - TEXT End */}

        {/*  */}

        {/* TEXT Start */}
        <Box p={2}>
          <Box p={2}>
            <Heading size="md" as={"h1"}>
              Potency Assays:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              These assays measure the biological activity or strength of the
              API. They are crucial for ensuring that the product meets its
              intended therapeutic effect. Techniques like bioassays or
              High-Performance Liquid Chromatography (HPLC) can be used for
              potency determination.
            </Text>
            <Heading size="md" as={"h1"}>
              Stability-Indicating Methods:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              These methods are designed to detect any degradation or changes in
              the API over time. They are crucial for establishing shelf-life
              and storage conditions.
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                Finished Pharmaceutical Product{" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Analytical Method Development
                </Link>
              </Heading>
            </center>

            <Heading size="md" as={"h1"}>
              {" "}
              Assay and Content Uniformity:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              These methods ensure that the finished product contains the
              correct amount of API and that the distribution of the API is
              consistent throughout the dosage form.
            </Text>
            <Heading size="md" as={"h1"}>
              Dissolution Testing:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              It measures how quickly the API is released from the dosage form,
              which is critical for assessing bioavailability.
            </Text>
            <Heading size="md" as={"h1"}>
              Impurity Testing:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Similar to API development, it&apos;s crucial to identify and
              quantify impurities in finished products.{" "}
            </Text>
            <Heading size="md" as={"h1"}>
              Innovative Delivery Systems
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The development of novel delivery methods, such as nanotechnology
              and encapsulation, will enhance the bioavailability and efficacy
              of nutraceuticals, leading to better health outcomes.{" "}
            </Text>
            <Heading size="md" as={"h1"}>
              Microbiological Testing:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              This ensures that the product is free from microbial
              contamination, which is vital for patient safety.
            </Text>
            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Nutraceutical Analytical Method Development
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              a. Ingredient Identification: Like APIs, nutraceuticals need to be
              characterized and identified using techniques like HPLC, LC-MS,
              and NMR.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              b. Potency and Purity Assays: Ensuring that the nutraceutical
              contains the claimed amount of active ingredients is crucial for
              its efficacy.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              c. Stability Testing: Nutraceuticals, like pharmaceuticals,
              require stability-indicating methods to establish shelf-life and
              storage conditions.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
