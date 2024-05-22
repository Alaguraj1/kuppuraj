'use client';
import React from "react";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";

export default function PageTransition({children}: {children: React.ReactNode}){
    const pathname = usePathname()
    return <motion.div key={pathname} initial={{
        opacity: 0,
    }}
    animate={{
        opacity: 1
    }}>
        {children}
    </motion.div>
}