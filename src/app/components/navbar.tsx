"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../assets/images/kahe.png";
import { Home, Menu, Phone } from "tabler-icons-react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function NavBar({
  gradient = false,
  position,
}: {
  gradient?: boolean;
  position: any;
}) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <>
      <Box
        display={["none", "block"]}
        position={position}
        w="100vw"
        h={20}
        zIndex={99}
        px={{ base: 3, lg: 5 }}
        py={2}
      >
        <Flex
          alignItems="center"
          w="full"
          justifyContent="space-between"
          h="full"
        >
          <Box pt={3}>
            <Image alt="logo" src={Logo.src} h="20"></Image>
          </Box>
          <Box
            display={{
              base: "unset",
              lg: "none",
            }}
          >
            <Menu>
              <MenuButton as={Button}>Actions</MenuButton>
              <MenuList zIndex={999}>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Flex
            display={{
              lg: "flex",
              base: "none",
            }}
            alignItems={"center"}
            gap={5}
          >
            <Box
              px={8}
              cursor={"pointer"}
              py={3}
              rounded="full"
              gap={10}
              bgColor="#ffffff60"
              color="white"
              fontSize={"xl"}
              onClick={() => {
                // router.push("/");
                window.location.replace("/#home");
              }}
              // as={Link}
              // href={"#strength"}
              scrollBehavior={"smooth"}
              backgroundImage={
                gradient
                  ? ""
                  : "linear-gradient(to right top, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #7caaf5, #67b6f9, #54c0fa, #06d1fd, #00e1f5, #07efe4, #5ffbcd)"
              }
            >
              <Home />
            </Box>
            <Flex
              px={10}
              py={3}
              rounded="full"
              gap={10}
              bgColor="#ffffff60"
              color="white"
              fontSize={"lg"}
              backgroundImage={
                gradient
                  ? ""
                  : "linear-gradient(to right top, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #7caaf5, #67b6f9, #54c0fa, #06d1fd, #00e1f5, #07efe4, #5ffbcd)"
              }
            >
              <Box
                cursor="pointer"
                onClick={() => {
                  window.location.replace("/#about");
                }}
              >
                About
              </Box>
              <Box
                cursor="pointer"
                onClick={() => {
                  window.location.replace("/#strength");
                }}
              >
                Strength
              </Box>

              <Box
                cursor="pointer"
                onClick={() => {
                  window.location.replace("/#team");
                }}
              >
                Team
              </Box>
              <Box
                cursor="pointer"
                onClick={() => {
                  window.location.replace("/#projects");
                }}
              >
                Projects
              </Box>
              <Box
                cursor="pointer"
                onClick={() => {
                  window.location.replace("/#facilities");
                }}
              >
                Facilities
              </Box>
            </Flex>
            <Box
              px={8}
              cursor={"pointer"}
              py={3}
              rounded="full"
              gap={10}
              bgColor="#ffffff60"
              color="white"
              fontSize={"lg"}
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=7845811644"
                );
              }}
              // onClick={() => window.location.replace("/#contact")}
              backgroundImage={
                gradient
                  ? ""
                  : "linear-gradient(to right top, #d36ed7, #c17de2, #af8ae9, #9e95ec, #919eec, #7caaf5, #67b6f9, #54c0fa, #06d1fd, #00e1f5, #07efe4, #5ffbcd)"
              }
            >
              <Phone />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
