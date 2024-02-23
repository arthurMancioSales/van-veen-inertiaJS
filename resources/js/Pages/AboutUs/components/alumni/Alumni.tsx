"use client";

import { useEffect, useState } from "react";
import LoadingAlumni from "./LoadingAlumni";
import { alumni } from "@/types/alumni";
import { useToast } from "@/components/ui/toast/use-toast";
import axios from "axios";

export default function Alumni() {
    const [alumni, setAlumni] = useState<alumni[] | null>();

    const { toast } = useToast();

    useEffect(() => {
        async function getAlumni() {
            try {
                const response = await axios.get("/alumni");

                if (response.status !== 200) {
                    return toast({
                        title: "Um erro inesperado aconteceu.",
                        variant: "destructive",
                        description: response.data,
                    });
                }
                console.log(response);
                setAlumni(response.data);
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

        getAlumni();
    }, []);

    return (
        <>
            {alumni ? (
                <div className="flex w-full flex-row flex-wrap justify-around object-contain lg:pt-3">
                    {alumni.map((student) => (
                        <div
                            className="flex min-w-[40%] flex-col items-center py-3 lg:min-w-[20%] lg:py-5"
                            key={student.id}
                        >
                            <div className="relative size-24 overflow-hidden rounded-full">
                                <img
                                    src={student.photo}
                                    alt="Alumni"
                                    className="absolute left-0 top-0 size-full rounded-full object-cover"
                                />
                            </div>
                            <h4 className="pb-1 pt-2 font-bold">
                                {student.name}
                            </h4>
                            <p className="pb-1 font-light">
                                {student.university}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <LoadingAlumni />
            )}
        </>
    );
}
