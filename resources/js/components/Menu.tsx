import { Link } from "@inertiajs/react";
import Container from "./ui/Container";
import { motion } from "framer-motion";
import { Globe2, Home, Phone, X } from "lucide-react";

interface IMenu {
    onChangePage: () => void;
}

export default function Menu({ onChangePage }: IMenu) {
    function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
    }

    const slideIn = {
        hidden: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                type: "Inertia",
                duration: 0.4,
            },
        },
        exit: {
            x: "-100%",
            opacity: 0,
            transition: {
                type: "Inertia",
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div
                className="fixed left-0 top-0 z-[100] h-screen w-[80vw] origin-top-right bg-blue-900 px-4 pt-5 transition"
                onClick={stopPropagation}
            >
                <Container className="flex flex-col items-start justify-start">
                    <div className="flex w-full justify-between">
                        <div className="relative size-10">
                            <img src="/images/vanVeenShield.svg" alt="" />
                        </div>
                        <button onClick={onChangePage}>
                            <X className="h-10 cursor-pointer text-accent-foreground" />
                        </button>
                    </div>
                    <nav className="flex flex-col pt-8">
                        <Link
                            href={"/"}
                            className="flex items-center gap-4 py-2 text-lg font-semibold capitalize text-accent-foreground"
                            onClick={onChangePage}
                        >
                            <Home className="h-6" />
                            home
                        </Link>
                        <Link
                            href={route("home.about")}
                            className="flex items-center gap-4 py-2 text-lg font-semibold capitalize text-accent-foreground"
                            onClick={onChangePage}
                        >
                            <Globe2 className="h-6" />
                            Sobre nós
                        </Link>
                        <Link
                            href={route("home.contact")}
                            className="flex items-center gap-4 py-2 text-lg font-semibold capitalize text-accent-foreground"
                            onClick={onChangePage}
                        >
                            <Phone className="h-6" />
                            Entre em contato
                        </Link>
                    </nav>
                </Container>
            </div>
        </motion.div>
    );
}
