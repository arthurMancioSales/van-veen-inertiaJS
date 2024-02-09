"use client";

import { useState } from "react";
import Menu from "../Menu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon } from "lucide-react";

export default function Header() {
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
    }

    const fadeIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <>
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {menu ? (
                    <motion.div
                        className="fixed z-[90] h-screen w-[100vw] bg-[#00000060]"
                        onClick={() => setMenu(!menu)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeIn}
                    >
                        <Menu onChangePage={toggleMenu} />
                    </motion.div>
                ) : (
                    ""
                )}
            </AnimatePresence>

            <header className="sticky top-0 z-50 flex items-center justify-start gap-2 bg-secondary px-6 py-2 lg:px-20 lg:py-3">
                <button
                    onClick={toggleMenu}
                    className="flex flex-row gap-2 lg:hidden"
                >
                    <MenuIcon className="w-8 text-white" />
                </button>
                <h1 className="text-xl font-semibold text-white lg:hidden">
                    Van Veen
                </h1>
                <nav className="hidden w-full gap-4 lg:flex lg:items-center lg:justify-between">
                    <Link
                        href={"/"}
                        className="ansition-all te text-xl font-semibold text-white underline decoration-transparent duration-300 ease-in-out hover:text-black hover:decoration-black"
                        onClick={() => setMenu(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href={"/about-us"}
                        className="ansition-all te text-xl font-semibold text-white underline decoration-transparent duration-300 ease-in-out hover:text-black hover:decoration-black"
                        onClick={() => setMenu(false)}
                    >
                        Sobre nós
                    </Link>
                    <div className="flex flex-1 justify-end">
                        <Link
                            href={"/contact-us"}
                            className="te cursor-pointer justify-self-end rounded-md bg-primary px-2 py-1 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-blue-900"
                            onClick={() => setMenu(false)}
                        >
                            Entre em contato
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}