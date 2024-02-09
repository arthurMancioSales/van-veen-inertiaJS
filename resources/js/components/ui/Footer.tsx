import Link from "next/link";
import Container from "./Container";
import { Facebook, Instagram } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
    return (
        <Container className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center">
                <hr className="my-5 h-[2px] w-full bg-black opacity-40" />
                <div className="flex w-full items-center justify-between gap-4">
                    <p className="block text-sm font-light">
                        &copy; Instituto Van Veen 2023
                    </p>
                    <div className="flex flex-1 justify-between lg:w-fit lg:grow-0 lg:gap-3">
                        <Link
                            href={"https://www.facebook.com/InstitutoVanVeen"}
                        >
                            <Facebook className="size-6 transition-colors duration-150 hover:text-primary" />
                        </Link>
                        <Link
                            href={
                                "https://www.instagram.com/instituto.vanveen/"
                            }
                        >
                            <Instagram className="size-6 transition-colors duration-150 hover:text-primary" />
                        </Link>
                        <Link href={""}>
                            <BsWhatsapp className="size-6 transition-colors duration-150 hover:text-primary" />
                        </Link>
                    </div>
                </div>
                <hr className="my-5 h-[2px] w-full bg-black opacity-40" />
                <small className="mb-2 text-sm font-light lg:ml-auto lg:self-start">
                    <Link href={""} className="underline">
                        Feito Por Arthur Mancio
                    </Link>
                </small>
            </div>
        </Container>
    );
}
