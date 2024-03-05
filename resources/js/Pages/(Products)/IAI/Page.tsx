import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import { cn } from "@/lib/cn";
import { Check, Quote } from "lucide-react";

const courseModules = [
    {
        id: 1,
        name: "projetos voluntários",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
    {
        id: 2,
        name: "organização e método",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
    {
        id: 3,
        name: "college list",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
    {
        id: 4,
        name: "portfolio",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
    {
        id: 5,
        name: "TOEFL",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
    {
        id: 6,
        name: "Common App",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
    {
        id: 7,
        name: "DET",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
    {
        id: 8,
        name: "Essays",
        lectures: [
            {
                id: 1,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 2,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
            {
                id: 3,
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
                duration: "10:00",
            },
        ],
    },
];

export default function IaiProductPage() {
    return (
        <>
            <Header />

            <section className="flex h-[70vh] bg-[url(/images/products/iai/universityStudents.jpg)] bg-cover bg-[center_right_-16rem]">
                <div className="size-full bg-black/70">
                    <Container className="flex h-full flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h2 className="max-w-[70%] text-center text-4xl font-bold text-white">
                                Conheça o Curso de Introdução à Aplicação
                                Internacional
                            </h2>
                            <p className="text-center text-sm text-white">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus saepe voluptas
                                excepturi explicabo veritatis a eos beatae ea
                                totam sapiente, molestiae nesciunt amet tempore
                                quae est repudiandae. Suscipit nostrum
                                exercitationem odio aliquid temporibus, facere
                                repellendus laboriosam eaque, minus ut sed
                                dolor, ex in doloribus quis magnam! Eum itaque
                                autem eaque.
                            </p>
                        </div>
                        <Button
                            className="rounded-full border-2 border-white capitalize text-white"
                            variant={"ghost"}
                        >
                            saiba mais
                        </Button>
                    </Container>
                </div>
            </section>

            <section>
                <Container className="flex items-center justify-between gap-12 py-20">
                    <p className="max-w-[40%] leading-6 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum ducimus qui nulla accusamus soluta.
                        Ratione cum voluptate reprehenderit adipisci rem
                        laudantium ipsum porro in nobis! Harum, at cum id nobis
                        et necessitatibus beatae atque magnam natus quo veniam
                        excepturi asperiores quis. Assumenda vel, quisquam
                        doloremque natus inventore odio reiciendis commodi
                        officiis atque optio recusandae, sunt quas, ipsam
                        necessitatibus excepturi iste? Minima harum qui magni,
                        voluptas omnis dolorem, illo nulla adipisci dolor
                        delectus vel sit reiciendis!
                    </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/Ff-brzIHXQI?si=c4Rfj_Wx-UNSn4RP"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </Container>
            </section>

            <section>
                <Container className="flex flex-col items-center justify-center gap-12 pb-20">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="max-w-[40%] text-center text-3xl font-bold text-foreground">
                            Tenha acesso a tudo que é preciso para começar!
                        </h2>
                        <p className="max-w-[60%] text-center text-sm leading-6 text-foreground">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Incidunt adipisci esse quisquam architecto
                            laudantium culpa! Consequatur explicabo iste
                            voluptatibus praesentium ipsam recusandae,
                            laudantium expedita quos.
                        </p>
                    </div>

                    <Accordion
                        type="single"
                        collapsible
                        className="flex w-full flex-col gap-4"
                    >
                        {courseModules.map((module, index) => {
                            return (
                                <AccordionItem value={module.name} key={index}>
                                    <AccordionTrigger
                                        key={index}
                                        className={cn(
                                            "relative flex items-center gap-4 border-4 px-4 py-5",
                                            index % 2 === 0
                                                ? "text-accent-foreground bg-accent/70 border-accent/80"
                                                : "bg-primary/40 border-primary/80",
                                        )}
                                    >
                                        <span className="absolute text-5xl font-bold">
                                            {index + 1}
                                        </span>
                                        <h3 className="ml-10 capitalize">
                                            {module.name}
                                        </h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-2 p-4 pb-0">
                                            {module.lectures.map(
                                                (lecture, lectureIndex) => {
                                                    return (
                                                        <div
                                                            key={lecture.id}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <span className="text-lg font-bold">
                                                                {lectureIndex +
                                                                    1}
                                                            </span>
                                                            <p>
                                                                {lecture.title}
                                                            </p>
                                                            <p className="ml-auto">
                                                                {
                                                                    lecture.duration
                                                                }
                                                            </p>
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </Container>
            </section>

            <section>
                <Container className="grid grid-cols-3 pb-20">
                    <div className="col-span-1 flex size-full flex-col items-center justify-center gap-2">
                        <Quote className="fill-accent" />
                        <p className="max-w-80 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque libero dolorem magnam tempore,
                            molestiae eos consequuntur neque explicabo ullam
                            illo nostrum id ipsa omnis harum adipisci voluptates
                            fuga? Doloribus magni laboriosam dolores nemo culpa
                            delectus illo placeat sapiente at porro
                            consequuntur, neque dolor reprehenderit ad, quas
                            sint est ut laudantium.
                        </p>
                        <p className="text-lg font-semibold">Fulano ciclano</p>
                    </div>
                    <div className="col-span-1 flex size-full flex-col items-center justify-center gap-2">
                        <Quote className="fill-accent" />
                        <p className="max-w-80 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque libero dolorem magnam tempore,
                            molestiae eos consequuntur neque explicabo ullam
                            illo nostrum id ipsa omnis harum adipisci voluptates
                            fuga? Doloribus magni laboriosam dolores nemo culpa
                            delectus illo placeat sapiente at porro
                            consequuntur, neque dolor reprehenderit ad, quas
                            sint est ut laudantium.
                        </p>
                        <p className="text-lg font-semibold">Fulano ciclano</p>
                    </div>
                    <div className="col-span-1 flex size-full flex-col items-center justify-center gap-2">
                        <Quote className="fill-accent" />
                        <p className="max-w-80 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque libero dolorem magnam tempore,
                            molestiae eos consequuntur neque explicabo ullam
                            illo nostrum id ipsa omnis harum adipisci voluptates
                            fuga? Doloribus magni laboriosam dolores nemo culpa
                            delectus illo placeat sapiente at porro
                            consequuntur, neque dolor reprehenderit ad, quas
                            sint est ut laudantium.
                        </p>
                        <p className="text-lg font-semibold">Fulano ciclano</p>
                    </div>
                </Container>
            </section>

            <section>
                <Container className="flex items-center justify-center pb-20">
                    <div className="w-fit">
                        <Card className="border-2 border-secondary/60 bg-secondary/30 ">
                            <CardContent className="h-[30rem] w-[20rem] bg-secondary/30 pt-6">
                                <div className="flex h-full flex-col items-center justify-start gap-5">
                                    <h3 className="text-center text-4xl font-bold">
                                        Acesso completo
                                    </h3>
                                    <ul className="mb-auto text-sm">
                                        <li className="flex items-center justify-start gap-2">
                                            <Check className="size-4" /> Acesso
                                            a todos os módulos
                                        </li>
                                        <li className="flex items-center justify-start gap-2">
                                            <Check className="size-4" />
                                            certificado de conclusão
                                        </li>
                                        <li className="flex items-center justify-start gap-2">
                                            <Check className="size-4" /> suporte
                                        </li>
                                    </ul>
                                    <div>
                                        <p className="text-center text-xl font-bold">
                                            De
                                            <span className="line-through">
                                                R$ XXXX
                                            </span>
                                        </p>
                                        <p className="text-center text-2xl font-bold">
                                            por R$ XXXX
                                        </p>
                                    </div>

                                    <Button className="self-end">
                                        Inscreva-se Agora
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
