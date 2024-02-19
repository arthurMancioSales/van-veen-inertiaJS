import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
