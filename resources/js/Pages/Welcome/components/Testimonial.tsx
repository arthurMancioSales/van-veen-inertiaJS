import { useEffect, useState } from "react";
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

    useEffect(() => {
        async function getTestimonials() {
            try {
                const response = await axios.get("/testimonial");

                if (response.status !== 200) {
                    return toast({
                        title: "Um erro inesperado aconteceu.",
                        variant: "destructive",
                        description: response.data,
                    });
                }

                setTestimonials(response.data);
            } catch (error) {
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

    if (!testimonials) {
        return <Skeleton />;
    }

    return (
        <>
            <Carousel>
                <CarouselContent className="overflow-visible">
                    {testimonials?.map((testimonial) => {
                        return (
                            <CarouselItem
                                key={testimonial.id}
                                className="ml-0 flex h-full basis-full justify-center"
                            >
                                <div className="relative h-full min-h-[75vh] w-[90%] rounded-md bg-accent p-4 lg:min-h-[60vh] lg:w-full lg:max-w-2xl lg:justify-between lg:py-12 mobileP:min-h-[80vh]">
                                    <div className="absolute -top-20 left-[14%] z-50 flex h-48 w-52 flex-col items-center justify-center md:left-[30%] lg:left-[-25%] lg:right-20 lg:top-[11.5%] lg:h-72 lg:w-80 lg:overflow-hidden mobileP:left-3">
                                        <img
                                            src={testimonial.photo}
                                            alt="Student testimonial"
                                            className="absolute left-0 top-0 size-full rounded-md object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 pt-32 md:relative lg:top-auto lg:pl-44 lg:pr-6 lg:pt-0">
                                        <p className="text-center text-accent-foreground">
                                            {testimonial.testimonial}
                                        </p>
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <p className="w-fit px-2 text-center text-lg font-bold capitalize text-accent-foreground">
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
            <div className="mx-auto w-full max-w-sm rounded-md border border-accent bg-accent p-4 shadow lg:min-h-[425px] lg:max-w-3xl">
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
