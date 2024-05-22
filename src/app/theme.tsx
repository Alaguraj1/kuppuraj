import localFont from "next/font/local";
import { extendTheme } from "@chakra-ui/react";
import { Inter, Yatra_One, Monoton } from "next/font/google";
import "@fontsource/inter";
const yatra = Yatra_One({
  subsets: ["latin"],
  weight: "400",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
});
const neueUltraBold = localFont({
  src: [
    {
      path: "./assets/fonts/FontsFree-Net-NeueMachina-Ultrabold.ttf",
      weight: "bold",
    },
  ],
});
const ptSansProBold = localFont({
  src: [
    {
      path: "./assets/fonts/PTSansProBold.ttf",
      weight: "bold",
    },
    {
      path: "./assets/fonts/PTSansProRegular.ttf",
      // weight: 'regular',
    },
  ],
});
const bitCountMono = localFont({
  src: [
    {
      path: "./assets/fonts/Hyperspace Race Capsule Light.ttf",
      // weight: 'regular',
    },
  ],
});

const components = {
  Heading: {
    baseStyle: {
      FontFace: yatra.style.fontFamily,
      color: "#2d2d2b",
    },
  },
};
export const theme = extendTheme({
  fonts: {
    neue: neueUltraBold.style.fontFamily,
    ptSans: ptSansProBold.style.fontFamily,
    bitC: bitCountMono.style.fontFamily,
    inter: "Inter",
    yatra: yatra.style.fontFamily,
    monoton: monoton.style.fontFamily,
  },
  components,
  styles: {
    global: {
      body: {
        fontFamily: ptSansProBold.style.fontFamily,
      },
    },
  },
});
