import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonial } from "@/types/testimonial";
import Container from "@/components/ui/Container";

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState<testimonial[] | null>();
    const [index, setIndex] = useState(0);

    try {
        useEffect(() => {
            async function getTestimonials() {
                // const response = await fetch("api/testimonials", {
                //     next: { revalidate: 60 },
                // });
                // if (!response.ok) {
                //     throw new Error("Não foi possível buscar os dados");
                // }
                // const responseBody = await response.json();
                // const data: ITestimonial[] = responseBody.data;
                // setTestimonials(data);
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
            <motion.div
                animate={controls}
                variants={slide}
                id="testimonialWrapper"
                className="flex justify-center"
            >
                <div className="relative h-full flex-col items-center justify-center">
                    {testimonials ? (
                        <div className="relative flex flex-col items-center justify-center rounded-md bg-accent lg:w-full lg:max-w-3xl lg:flex-row lg:justify-between lg:py-12">
                            <div className="absolute -top-16 flex h-40 w-60 flex-col items-center justify-center overflow-hidden lg:-left-64 lg:right-20 lg:top-12 lg:h-72 lg:w-[440px]">
                                <img
                                    src={testimonials[index].upload.link}
                                    alt="Student testimonial"
                                    className="absolute left-0 top-0 size-full rounded-md object-cover"
                                />
                            </div>
                            <div className="relative flex size-full flex-row flex-wrap content-end items-end justify-center self-end rounded-md pt-32 lg:min-h-[18rem] lg:w-[1100px] lg:items-start lg:self-center lg:pl-52 lg:pt-0">
                                <p className="px-5 pb-8 text-white">
                                    {testimonials[index].testimonial}
                                </p>
                                <div className="flex w-full flex-row items-center justify-between self-end px-5 pb-5 lg:justify-center lg:self-end">
                                    <ChevronLeft
                                        className="h-12 text-white lg:hidden"
                                        onClick={previousTestimonial}
                                    />
                                    <p className="w-fit px-2 text-center text-lg font-bold text-white">
                                        {testimonials[index].user}{" "}
                                    </p>
                                    <ChevronRight
                                        className="h-12 text-white lg:hidden"
                                        onClick={nextTestimonail}
                                    />
                                </div>
                                <div className="hidden w-full flex-row items-center justify-between self-end px-5 pb-5 lg:flex lg:self-end lg:pb-2">
                                    <ChevronLeft
                                        className="h-12 text-white"
                                        onClick={previousTestimonial}
                                    />
                                    <ChevronRight
                                        className="h-12 text-white"
                                        onClick={nextTestimonail}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Skeleton />
                    )}
                </div>
            </motion.div>
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
