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
            Preclinical Studies
          </Heading>
          <UnorderedList color="white" pt={3}>
            <ListItem>
              <i>In vitro</i> assay
            </ListItem>
            <ListItem>Cell line studies</ListItem>
            <ListItem>
              <i>In vivo</i> animal experiments
            </ListItem>
            <ListItem>
              <i>Ex vivo</i> studies
            </ListItem>
            <ListItem>Pharmacokinetic studies</ListItem>
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
              Understanding Preclinical Studies: A Crucial Step in Drug
              Development{" "}
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              When it comes to drug discovery and development, the journey from
              target identification to FDA approval of drugs is long and
              intricate. One of the fundamental stages in this process is
              preclinical studies. These studies are essential for evaluating
              the safety and efficacy of potential drugs before they advance to
              clinical trials involving human subjects.
            </Text>
            <Heading as={"h1"} size="md">
              What Are Preclinical Studies?
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Preclinical studies, also known as preclinical research or
              nonclinical studies, are a vital early phase in drug development.
              These studies involve conducting experiments and testing potential
              drug candidates in laboratory and animal models to gather
              essential data regarding the drug&apos;s safety, toxicity, and
              effectiveness.
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/blog/pc-1.png"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="md" as={"h1"}>
              The primary objectives of preclinical studies are to:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Assess Safety: Determine the safety profile of the drug, including
              potential adverse effects and toxicity levels.
            </Text>
            <Heading size="md" as={"h1"}>
              {" "}
              Determine Dosage:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Establish appropriate dosage levels that can be used in subsequent
              human clinical trials.
            </Text>
            <Heading size="md" as={"h1"}>
              Understand Mechanisms:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Gain insights into the drug&apos;s mechanisms of action and
              potential therapeutic benefits.
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
              src="/blog/pc-2.jpg"
              pt="5"
              px="10"
            ></Image>
          </Box>
          <Box p={2}>
            <Heading as={"h1"} size="lg" pb="2">
              Phases of Preclinical Studies{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Preclinical studies typically occur in two phases:{" "}
            </Text>
            .
            <Heading as={"h1"} size="md">
              In vitro Studies:{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"} pb="3">
              In this phase, preclinical studies are conducted in a laboratory
              setting using various models to understand how a drug or treatment
              may behave in a living organism. These studies help assess the
              drug&apos;s interactions at a cellular or molecular level. These
              studies are essential to evaluate the potential benefits and risks
              associated with the intervention before moving into clinical
              trials involving human subjects. The goal is to establish the
              safety and efficacy of the treatment and gather data that helps
              design further testing in humans.
            </Text>
            <Heading as={"h1"} size="md">
              The Significance of Cell Line Studies
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Cell line studies are a fundamental aspect of preclinical
              research. Cell lines are collections of cells cultured outside of
              their original environment, allowing scientists to study specific
              cellular behaviours and responses to various substances. These
              cell lines are derived from human or animal tissues and are a
              simplified representation of the physiological or pathological
              conditions found within an organism.
            </Text>
          </Box>
        </Grid>
        {/* IMAGE - TEXT End */}

        {/*  */}

        {/* TEXT Start */}
        <Box p={2}>
          <Box p={2}>
            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                Advantages of Using{" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Cell Lines:
                </Link>
              </Heading>
            </center>

            <Heading size="md" as={"h1"}>
              {" "}
              Consistency and Reproducibility:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Cell lines provide a consistent and reproducible platform for
              researchers to study cellular responses consistently, reducing
              variability and ensuring reliable data.
            </Text>
            <Heading size="md" as={"h1"}>
              Cost-Effectiveness:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Working with cell lines is often more cost-effective compared to
              in vivo studies, enabling researchers to conduct a higher number
              of experiments within limited budgets.
            </Text>
            <Heading size="md" as={"h1"}>
              Ethical Considerations:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Using cell lines alleviates ethical concerns related to testing on
              animals or humans, making them a more morally acceptable choice
              for certain types of research.{" "}
            </Text>
            <Heading size="md" as={"h1"}>
              Versatility:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Cell lines can be manipulated and modified to mimic specific
              diseases or conditions, making them a versatile tool for studying
              a wide range of biological processes.{" "}
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Applications of Cell Line Studies
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Drug Screening and Development: Cell lines are widely used to
              screen potential drug candidates and understand their effects on
              specific cell types, aiding in drug development.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Cancer Research: Cell lines derived from cancerous tissues are
              valuable in studying cancer biology, drug responses, and potential
              therapies.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Toxicology Studies: Cell lines are employed to assess the toxicity
              of substances and predict their effects on human health.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Viral Research: Cell lines are pivotal in studying the behaviour
              of viruses, testing antiviral drugs, and developing vaccines.
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Key Aspects of Preclinical Studies
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Toxicology Assessment: Preclinical studies assess the potential
              toxicity of the drug, evaluating its effects on various organs and
              tissues. Understanding toxicity is crucial to ensure the
              drug&apos;s safety for further testing
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Pharmacokinetics and Pharmacodynamics: Researchers study how the
              body absorbs, distributes, metabolizes, and excretes the drug
              (pharmacokinetics) and its effects on the body (pharmacodynamics).
              This data helps determine appropriate dosages and administration
              routes.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Efficacy Testing: The drug&apos;s effectiveness is evaluated by
              testing its impact on the targeted disease or condition in animal
              models. This step helps predict the drug&apos;s potential efficacy
              in human subjects
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
              Preclinical studies play a pivotal role in the drug development
              process, providing crucial insights into a potential drug&apos;s
              safety and efficacy. By conducting rigorous assessments and
              understanding the drug&apos;s behaviour in a controlled
              environment, researchers can make informed decisions on whether to
              progress a drug candidate to the next phase of clinical trials.
              This process ultimately contributes to the development of safe and
              effective medications that improve the health and well-being of
              individuals around the world.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
