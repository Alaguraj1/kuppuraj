import { NavBar } from "./components";
import "./globals.css";
import { Providers } from "./provider";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/app/components/pageTransition";
import { useEffect } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //  useEffect()
  return (
    <html lang="en">
      <meta title="Karpagam Drug Development Center"></meta>
      <meta
        name="keywords"
        content="API Synthesis, API Process Development, Analytical Method Development,Pharmaceutical Drug Development,Pre-Clinical Study,Drug Development,Drug Development for Pharmaceutical Industry,Nutraceuticals,Active Pharmaceutical Ingredient Process Development,Isolation of Active Ingredients from Herbs/Plants,Herbal Product Isolation,Specialty Chemicals,Fine Chemicals,Custom Synthesis,Process Development for Off Patent Molecules,Cell line Studies,Development of Nutraceuticals,Nanoformulation,Evaluation of Finished Pharmaceuticals/nutraceuticals, Production of compounds using microbes"
      />
      <meta
        name="description"
        content="API Synthesis, API Process Development, Analytical Method Development,Pharmaceutical Drug Development,Pre-Clinical Study,Drug Development,Drug Development for Pharmaceutical Industry,Nutraceuticals,Active Pharmaceutical Ingredient Process Development,Isolation of Active Ingredients from Herbs/Plants,Herbal Product Isolation,Specialty Chemicals,Fine Chemicals,Custom Synthesis,Process Development for Off Patent Molecules,Cell line Studies,Development of Nutraceuticals,Nanoformulation,Evaluation of Finished Pharmaceuticals/nutraceuticals, Production of compounds using microbes"
      />
      <title>Karpagam Drug Development Center</title>
      <body>
        <Providers>
          {/* <NavBar /> */}
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}
