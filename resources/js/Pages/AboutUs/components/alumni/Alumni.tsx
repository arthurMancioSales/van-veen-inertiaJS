"use client";

import { useEffect, useState } from "react";
import LoadingAlumni from "./LoadingAlumni";
import { alumni } from "@/types/alumni";

export default function Alumni() {
    const [alumni, setAlumni] = useState<alumni[] | null>();

    try {
        useEffect(() => {
            async function getAlumni() {
                // const response = await fetch("/api/alumni", {
                //     next: { revalidate: 10 },
                // });
                // if (!response.ok) {
                //     throw new Error("Não foi possível buscar os dados");
                // }
                // const responseBody = await response.json();
                // const data: IAlumni[] = responseBody.data;
                // setAlumni(data);
            }

            getAlumni();
        }, []);
    } catch (error) {
        console.log(error);
    }
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
                                    src={student.upload.link}
                                    alt="Alumni"
                                    className="absolute left-0 top-0 size-full rounded-full object-cover"
                                />
                            </div>
                            <h4 className="pb-1 pt-2 font-bold">
                                {student.name}
                            </h4>
                            <p className="pb-1 font-light">{student.country}</p>
                            <p className="font-extralight">
                                {student.approvals} aprovações
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
