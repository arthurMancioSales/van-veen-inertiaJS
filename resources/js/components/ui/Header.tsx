import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon } from "lucide-react";
import { Link } from "@inertiajs/react";
import Menu from "../Menu";
import logo from "/public/images/vanVeenShield.svg";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./NavigationMenu";

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

            <header className="sticky top-0 z-50 bg-secondary py-2 lg:py-3 ">
                <div className="mx-auto flex max-w-xs items-center justify-between gap-2 md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[80rem] 2xl:max-w-[2000px] mobileP:max-w-[17rem]">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleMenu}
                            className="flex flex-row gap-2 lg:hidden"
                        >
                            <MenuIcon className="w-8 text-accent" />
                        </button>
                        <div className="flex w-fit gap-2">
                            <img
                                src={logo}
                                className="size-10"
                                alt="Van Veen Logo"
                            />
                            <h1 className="w-full text-3xl font-bold text-accent">
                                Van Veen
                            </h1>
                        </div>
                    </div>
                    <nav className="hidden gap-4 lg:flex lg:items-center lg:justify-around">
                        <Link
                            href={"/"}
                            className="text-xl font-semibold text-accent underline decoration-transparent transition-all duration-300 ease-in-out hover:text-primary hover:decoration-primary"
                            onClick={() => setMenu(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href={route("home.about")}
                            className="text-xl font-semibold text-accent underline decoration-transparent transition-all duration-300 ease-in-out hover:text-primary hover:decoration-primary"
                            onClick={() => setMenu(false)}
                        >
                            Sobre nós
                        </Link>
                        <NavigationMenu className="w-fit">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent p-0 text-xl font-semibold text-accent underline decoration-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-primary hover:decoration-primary focus:bg-transparent">
                                        Produtos
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="w-40">
                                        <ul className="hidden flex-col gap-2 rounded-md border-[1px] border-accent bg-secondary p-2 md:flex md:w-[400px] lg:w-[200px]">
                                            <NavigationMenuLink className="w-full cursor-pointer rounded-md bg-transparent transition-colors duration-150 hover:bg-accent hover:text-accent-foreground">
                                                <a
                                                    href="https://www.canva.com/design/DAF9k9sr-HM/HMuKnKvzg-G7qGKCpKCyvA/view?utm_content=DAF9k9sr-HM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="block p-2"
                                                >
                                                    ESG Consulting
                                                </a>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink className="w-full cursor-pointer rounded-md bg-transparent transition-colors duration-150 hover:bg-accent hover:text-accent-foreground">
                                                <a
                                                    href="https://www.instagram.com/artenirassilva/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="block p-2"
                                                >
                                                    Seu momento ciência
                                                </a>
                                            </NavigationMenuLink>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div className="flex flex-1 justify-end">
                            <Link
                                href={route("home.contact")}
                                className="cursor-pointer justify-self-end rounded-md bg-primary px-2 py-1 text-xl font-semibold text-accent-foreground duration-300 ease-in-out hover:bg-blue-900"
                                onClick={() => setMenu(false)}
                            >
                                Entre em contato
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
