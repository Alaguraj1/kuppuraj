import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ScrollItem({
  user,
}: {
  user: {
    name: string;
    image: string;
    description: string;
    slug: string;
    designation: string;
  };
}) {
  const router = useRouter();
  return (
    <>
      <Box
        as={motion.div}
        initial={{
          opacity: 0,
          // backgroundImage: "none",
        }}
        whileInView={{
          opacity: 1,
          backgroundImage: `url(${user.image})`,
        }}
        viewport={{
          once: true,
        }}
        onClick={() => router.push(`/team/${user.slug}`)}
        cursor="pointer"
        _hover={{
          width: "200px",
          // hueRotate: '90deg',
          filter: "brightness(1)",
        }}
        rounded={"md"}
        filter={"brightness(0.8)"}
        transition={"all 0.5s ease-in-out"}
        h="300px"
        // className='scroll_element'
        flexShrink={0}
        width={"calc(100% / 20)"}
        // bgColor='black'
        // backgroundImage={`${window.location.origin}/1.jfif`}
        backgroundSize="cover"
        backgroundPosition="top "
        // backgroundImage={user.image}
        position={"relative"}
        // bgColor="white"
        className="parentBox"
      >
        {/* <Image
          rounded='md'
          src={user.image}
          objectPosition={'center top'}
          backgroundColor='#e9e9e9'
          alt='name'
          height='100%'
          width='100%'
          objectFit={'cover'}
        ></Image> */}
        <Box
          roundedBottom={"md"}
          className="desc"
          // display='none'
          width={"100%"}
          bgColor="#00000030"
          backdropBlur={"10px"}
          // filter=''
          backdropFilter={"blur(10px)"}
          // backDropFilter='blur(10px)'
          position="absolute"
          bottom={0}
          p={4}
          transition={"all 0.5s ease-in-out"}
        >
          <Heading color="white" size="md">
            {user.name}
          </Heading>
          <Text color="white">{user.designation}</Text>
        </Box>
      </Box>
    </>
  );
}
