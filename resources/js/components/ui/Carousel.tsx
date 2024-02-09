"use client";

import { cn } from "@/lib/cn";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface carouselProps extends React.HTMLAttributes<HTMLDivElement> {
    pageCount: number;
    paginationPosition: "top" | "bottom" | "above" | "bellow";
    navigationPosition: "top" | "bottom" | "above" | "bellow";
}

export default function Carousel({
    children,
    pageCount,
    className,
    paginationPosition,
    navigationPosition,
    ...props
}: carouselProps) {
    const [carouselIndex, setCarouselIndex] = useState(0);

    function renderPagination() {
        const pages = [];
        for (let i = 0; i < pageCount; i++) {
            pages.push(
                <div
                    className={`size-3 cursor-pointer rounded-full ${
                        carouselIndex === i ? "bg-primary" : "bg-secondary"
                    }`}
                    key={i}
                    id={`page${i}`}
                    onClick={() => scrollToPage(i)}
                />,
            );
        }

        return pages;
    }

    function previousSlide() {
        setCarouselIndex((carouselIndex) =>
            carouselIndex === 0 ? pageCount - 1 : carouselIndex - 1,
        );
    }

    function nextSlide() {
        setCarouselIndex((carouselIndex) =>
            carouselIndex === pageCount - 1 ? 0 : carouselIndex + 1,
        );
    }

    function scrollToPage(pageNumber: number) {
        setCarouselIndex(pageNumber);
    }

    return (
        <div
            id="carouselRoot"
            className="relative flex size-full flex-col items-center justify-center gap-4"
            data-carousel
            {...props}
        >
            <div
                className={cn("w-80 overflow-hidden", className)}
                id="carouselDisplay"
            >
                <div
                    className="flex size-full transition-transform duration-500 ease-out"
                    id="carouselSlider"
                    style={{
                        transform: `translateX(${carouselIndex * -100}%)`,
                    }}
                    data-carousel-slide
                >
                    {children}
                </div>
            </div>

            <div
                className="flex items-center gap-2 py-2"
                id="carouselPagination"
            >
                <div
                    className="flex items-center gap-2 py-2"
                    data-carousel-pagination
                >
                    {renderPagination()}
                </div>
            </div>

            <div
                className="absolute flex items-center gap-2 py-2"
                id="carouselPagination"
            >
                <ChevronLeft
                    id="carouselPreviousButton"
                    onClick={previousSlide}
                    size={30}
                    className="pointer-events-auto w-fit cursor-pointer rounded-full"
                    data-previous-button
                >
                    previous
                </ChevronLeft>
                <div
                    className="flex items-center gap-2 py-2"
                    data-carousel-pagination
                >
                    {renderPagination()}
                </div>
                <ChevronRight
                    id="carouselNextButton"
                    onClick={nextSlide}
                    size={30}
                    className="pointer-events-auto cursor-pointer"
                    data-next-button
                >
                    next
                </ChevronRight>
            </div>
        </div>
    );
}
