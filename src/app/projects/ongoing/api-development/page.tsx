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
            Active Pharmaceutical Ingredients
          </Heading>
          <UnorderedList color="white" pt={3}>
            <ListItem>
              Process developed for the synthesis of following API:
              <UnorderedList>
                <ListItem>
                  <i>Valsartan</i>
                </ListItem>
                <ListItem>
                  <i>Sacubitril</i>
                </ListItem>
                <ListItem>
                  <i>Ivacaftor</i>
                </ListItem>
                <ListItem>
                  <i>Lumacaftor</i>
                </ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem>
              Process development for the synthesis of Key Starting Materials
              (KSM) for following APIs:
              <UnorderedList>
                <ListItem>
                  <i>Atorvastatin</i>
                </ListItem>
                <ListItem>
                  <i>Ivacaftor</i>
                </ListItem>
                <ListItem>
                  <i>Lumacaftor</i>
                </ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem>
              Use of Metarhizium to produce the Destruxin, a fungal secondary
              metabolite to treat Hepatitis B viral Infection
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
              Understanding Active Pharmaceutical Ingredients (APIs): A
              Comprehensive Guide{" "}
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              In the realm of pharmaceuticals, the journey from discovery to a
              market-ready medication is a complex and multifaceted process. At
              the heart of this journey lies API synthesis and process
              development. These critical steps are crucial for transforming a
              drug into a viable therapeutic solution. The intricacies of API
              synthesis and the pivotal role of process development in bringing
              life-changing medications to the public have been discussed in the
              following sections
            </Text>
            <Heading as={"h1"} size="md">
              What is Active Pharmaceutical Ingredients?
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Active Pharmaceutical Ingredients, commonly referred to as APIs,
              are the biologically active components in pharmaceutical drugs.
              These are the substances responsible for conferring therapeutic
              effects on the patient. APIs can be obtained from plant, animal,
              mineral, and/or by chemical synthesis. Development
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/blog/api-1.png"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="lg" as={"h1"} pb="5">
              API Synthesis: Building Blocks of Healing{" "}
            </Heading>

            <Heading size="md" as={"h1"}>
              {" "}
              Active Pharmaceutical Ingredient (API) synthesis{" "}
            </Heading>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              The process of creating the primary active compound responsible
              for a drug&apos;s therapeutic effects. This is where chemical
              ingenuity meets medical need. Chemists meticulously construct,
              modify, and refine molecules to ensure they are effective, safe,
              and compatible with the human body. Drug Discovery and Drug
              Development Phase: It all begins in the lab, where researchers
              identify and develop potential compounds with therapeutic
              properties. This phase involves countless experiments, aiming to
              find the perfect chemical structure that addresses a specific
              medical condition.
            </Text>
            <Heading size="lg" as={"h1"} pb="4">
              Production of API using Microbes{" "}
            </Heading>
            <Heading size="md" as={"h1"}>
              Producing API (Active Pharmaceutical Ingredient) compounds using
              microbes{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              This involves using microorganisms like bacteria, yeast, fungi,
              and sometimes algae, to synthesize specific chemical compounds
              that have therapeutic properties. This approach is commonly
              referred to as microbial fermentation or bioprocessing.
            </Text>
            <Heading size="md" as={"h1"}>
              Selection of Microorganism{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The first step is to choose a suitable microorganism that has the
              capability to produce the desired API compound. This selection is
              crucial, as different microbes have different metabolic pathways
              and capabilities.
            </Text>

            <Heading size="md" as={"h1"}>
              Genetic Engineering (Optional):{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              In some cases, scientists may modify the genetic makeup of the
              chosen microorganism through techniques like genetic engineering.
              This is done to enhance its ability to produce the desired
              compound.
            </Text>
            <Heading size="md" as={"h1"}>
              Fermentation:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The selected microorganism is then grown in large bioreactors
              under controlled conditions. These conditions may include
              temperature, pH level, oxygen levels, and nutrient supply. The
              microbe is provided with a substrate (nutrient source) which it
              metabolizes to produce the target compound.
            </Text>
            <Heading size="md" as={"h1"}>
              Monitoring and Control:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Throughout the fermentation process, various parameters are
              closely monitored and controlled to ensure optimal growth and
              production. This includes monitoring the growth of the
              microorganism, monitoring nutrient levels, and adjusting
              environmental conditions as needed.
            </Text>
            <Heading size="md" as={"h1"}>
              Harvesting:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Once the fermentation process is complete, the culture broth is
              harvested. This contains the desired compound along with other
              components from the fermentation medium.
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
              src="/blog/api-2.jpg"
              h={"300px"}
              pt="5"
              px="10"
            ></Image>
          </Box>
          <Box p={2}>
            <Heading as={"h1"} size="lg" pb="2">
              Emerging Trends in API Development{" "}
            </Heading>

            <Text fontSize={"lg"} textAlign={"justify"} pb="3">
              The landscape of API development is continuously evolving. New
              technologies and methodologies are reshaping the way APIs are
              produced.
            </Text>

            <Heading as={"h1"} size="md">
              Flow Chemistry
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Flow chemistry, also known as continuous-flow chemistry, is a
              modern approach to chemical reactions that takes place in a
              controlled, continuous manner within a flowing stream of
              reactants. Unlike traditional batch processes, where reactants are
              combined in a single vessel and left to react over time, flow
              chemistry occurs in a flow reactor system, where reagents are
              continuously pumped through a series of interconnected reactors
              and mixing modules.
            </Text>
          </Box>
        </Grid>
        {/* IMAGE - TEXT End */}

        {/*  */}

        {/* TEXT Start */}
        <Box p={2}>
          <Box p={5}>
            <Heading size="lg" as={"h1"} pb="5">
              Key Advantages of Flow Chemistry in Custom Synthesis{" "}
            </Heading>

            <Heading size="md" as={"h1"}>
              1. Enhanced Control and Precision:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Flow chemistry offers unprecedented control over reaction
              parameters such as temperature, pressure, residence time, and
              stoichiometry. This level of precision enables chemists to
              fine-tune reactions and achieve highly specific outcomes, crucial
              for custom synthesis.
            </Text>
            <Heading size="md" as={"h1"}>
              2. Safety and Scalability:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Flow reactors are inherently safer than batch reactors, as they
              allow for better control over reaction exotherms and pressure
              build-up. Additionally, flow chemistry is highly scalable, making
              it adaptable for both small-scale research and large-scale
              production
            </Text>
            <Heading size="md" as={"h1"}>
              3. Improved Reaction Kinetics:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The continuous flow of reactants through a system ensures
              efficient mixing, resulting in improved reaction kinetics. This
              often leads to higher yields and reduced byproduct formation,
              enhancing the overall efficiency of custom synthesis processes.
            </Text>

            <Heading size="md" as={"h1"}>
              4. Rapid Optimization:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Flow systems facilitate rapid experimentation and optimization of
              reaction conditions. Researchers can quickly make adjustments to
              parameters and observe the impact on product formation,
              accelerating the development of custom synthesis routes.
            </Text>

            <Heading size="md" as={"h1"}>
              5. Access to Hazardous Chemistry:{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Flow chemistry allows for the safe execution of reactions that are
              otherwise challenging or hazardous in batch processes. This opens
              up opportunities for the synthesis of unique and valuable
              compounds.
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Applications in Custom Synthesis
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Flow chemistry has found applications in a wide range of
              industries that rely on custom synthesis, including
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              1. Pharmaceutical Industry: Pharmaceutical companies are using
              flow chemistry to streamline the synthesis of drug candidates,
              reducing development timelines and increasing the production of
              complex, chiral compounds.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              2. Fine Chemicals and Specialty Chemicals: Manufacturers of fine
              and specialty chemicals are benefiting from the ability to produce
              custom compounds with high purity and selectivity.
            </Text>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              3. Materials Science: Flow chemistry enables the synthesis of
              advanced materials with tailored properties, such as polymers,
              nanoparticles, and nanomaterials
            </Text>

            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              4. Petrochemicals: The petrochemical industry is leveraging flow
              chemistry for the efficient conversion of raw materials into
              valuable chemicals and fuels.{" "}
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Biotechnological Advancements
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Biotechnological approaches are revolutionizing API synthesis,
              allowing for more precise and efficient manufacturing processes.
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                {" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Green Chemistry Initiatives
                </Link>
              </Heading>
            </center>
            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              The pharmaceutical industry is increasingly adopting eco-friendly
              practices in API synthesis, aligning with global sustainability
              goals.{" "}
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
              In conclusion, API synthesis is a critical and intricate process
              that lies at the heart of drug discovery and development. It
              involves the meticulous crafting of compounds that hold the key to
              therapeutic efficacy. From target identification to lead compound
              optimization, and through the rigorous stages of synthesis,
              scientists and researchers work tirelessly to create APIs that
              address specific medical needs.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
