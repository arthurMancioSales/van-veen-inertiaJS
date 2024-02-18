import { cn } from "@/lib/cn";

import { PropsWithChildren } from "react";

interface IPropsContainer {
    className?: string;
}

export default function Container({
    children,
    className,
}: PropsWithChildren<IPropsContainer>) {
    return (
        <>
            <div
                className={cn(
                    `lg:max-w-4xl xl:max-w-6xl md:max-w-xl max-w-xs mx-auto mobileS:max-w-[16rem] 2xl:max-w-[1900px]`,
                    className,
                )}
            >
                {children}
            </div>
        </>
    );
}
