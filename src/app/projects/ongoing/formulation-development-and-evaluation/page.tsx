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
            Formulation and Evaluation
          </Heading>
          <UnorderedList color="white" pt={3}>
            <ListItem>
              Development of a formulation for breast cancer using{" "}
              <i>Annona muricata</i>.
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
              Formulation and Evaluation in Drug Development{" "}
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              The world of pharmaceuticals is constantly evolving, driven by
              innovative research and technology. One of the key aspects in this
              evolution is the formulation and evaluation of drugs, which plays
              a pivotal role in ensuring the safety, efficacy, and stability of
              pharmaceutical products. Additionally, recent advancements have
              led to the emergence of nano formulation development, a
              cutting-edge field with immense potential. The subsequent sections
              of this article share more in detail about the importance of
              formulation and evaluation in pharmaceutical drug development and
              explore the exciting realm of Nano formulation.
            </Text>
            <Heading as={"h1"} size="md">
              Preformulation study in the drug development process
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Preformulation studies are a crucial step in the drug development
              process. They involve a series of experiments and analyses that
              aim to understand the physicochemical properties of a drug
              candidate before it undergoes further formulation and development.
              These studies provide essential information to guide formulation
              development and ensure the drug&aposls safety, efficacy, and
              stability.
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/blog/fde-1.jpg"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="lg" as={"h1"} pb="5">
              Physical Properties{" "}
            </Heading>
            <Heading size="md" as={"h1"}>
              {" "}
              Particle Size and Morphology:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Determining the size and shape of drug particles helps in
              selecting appropriate formulation techniques.
            </Text>
            <Heading size="md" as={"h1"}>
              {" "}
              Crystalline State:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Identifying whether the drug is in an amorphous or crystalline
              form can affect its solubility and dissolution rate.
            </Text>
            <Heading size="lg" as={"h1"} pb="4">
              Chemical Properties{" "}
            </Heading>
            <Heading size="md" as={"h1"}>
              Chemical Structure:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Confirming the chemical identity and purity of the drug substance.
            </Text>
            <Heading size="md" as={"h1"}>
              Stability:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Assessing the drug&aposls stability under various conditions
              (e.g., temperature, humidity, light) to predict its shelf-life.
            </Text>
            <Heading size="lg" as={"h1"} pb="4">
              Solubility and Dissolution Rate:{" "}
            </Heading>
            <Heading size="md" as={"h1"}>
              Solubility:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Confirming the chemical identity and purity of the drug substance.
            </Text>
            <Heading size="md" as={"h1"}>
              Dissolution Rate:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Determines how fast the drug dissolves and becomes available for
              absorption. pH-Dependent Characteristics:
            </Text>
            <Heading size="md" as={"h1"}>
              pKa{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Knowing the pH at which the drug is ionized or unionized helps in
              formulating suitable dosage forms.
            </Text>
            <Heading size="md" as={"h1"}>
              Partition Coefficient:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Log P or Log D: Provides insights into a drug&aposls
              lipophilicity, which influences its absorption and distribution in
              the body.
            </Text>

            <Heading size="md" as={"h1"}>
              Hygroscopicity:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Assessing the drug&aposls tendency to absorb moisture, which can
              affect stability and formulation.
            </Text>
            <Heading size="md" as={"h1"}>
              Bulk Density and Tapped Density:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              These properties are important for determining the amount of drug
              that can be accurately dosed in a formulation.
            </Text>
            <Heading size="md" as={"h1"}>
              Melting Point and Glass Transition Temperature:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              These parameters are important for selecting appropriate
              processing methods (e.g., melting, freeze-drying) during
              formulation.
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
              src="/blog/fde-2.png"
              pt="5"
              px="10"
            ></Image>
          </Box>
          <Box p={2}>
            {" "}
            <Heading as={"h1"} size="lg" pb="2">
              Formulation in Drug Development{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"} pb="3">
              Formulation in drug development refers to the process of creating
              a stable and effective composition of a drug&apos;s active
              pharmaceutical ingredient (API) along with various excipients. The
              goal is to deliver the drug in a manner that maximizes therapeutic
              benefit while minimizing potential adverse effects.
            </Text>{" "}
            <Heading as={"h1"} size="lg" pb="5">
              Key Considerations in Formulation:{" "}
            </Heading>{" "}
            <Heading as={"h1"} size="md">
              Biopharmaceutical Properties:{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Understanding the physicochemical properties of the API is
              crucial. This includes factors such as solubility, permeability,
              and stability, which influence how the drug is absorbed and
              distributed in the body.
            </Text>
          </Box>
        </Grid>
        {/* IMAGE - TEXT End */}

        {/*  */}

        {/* TEXT Start */}
        <Box p={2}>
          <Box p={5}>
            <Heading size="md" as={"h1"}>
              {" "}
              Route of Administration:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Different routes (oral, injectable, topical, etc.) demand
              different formulations. For instance, oral formulations need to
              withstand the harsh conditions of the digestive system, while
              injectables require precise control over solubility and particle
              size.
            </Text>
            <Heading size="md" as={"h1"}>
              Excipient Selection:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Excipients are inactive ingredients that aid in drug delivery.
              These can include fillers, binders, disintegrants, and more. The
              choice of excipients impacts factors like dissolution rate,
              stability, and bioavailability.
            </Text>
            <Heading size="md" as={"h1"}>
              Evaluation in Drug Development{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The evaluation of a pharmaceutical formulation is a critical step
              to ensure its safety, efficacy, and quality. This involves a
              series of rigorous tests and studies to assess various parameters.{" "}
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Key Evaluation Parameters
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Pharmacokinetics: This involves studying how the body processes
              the drug. It encompasses absorption, distribution, metabolism, and
              excretion (ADME) of the drug.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Pharmacodynamics: This assesses the drug&apos;s effect on the body
              and its mechanism of action.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Stability Studies: These tests evaluate the drug&apos;s
              shelf-life, ensuring it maintains its quality and efficacy over
              time
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Bioavailability and Bioequivalence: These studies determine how
              much of the drug is absorbed into the bloodstream and how quickly.
              It also compares different formulations of the same drug.
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Nano formulation Development:
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Nano formulation is an innovative approach in drug delivery that
              involves reducing the size of drug particles to nanoscale
              dimensions. This technology offers several advantages, including
              increased solubility, improved bioavailability, targeted delivery,
              and reduced side effects.
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Benefits of Nano formulation:
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Enhanced Bioavailability: Nano-sized particles have a larger
              surface area, leading to improved absorption in the body.{" "}
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Targeted Drug Delivery: Nanoparticles can be engineered to
              selectively target specific cells or tissues, minimizing
              off-target effects.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Improved Stability: Nano formulations often exhibit greater
              stability, prolonging the shelf-life of the drug
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
              Formulation and evaluation are pivotal steps in the development of
              pharmaceuticals. Through careful consideration of
              biopharmaceutical properties and excipient selection, formulations
              are optimized for maximum therapeutic benefit. Additionally, the
              emergence of nano formulation technology presents an exciting
              frontier in drug delivery, promising enhanced efficacy and
              targeted treatments. As research in these fields continues to
              advance, we can look forward to a future of safer, more effective
              pharmaceutical
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
