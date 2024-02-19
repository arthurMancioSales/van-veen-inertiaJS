"use client";

import Container from "@/components/ui/Container";
import { object, string } from "yup";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ContactForm } from "./components/ContactForm";
import Header from "@/components/ui/Header";

interface IResponseSatatus {
    header: string;
    body: string;
}

export default function ContactUs() {
    return (
        <>
            <Header />
            <main className={"flex flex-col items-center justify-start"}>
                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-8">
                        <div>
                            <h2 className="mt-12 text-left text-4xl font-bold text-accent">
                                Entre em contato
                            </h2>
                            <p className="pt-4 indent-6">
                                Estamos ansiosos para ouvir de você! Utilize
                                esta seção para entrar em contato conosco e
                                obter mais informações sobre nossos programas,
                                esclarecer dúvidas ou agendar uma consulta
                                personalizada. Estamos prontos para ajudá-lo(a)
                                a dar o próximo passo em direção à sua educação
                                internacional.
                            </p>
                        </div>
                        <ContactForm />
                    </Container>
                </section>
            </main>
        </>
    );
}
