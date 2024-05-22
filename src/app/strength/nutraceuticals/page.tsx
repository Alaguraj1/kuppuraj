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
            Nutraceticals
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
            <Heading as={"h1"} pb={10}>
              Understanding Nutraceuticals
            </Heading>
            <Heading as={"h1"} size="md">
              Definition and Purpose
            </Heading>
            <Text fontSize={"lg"} pb={8} textAlign={"justify"}>
              Nutraceuticals are bioactive compounds found in foods or
              formulated as supplements, possessing health benefits beyond basic
              nutrition. They aim to prevent, manage, or treat various diseases
              and enhance overall health.
            </Text>
            <Heading as={"h1"} size="md">
              The Role of Nutraceuticals in Health
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Nutraceuticals play a vital role in promoting health and
              preventing diseases. They contribute to well-being by addressing
              specific health concerns, providing necessary nutrients, and
              supporting bodily functions.
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/assets/strength/1.jpg"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="lg" as={"h1"} pb="5">
              Types Of Nutraceuticals
            </Heading>
            <Heading size="md" as={"h1"}>
              Functional Foods
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Functional foods are everyday food items fortified with additional
              health-promoting ingredients, offering health benefits beyond
              basic nutrition. Examples include fortified cereals and probiotic
              yogurt.
            </Text>
            <Heading size="md" as={"h1"}>
              Dietary Supplements
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              With the advent of personalized medicine and genetic testing,
              nutraceuticals are likely to become tailored to an
              individual&apos;s genetic makeup, lifestyle, and specific health
              needs. Customized formulations can optimize health outcomes
            </Text>
            <Heading size="md" as={"h1"}>
              Herbal Products
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Herbal nutraceuticals are derived from plants and plant extracts,
              known for their medicinal properties and health benefits. These
              may include botanicals like ginseng and turmeric.
            </Text>
            <Heading size="md" as={"h1"}>
              Vitamins and Minerals
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Vitamins and minerals are essential micronutrients vital for
              various bodily functions. Nutraceuticals in this category often
              provide these nutrients in concentrated forms.
            </Text>
            <Heading size="md" as={"h1"}>
              Development of Nutraceuticals
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Advancements in technology, science, and consumer demand have
              propelled the nutraceutical industry into a diverse and innovative
              field. Presently, nutraceuticals encompass a wide range of
              products, including dietary supplements, functional foods,
              fortified beverages, herbal extracts, vitamins, minerals,
              probiotics, and more.
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
              src="/assets/strength/2.jpg"
              pt="5"
              px="10"
            ></Image>
          </Box>
          <Box p={2}>
            {" "}
            <Heading as={"h1"} size="lg" pb="10">
              Key Components of{" "}
              <Link href="https://karpagamddc.in/" color="blue">
                Nutraceuticals
              </Link>{" "}
              Development
            </Heading>{" "}
            <Heading as={"h1"} size="md">
              Research And Discovery
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"} pb="3">
              Nutraceutical development begins with extensive research to
              identify bioactive compounds in various foods and plants.
              Scientists analyze these compounds to understand their potential
              health benefits.{" "}
            </Text>{" "}
            <Heading as={"h1"} size="md">
              Formulation And Standardization
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              Once potential compounds are identified, the next step involves
              formulating products with specific concentrations and combinations
              to optimize their health effects. Standardization ensures
              consistent potency and quality
            </Text>
          </Box>
        </Grid>
        {/* IMAGE - TEXT End */}

        {/*  */}

        {/* TEXT Start */}
        <Box p={2}>
          <Box p={2}>
            <Heading size="md" as={"h1"}>
              Clinical Trials And Safety Assessment
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Rigorous clinical trials and safety assessments are conducted to
              validate the efficacy and safety of nutraceuticals. These trials
              provide valuable data for regulatory approval and consumer
              confidence.
            </Text>
            <Heading size="md" as={"h1"}>
              Regulatory Compliance
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              <Link href="https://karpagamddc.in/" color="blue">
                Nutraceuticals
              </Link>{" "}
              must adhere to regulatory standards and guidelines to ensure
              consumer safety and product efficacy. Compliance with regulations
              is a crucial aspect of the development process.
            </Text>

            <Heading size="md" as={"h1"}>
              Market Availability and Consumer Education
            </Heading>
            <Text fontSize={"lg"} pb="10" textAlign={"justify"}>
              Nutraceuticals need to be accessible to the general public.
              Effective marketing strategies and consumer education campaigns
              are essential to inform individuals about the benefits and proper
              usage of nutraceuticals{" "}
            </Text>

            <center>
              {" "}
              <Heading size="xl" as={"h1"} pb="5">
                Future{" "}
                <Link href="https://karpagamddc.in/" color="blue">
                  Outlook
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
                nutraceutical
              </Link>{" "}
              development is promising, driven by evolving consumer preferences,
              technological advancements, and ongoing scientific research. Here
              are some anticipated trends shaping the future of nutraceuticals:
            </Text>

            <Heading size="md" as={"h1"}>
              {" "}
              Personalized Nutrition
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              With the advent of personalized medicine and genetic testing,
              nutraceuticals are likely to become tailored to an
              individual&apos;s genetic makeup, lifestyle, and specific health
              needs. Customized formulations can optimize health outcomes.
            </Text>
            <Heading size="md" as={"h1"}>
              Plant-Based{" "}
              <Link href="https://karpagamddc.in/" color="blue">
                Nutraceutical
              </Link>
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The rise in plant-based diets and sustainable practices will lead
              to an increase in plant-based nutraceuticals. Consumers are
              seeking natural, plant-derived products with minimal environmental
              impact.
            </Text>
            <Heading size="md" as={"h1"}>
              Microbiome-Focused Nut. raceuticals
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              As our understanding of the gut microbiome deepens, nutraceuticals
              targeting gut health and the microbiome are expected to gain
              traction. Probiotics and prebiotics will continue to be at the
              forefront.{" "}
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
              Data-Driven Insights
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Advancements in data analytics and artificial intelligence will
              enable companies to analyze vast amounts of data, gaining insights
              into consumer preferences, efficacy of nutraceuticals, and
              emerging health trends.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
