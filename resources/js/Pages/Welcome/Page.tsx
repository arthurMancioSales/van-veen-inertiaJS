import Header from "@/components/ui/Header";
import universityMobile from "/public/images/home/university.svg";
import hero from "/public/images/home/hero.svg";
import woman from "/public/images/home/woman.svg";
import student from "/public/images/home/student.jpg";
import statistics from "/public/images/home/van veen numeros.png";
import Container from "@/components/ui/Container";
import { Calendar, FileCheck2, PenSquare } from "lucide-react";
import Footer from "@/components/ui/Footer";
import HomeCards from "./components/HomeCards";
import InstagramPost from "./components/InstagramFeed/InstagramFeed";
import Testimonial from "./components/Testimonial";
import HomeAccordion from "./components/HomeAccordion";
import { Button } from "@/components/ui/Button";

export default function Welcome() {
    return (
        <>
            <Header />
            <section className="flex flex-col items-center justify-center bg-top bg-no-repeat pb-12 lg:mb-[10vh] lg:h-[92vh] lg:bg-secondary lg:bg-[url(/images/home/clouds_desktop.svg)] lg:p-0">
                <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-x-hidden bg-secondary bg-[url(/images/home/clouds.svg)] bg-top bg-no-repeat md:bg-secondary md:bg-[url(/images/home/university_desktop.svg)] md:bg-contain md:bg-[center_right_-16rem] md:pb-8 lg:h-full lg:max-w-6xl lg:items-start lg:bg-transparent lg:bg-[center_right_-12rem] xl:max-w-none">
                    <img
                        src={universityMobile}
                        alt="University figure"
                        className="absolute bottom-0 max-h-[130%] min-w-[170vw] md:hidden"
                    />

                    <Container className="w-full">
                        <div className="hidden w-[40vw] flex-col items-start justify-center md:flex md:gap-8">
                            <h2 className="text-5xl font-bold uppercase text-accent">
                                Welcome To Van Veen
                            </h2>
                            <p className="text-left indent-6 text-base font-medium text-accent lg:w-80">
                                Prepare-se para o sucesso global. No Instituto
                                Van Veen, você encontra todo apoio necessário
                                para entrar nas melhores universidades do mundo!
                            </p>
                            <a href="#IAI">
                                <Button className="rounded-full">
                                    saiba mais
                                </Button>
                            </a>
                        </div>
                    </Container>
                </div>
                <div className="relative hidden h-[20vh] w-full bg-background md:block md:h-[12vh]">
                    <img
                        src={woman}
                        alt="Woman figure"
                        className="absolute bottom-0 left-[60vw] w-[10vw]"
                    />
                </div>
            </section>

            <section className="mobileG::hidden relative flex h-fit flex-col justify-start gap-6 pb-12 lg:pb-16">
                <Container className="min-h-[30vh]">
                    <div className="relative z-20 flex flex-col items-center justify-center gap-3">
                        <h2 className="text-center text-3xl font-bold text-accent lg:text-4xl">
                            Van Veen
                        </h2>
                        <p className="text-center text-sm lg:max-w-sm">
                            Prepare-se para o sucesso global. No Instituto Van
                            Veen, você encontra todo apoio necessário para
                            entrar nas melhores universidades do mundo!
                        </p>
                        <a href="#IAI">
                            <Button className="rounded-full">saiba mais</Button>
                        </a>
                    </div>
                    <img
                        src={hero}
                        alt="Wave figure"
                        className="absolute right-0 top-[-45%] w-[100vw] lg:hidden"
                    />
                </Container>
            </section>

            <section className="flex h-fit flex-col justify-start gap-6 pb-12 lg:pb-16">
                <Container className="z-10 flex flex-col items-start justify-center gap-4">
                    <h2 className=" text-left text-3xl font-bold text-accent lg:text-4xl">
                        Números recorde
                    </h2>
                    <p className=" text-left indent-6">
                        Nossos resultados falam por si. Com um impressionante
                        recorde de aprovações internacionais, temos orgulho em
                        ajudar estudantes a conquistarem vagas nas melhores
                        universidades ao redor do mundo.
                    </p>
                </Container>
                <Container>
                    <div className="flex flex-col justify-between pb-16 lg:flex-row">
                        <HomeCards />
                    </div>
                    <img
                        src={statistics}
                        alt=""
                        className="mx-auto w-full duration-500 animate-in fade-in-0 slide-in-from-top-0"
                    />
                </Container>
            </section>

            <section className="relative z-10 bg-gradient-to-b from-background from-10% to-secondary pb-12 lg:h-fit lg:bg-secondary lg:bg-none lg:pb-0">
                <div className="relative lg:flex-col">
                    <div className="md:pb-24 lg:flex lg:min-h-fit lg:items-start">
                        <div className="hidden h-[135vh] w-3/5 lg:block xl:max-h-[700px]">
                            <img
                                src={student}
                                alt="Figure"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-8 lg:px-12 lg:pt-8">
                            <Container className="flex flex-col items-start justify-center gap-4">
                                <h2
                                    className="text-left text-3xl font-bold text-accent lg:text-4xl"
                                    id="IAI"
                                >
                                    Conheça o Curso de Introdução à Aplicação
                                    Internacional
                                </h2>
                                <p className=" indent-6 lg:text-base">
                                    Esse o ponto de partida perfeito para quem
                                    deseja iniciar sua jornada de candidatura ao
                                    ensino superior no exterior. Cobrimos todo o
                                    conteúdo necessário para uma aplicação
                                    bem-sucedida, desde a escolha do curso e da
                                    universidade até a redação de uma carta de
                                    motivação convincente. Não se preocupe se
                                    você não tem experiência prévia na área, o
                                    curso é projetado para alunos de todos os
                                    níveis de conhecimento. Prepare-se para dar
                                    os primeiros passos em direção ao seu futuro
                                    acadêmico internacional!
                                </p>
                            </Container>
                            <Container className="flex flex-col items-start justify-center gap-8">
                                <div className="flex flex-col items-start justify-between gap-2 lg:flex-row">
                                    <Calendar className="w-10 lg:w-16" />
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            Organização e método
                                        </h4>
                                        <p className="indent-6">
                                            Aprenda a se organizar de forma
                                            eficiente, desde a seleção das
                                            universidades e prazos importantes
                                            até a criação de um cronograma de
                                            estudos estruturado, para garantir
                                            que você esteja preparado(a) para
                                            cada etapa do processo de
                                            candidatura.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between  gap-2 lg:flex-row">
                                    <PenSquare className="w-10 lg:w-16" />
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            Exames padronizados
                                        </h4>
                                        <p className="indent-6">
                                            Domine as habilidades necessárias
                                            para enfrentar os exames
                                            padronizados, com foco especial em
                                            áreas como o DET e TOEFL, para
                                            alcançar pontuações competitivas que
                                            se destacarão nas suas aplicações.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between gap-2 lg:flex-row">
                                    <FileCheck2 className="w-10 lg:w-16" />
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            Documentação
                                        </h4>
                                        <p className="indent-6">
                                            Descubra o conjunto de documentos
                                            essenciais exigidos pelas
                                            universidades internacionais, desde
                                            históricos acadêmicos e cartas de
                                            recomendação até a tradução e
                                            autenticação de documentos, para
                                            garantir que sua documentação esteja
                                            completa e apresentável.
                                        </p>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="absolute bottom-0 hidden h-28 w-full bg-cover bg-no-repeat lg:block lg:bg-[url(/images/home/testimonial_desktop.svg)]" />
                </div>
            </section>

            <div className="overflow-hidden">
                <section className="h-fit w-full bg-secondary bg-cover py-20 pb-12 lg:bg-transparent lg:pb-16 lg:pt-0">
                    <Container className="h-full">
                        <div className="relative">
                            <Testimonial />
                        </div>
                    </Container>
                </section>
            </div>

            <section className="w-full bg-secondary bg-gradient-to-b from-secondary to-background pb-12 lg:bg-transparent lg:bg-none lg:pb-16">
                <Container className="flex flex-col items-center gap-8">
                    <h2 className="self-start text-left text-3xl font-bold text-accent lg:text-4xl">
                        Ultimas atualizações
                    </h2>
                    <InstagramPost />
                </Container>
            </section>

            <section className="pb-12 lg:pb-16">
                <Container className="flex w-full flex-col items-center justify-center gap-8">
                    <h2 className="self-start text-left text-3xl font-bold lg:text-4xl">
                        Perguntas frequentes
                    </h2>
                    <div className="flex w-full flex-col items-center justify-center">
                        <HomeAccordion />
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}
