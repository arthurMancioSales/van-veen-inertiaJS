import { Card, CardContent } from "@/components/ui/Card";
import gabi from "/public/images/home/gabi.jpg";
import { motion } from "framer-motion";

export default function HomeCards() {
    return (
        <>
            <motion.div
                className="grid w-full justify-center gap-3 text-center md:grid-cols-2 lg:grid-cols-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                    hidden: {
                        opacity: 0,
                        transform: "translateY(50%)",
                    },
                }}
            >
                <Card className="flex items-center justify-center p-6 pb-0">
                    <CardContent>
                        <p className="text-4xl font-bold">+300</p>
                        <p>Aprovações internacionais</p>
                    </CardContent>
                </Card>
                <Card className="flex items-center justify-center p-6 pb-0">
                    <CardContent>
                        <p className="text-4xl font-bold">+XXX</p>
                        <p>bolsas de estudo</p>
                    </CardContent>
                </Card>
                <Card className="flex items-center justify-center p-6 pb-0">
                    <CardContent>
                        <p className="text-4xl font-bold">15+</p>
                        <p>Países</p>
                    </CardContent>
                </Card>
                <Card className="flex items-center justify-center p-6 pb-0">
                    <CardContent className="px-0">
                        <div className="flex items-center gap-2">
                            <div className="relative aspect-square size-full flex-col overflow-hidden">
                                <img
                                    src={gabi}
                                    alt="Student case image"
                                    className="absolute left-0 top-0 size-full rounded-full object-cover"
                                />
                            </div>
                            <p className="text-xl font-bold">Gabriele Mello</p>
                        </div>
                        <p>29 aprovações</p>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    );
}
