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
            Cancer Research
          </Heading>
          <UnorderedList color="white" pt={3}>
            <ListItem>
              Screening of lead molecules using
              zymography/migration/viability/phosphorylation assays (Bioassay
              guided fractionation) to develop newer TKIs
            </ListItem>
            <ListItem>
              Assessing the efficacy of indigenous herbs or isolated molecules
              using cell-based model systems.
            </ListItem>
            <ListItem>
              Validation of the efficacy of herbs using real-time polymerase
              chain reaction to assess gene expression, immunofluorescence,
              zymography, and western blot analysis
            </ListItem>
            <ListItem>
              Development of a cell line-derived xenograft to ascertain in vivo
              effects of lead molecules
            </ListItem>
            <ListItem>
              Development of a tumor-in-dish model for personalized therapy
            </ListItem>
          </UnorderedList>
        </Container>
      </Box>
      <Container as={"main"} pb={10} maxW={"container.xl"}>
        {/* TEXT - IMAGE Start */}
        <Grid gridTemplateColumns={"repeat(2,1fr)"}>
          <Box p={2}>
            <Heading as={"h1"} pb={5}>
              Introduction{" "}
            </Heading>

            <Text fontSize={"lg"} pb={2} textAlign={"justify"}>
              Cancer, a formidable adversary in the realm of health, continues
              to pose challenges globally. The field of cancer research stands
              at the forefront of the battle against this insidious disease. In
              this article, we delve into the intricate world of cancer
              research, exploring its evolution, current state, technological
              advancements, and the promising future it holds.
            </Text>
            <Heading as={"h1"} size="md">
              Evolution of Cancer Research
            </Heading>
            <Text fontSize={"lg"} textAlign={"justify"}>
              The roots of cancer research trace back through time, marked by
              significant milestones. From early observations to groundbreaking
              discoveries, scientists have tirelessly worked to unravel the
              mysteries of cancer. The journey has been arduous, with each
              breakthrough shedding light on potential avenues for treatment.
            </Text>
          </Box>

          <Box as={Center}>
            <Image
              alt="put image alt text here"
              src="/blog/cr-1.jpg"
              pt="10"
              px="16"
            ></Image>
          </Box>
        </Grid>
        <Box p={2}>
          <Box p={2}>
            <Heading size="md" as={"h1"}>
              {" "}
              Current State of Cancer Research{" "}
            </Heading>

            <Text fontSize={"lg"} pb="5" textAlign={"justify"}>
              Today, cancer research is a dynamic field, witnessing continuous
              progress. Numerous research initiatives around the globe focus on
              understanding the intricacies of different cancer types. From
              genomic studies to clinical trials, the spectrum of ongoing
              research is vast and promising.
            </Text>

            <Heading size="md" as={"h1"}>
              {" "}
              Technological Advancements{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Technology plays a pivotal role in propelling cancer research
              forward. Innovations like high-throughput sequencing and advanced
              imaging techniques provide researchers with unprecedented insights
              into the molecular underpinnings of cancer. These technological
              strides enable more precise diagnostics and targeted therapies
            </Text>
            <Heading size="md" as={"h1"}>
              Screening of lead molecules using zymography{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Zymography screening plays a crucial role in cancer research as a
              valuable technique for studying the activity of matrix
              metalloproteinases (MMPs), enzymes that are closely associated
              with tumor invasion and metastasis. MMPs are responsible for the
              degradation of extracellular matrix components, facilitating the
              spread of cancer cells. Zymography screening is particularly
              valuable in cancer research for several reasons. Firstly, it
              provides researchers with a semi-quantitative assessment of MMP
              activity, allowing for comparisons between normal and cancerous
              tissues. Changes in MMP activity can serve as indicators of tumor
              progression and aggressiveness. Secondly, zymography allows for
              the identification of specific MMPs involved in cancer-related
              processes, providing potential targets for therapeutic
              intervention. Lastly, the technique can be applied to study the
              effects of various treatments on MMP activity, aiding in the
              development of targeted therapies to inhibit metastasis. In
              summary, zymography screening is a powerful tool in cancer
              research, providing insights into the role of MMPs in tumor
              progression and offering potential avenues for the development of
              novel therapeutic strategies
            </Text>

            <Heading size="md" as={"h1"}>
              Types of Cancer Studied
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Cancer is not a singular entity but a diverse group of diseases.
              Researchers concentrate on specific types, such as breast, lung,
              and prostate cancers, tailoring their approaches to the unique
              characteristics of each. This targeted focus enhances the efficacy
              of research outcomes.
            </Text>
            <Heading size="md" as={"h1"}>
              Significance of Early Detection{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Early detection is a crucial aspect of effective cancer
              management. Research endeavors aim to develop sensitive screening
              methods and diagnostic tools that enable the identification of
              cancer at its incipient stages. Timely detection often translates
              to more successful treatment outcomes.
            </Text>
            <Heading size="md" as={"h1"}>
              Treatment Innovations{" "}
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The landscape of cancer treatment is evolving rapidly. From
              traditional chemotherapy to immunotherapy and gene therapy,
              innovative approaches are transforming the therapeutic arsenal
              against cancer. These advancements not only improve treatment
              efficacy but also mitigate side effects
            </Text>

            <Heading size="md" as={"h1"}>
              Precision Medicine: Tailoring Treatments to Individuals
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Advancements in genomics and molecular biology have propelled the
              era of precision medicine, wherein treatments are tailored to the
              specific genetic makeup of each patient&apos;s cancer. This
              personalized approach allows for more effective and targeted
              interventions, minimizing side effects and maximizing therapeutic
              outcomes. Liquid biopsy, a non-invasive method for detecting
              cancer-related genetic mutations through a simple blood test, is
              gaining traction as a powerful tool for guiding treatment
              decisions.
            </Text>

            <Heading size="md" as={"h1"}>
              Future Trends
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The future of cancer research holds exciting possibilities. From
              personalized medicine based on genetic profiles to innovative
              immunotherapies, the trajectory is promising. Continued
              exploration of the tumour microenvironment and the role of the
              microbiome opens new avenues for research.
            </Text>

            <Heading size="md" as={"h1"}>
              Patient Advocacy and Support
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Beyond the laboratory, patient advocacy groups play a vital role.
              Their efforts raise awareness, provide support, and contribute to
              fundraising for research. The patient&apos;s voice is integral in
              shaping the research agenda and ensuring a holistic approach to
              cancer care.
            </Text>

            <Heading size="md" as={"h1"}>
              Global Impact
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Cancer knows no boundaries, and neither does research. The impact
              of cancer research extends globally, influencing healthcare
              policies, treatment accessibility, and collaborative efforts
              across borders. A united front is essential in addressing the
              global burden of cancer.
            </Text>

            <Heading size="md" as={"h1"}>
              Public Awareness
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              Public awareness campaigns contribute significantly to cancer
              research. Disseminating information about prevention, early
              detection, and the importance of research funding fosters a
              proactive approach in communities. Informed individuals are better
              equipped to support the cause.
            </Text>

            <Heading size="md" as={"h1"}>
              Funding Initiatives
            </Heading>
            <Text fontSize={"lg"} pb="3" textAlign={"justify"}>
              The lifeblood of cancer research lies in funding. Governments,
              philanthropic organizations, and individuals play a crucial role
              in sustaining research initiatives. Increased funding not only
              accelerates ongoing projects but also encourages new avenues of
              exploration.
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
              In conclusion, the landscape of cancer research is dynamic and
              holds immense potential. From historical breakthroughs to
              cutting-edge technologies, the journey has been marked by
              resilience and progress. It is incumbent upon society to support
              ongoing research, champion advancements, and collectively strive
              towards a future where the specter of cancer is diminished.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
