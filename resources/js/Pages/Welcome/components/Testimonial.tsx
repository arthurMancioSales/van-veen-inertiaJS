import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonial } from "@/types/testimonial";
import Container from "@/components/ui/Container";
import axios from "axios";
import { useToast } from "@/components/ui/toast/use-toast";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/Carousel";

export default function Testimonial() {
    const { toast } = useToast();
    const [testimonials, setTestimonials] = useState<testimonial[] | null>();
    const [index, setIndex] = useState(0);

    try {
        useEffect(() => {
            async function getTestimonials() {
                try {
                    const response = await axios.get("/testimonial");
                    console.log(response);
                    if (response.status !== 200) {
                        return toast({
                            title: "Um erro inesperado aconteceu.",
                            variant: "destructive",
                            description:
                                "Não foi possível obter o conteúdo do instagram.",
                        });
                    }

                    setTestimonials(response.data);
                } catch (error) {
                    console.log(error);

                    return toast({
                        title: "Um erro inesperado aconteceu.",
                        variant: "destructive",
                        description:
                            "Não foi possível obter o conteúdo do instagram.",
                    });
                }
            }

            getTestimonials();
        }, []);
    } catch (error) {
        console.log(error);
    }

    async function previousTestimonial() {
        await controls.start("entersLeft");

        if (index === 0 && testimonials) {
            setIndex(testimonials.length - 1);
        } else {
            setIndex((currentIndex) => {
                return currentIndex - 1;
            });
        }

        await controls.start("hideRight");

        await controls.start("center");
    }

    async function nextTestimonail() {
        await controls.start("entersRight");

        if (testimonials && index === testimonials?.length - 1) {
            setIndex(0);
        } else {
            setIndex((currentIndex) => {
                return currentIndex + 1;
            });
        }

        await controls.start("hideLeft");

        await controls.start("center");
    }

    const controls = useAnimation();

    const slide = {
        entersLeft: {
            x: "-100%",
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
            },
        },
        hideRight: {
            x: "100%",
            transition: {
                duration: 0,
            },
        },
        center: {
            x: "0",
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
            },
        },
        entersRight: {
            x: "100%",
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
            },
        },
        hideLeft: {
            x: "-100%",
            transition: {
                duration: 0,
            },
        },
    };

    return (
        <>
            <Carousel>
                <CarouselContent className="overflow-visible">
                    {testimonials?.map((testimonial) => {
                        return (
                            <CarouselItem
                                key={testimonial.id}
                                className="ml-0 flex basis-full justify-center "
                            >
                                <div className="relative flex min-h-[60vh] w-[90%] flex-col items-center justify-center rounded-md bg-accent lg:w-full lg:max-w-2xl lg:flex-row lg:justify-between lg:py-12">
                                    <div className="absolute -top-24 z-50 flex h-48 w-52 flex-col items-center justify-center lg:left-[-25%] lg:right-20 lg:top-[11.5%] lg:h-72 lg:w-80 lg:overflow-hidden">
                                        <img
                                            src={testimonial.photo}
                                            alt="Student testimonial"
                                            className="absolute left-0 top-0 size-full rounded-md object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 lg:pl-44 lg:pr-6">
                                        <p className="text-center text-accent-foreground">
                                            {testimonial.testimonial}
                                        </p>
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <p className="w-fit px-2 text-center text-lg font-bold text-accent-foreground">
                                                {testimonial.alumni}{" "}
                                            </p>
                                            <p className="w-fit text-center text-xs font-light text-accent-foreground">
                                                {testimonial.university}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}

function Skeleton() {
    return (
        <Container className="flex w-screen flex-col">
            <div className="mx-auto h-[425px] w-full max-w-sm rounded-md border border-blue-900 bg-accent p-4 shadow lg:min-h-[425px] lg:max-w-3xl">
                <div className="flex animate-pulse flex-wrap">
                    <div className="flex w-full justify-center">
                        <div className="size-10 self-center rounded-full bg-slate-700" />
                    </div>
                    <div className="flex-1 space-y-6 py-5">
                        <div className="h-2 rounded bg-slate-700" />
                        <div className="space-y-3">
                            <div className="h-2 rounded bg-slate-700" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-slate-700" />
                            <div className="col-span-1 h-2 rounded bg-slate-700" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
