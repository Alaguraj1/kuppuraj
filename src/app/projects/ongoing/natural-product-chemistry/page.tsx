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
            "linear-gradient(to right,#00000099 30%,#ffffff10 100% )",
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
            Natural Product Chemistry
          </Heading>
          <UnorderedList pt={3} color="white">
            <ListItem>
              Isolation and anticancer potential of phytoconstituents from
              Annona muricata.
            </ListItem>
            <ListItem>
              Isolation and characterization of active principles from
              Phyllanthus niruri against paracetamol induced hepatotoxicity.
            </ListItem>
            <ListItem>
              Phytopharmaceutical drug development from Centella asiatica for
              the treatment of Alzheimer&apos;s Disease. The bioactive compounds
              found in C. asiatica will be screened for rescuing abnormal
              amyloid beta production in the neural cells.
            </ListItem>
            <ListItem>
              Studies on the antibacterial, anticancer and antidiabetic
              potential of Leucas aspera in streptozotocin-nicotinamide induced
              diabetes.
            </ListItem>
            <ListItem>
              The role of growth factor driven metastasis of cancers and to
              develop phyto-based interventions to circumvent this process. A
              three pronged approach viz., cell based, computational and
              humanized mice model/chemical induced carcinogenesis in small
              experimental rats/mice is used to evaluate the efficacy of lead
              molecules to assess drugability. The centre is also focusing on
              spheroid and organoids based model system establishment to assess
              the drug efficacy for personalized medicine.
            </ListItem>
            <ListItem>
              Anticancer activity of Aloe Vera formulation against NMU and
              Testosterone induced prostate cancer in Wistar Albino Rats.
            </ListItem>
            <ListItem>
              Targeting alpha synuclein protein and dopaminergic neurons as a
              treatment for Parkinson’s disease using Salvia miltiorrhiza
              extract.
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
              Exploring Natural Product Chemistry:{" "}
            </Heading>
            <Heading as={"h1"} size="md" pb={1}>
              {" "}
              Isolating Active Ingredients from Herbs
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              Natural product chemistry is a fascinating field that involves the
              study of compounds produced by living organisms, primarily plants,
              for various biological activities. Herbs, which are plants valued
              for their medicinal, aromatic, or edible qualities, often contain
              a rich array of bioactive compounds. These compounds have the
              potential to be used in the development of pharmaceuticals,
              nutraceuticals, and other health-related products.
            </Text>
            <Heading as={"h1"} size="md">
              Understanding Natural Product Chemistry
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Natural product chemistry explores the isolation of active
              ingredients derived from herbs and organisms found in nature.
              These compounds can include a wide range of substances, such as
              alkaloids, flavonoids, terpenes, essential oils, and more. Many of
              these compounds have significant biological properties and can be
              utilized for various therapeutic purposes. Herbs, in particular,
              are a valuable source of bioactive compounds. They have been used
              for centuries in traditional medicine to treat ailments and
              enhance well-being. Modern natural product chemistry allows us to
              identify and isolate these bioactive compounds, gaining a deeper
              understanding of their potential benefits.
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/blog/npc-1.png"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="lg" as={"h1"} pb="5">
              The Isolation Process
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The isolation of active ingredients from herbs involves a series
              of systematic steps to obtain pure compounds from the complex
              mixture present in the plant material. Here is a general outline
              of the isolation process:
            </Text>
            <Heading size="md" as={"h1"}>
              Collection and Identification of Herbs:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The first step involves carefully collecting plant samples,
              ensuring proper identification of the herb species. Taxonomic
              experts are often involved in verifying the correct botanical
              identity.
            </Text>
            <Heading size="md" as={"h1"}>
              Extraction of Compounds:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The plant material is subjected to an extraction process using
              various solvents (e.g., ethanol, methanol, water) to obtain a
              crude extract. The choice of solvent depends on the polarity of
              the desired compounds.
            </Text>
            <Heading size="md" as={"h1"}>
              Fractionation and Separation:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The crude extract is then fractionated to separate it into
              different fractions based on their properties (e.g., polarity,
              molecular weight). Techniques like chromatography (e.g., column
              chromatography, thin-layer chromatography) are used for this
              purpose.
            </Text>
            <Heading size="md" as={"h1"}>
              Isolation and Purification:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The isolation of the active ingredient from herbs can be achieved
              by further purifying the fractions using techniques like
              preparative chromatography, crystallization, or distillation. This
              process yields pure compounds that can be further characterized.
            </Text>
            <Heading size="md" as={"h1"}>
              Characterization and Analysis:
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The isolated active ingredients from herbs are characterized using
              various analytical techniques such as nuclear magnetic resonance
              (NMR) spectroscopy, mass spectrometry (MS), and infrared (IR)
              spectroscopy. These analyses help identify the chemical structure
              and confirm the purity of the compounds.
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
              src="/blog/npc-2.jpg"
              height={"350px"}
              pt="5"
              px="10"
            ></Image>
          </Box>
          <Box p={2}>
            {" "}
            <Heading as={"h1"} size="lg" pb="6">
              Types of Active Ingredients{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The active ingredients which are isolated from the herbs can vary
              widely and include different classes of compounds:
            </Text>{" "}
            <Heading as={"h1"} size="md">
              Alkaloids
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"} pb="3">
              Alkaloids are nitrogen-containing compounds often derived from
              amino acids. They can have potent effects on the human body and
              are found in herbs like opium poppy (morphine), cinchona
              (quinine), and Ephedra (ephedrine).{" "}
            </Text>{" "}
            <Heading as={"h1"} size="md">
              Flavonoids:{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Flavonoids are a class of polyphenolic compounds known for their
              antioxidant and anti-inflammatory properties. They are abundant in
              herbs such as chamomile, ginkgo biloba, and green tea.
            </Text>
          </Box>
        </Grid>
        {/* IMAGE - TEXT End */}

        {/*  */}

        {/* TEXT Start */}
        <Box p={2}>
          <Box p={2}>
            <Heading size="md" as={"h1"}>
              Terpenes:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Terpenes are a diverse group of compounds found in many herbs and
              are responsible for their characteristic odours. They have a wide
              range of biological activities and are present in herbs like
              lavender, rosemary, and eucalyptus.
            </Text>
            <Heading size="md" as={"h1"}>
              Essential Oils:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Essential oils are volatile compounds with distinct aromas, often
              extracted from aromatic herbs such as lavender, peppermint, and
              citrus fruits. They possess antimicrobial, antifungal, and
              relaxing properties.
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                Potential{" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Applications
                </Link>
              </Heading>
            </center>
            <Text
              fontSize={"xl"}
              fontWeight={"600"}
              pb="8"
              textAlign={"center"}
            >
              The future of{" "}
              <Link href="https://karpagamddc.in/" color="blue">
                The isolated
              </Link>{" "}
              active ingredients from herbs have a multitude of potential
              applications:
            </Text>

            <Heading size="md" as={"h1"}>
              {" "}
              Pharmaceuticals:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              These compounds can be used as the basis for developing new drugs
              to treat various diseases, from pain management to infectious
              diseases.
            </Text>
            <Heading size="md" as={"h1"}>
              Nutraceuticals:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Active ingredients can be incorporated into dietary supplements to
              support health and well-being, providing natural alternatives to
              synthetic supplements.
            </Text>
            <Heading size="md" as={"h1"}>
              Cosmetics and Personal Care Products:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Many active ingredients have beneficial effects on the skin and
              hair, making them valuable components of cosmetic products.{" "}
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
              Aromatherapy:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Essential oils, rich in active compounds, are extensively used in
              aromatherapy for their therapeutic and mood-enhancing properties.
            </Text>
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
              Natural product chemistry and the isolation of active ingredients
              from herbs are vital aspects of modern scientific research. The
              diverse range of bioactive compounds found in herbs holds enormous
              potential for improving human health and well-being. As we
              continue to unlock the secrets of these natural treasures, we may
              discover novel treatments and solutions that have the power to
              revolutionize medicine and enhance our quality of life.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
