import { useToast } from "@/components/ui/toast/use-toast";
import { post } from "@/types/post";
import { useEffect, useState } from "react";
import InstagramVideo from "./InstagramVideo";
import { Button } from "@/components/ui/Button";
import { FaInstagram } from "react-icons/fa";

export default function InstagramPost() {
    const { toast } = useToast();

    useEffect(() => {
        async function getInstagramPost() {
            // const request: Response<IPost> = await generalRequest(
            //     "/api/instagram",
            //     "get",
            // );
            // console.log(request);
            // if (request.error) {
            //     return toast({
            //         title: "Um erro inesperado aconteceu.",
            //         variant: "destructive",
            //         description:
            //             "Não foi possível obter o conteúdo do instagram.",
            //     });
            // }
            // setLatestPost(request.payload.data);
        }

        getInstagramPost();
    }, [toast]);

    const [latestPost, setLatestPost] = useState<post | null>(null);

    function renderLatestPost() {
        switch (latestPost?.media_type) {
            case "IMAGE":
                return (
                    <div className="relative aspect-square w-full lg:w-[536px]">
                        <img
                            alt="Latest instagram post"
                            src={latestPost.media_url}
                            className="object-contain "
                        />
                    </div>
                );

            case "CAROUSEL_ALBUM":
                return (
                    <div className="w-full overflow-hidden lg:h-[calc(100%-64px)] lg:w-[300px] lg:max-w-fit">
                        <img
                            alt="Latest instagram post"
                            src={latestPost.media_url}
                            className="object-cover"
                        />
                    </div>
                );

            case "VIDEO":
                return (
                    <div className="w-full overflow-hidden lg:h-full lg:max-w-fit">
                        <InstagramVideo src={latestPost.media_url} />
                    </div>
                );
        }
    }

    return (
        <div className="flex max-w-5xl flex-col items-center lg:h-[600px] lg:w-[64rem] lg:flex-row">
            <div className="relative flex min-h-[100%] w-full flex-col lg:w-auto lg:self-stretch lg:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]">
                <div className="flex w-full flex-row items-center gap-4 bg-white p-3 ">
                    <a
                        href="https://www.instagram.com/instituto.vanveen/"
                        target="_blank"
                        className="flex items-center gap-4"
                        rel="noreferrer"
                    >
                        <div className="relative size-10">
                            <img
                                src="/images/vanVeenShield.svg"
                                alt="Van Veen profile picture"
                                className="rounded-full bg-blue-900"
                            />
                        </div>
                        <h3 className="text-lg font-semibold">
                            {latestPost?.username}
                        </h3>
                    </a>
                </div>
                {renderLatestPost()}
            </div>
            <div className="flex flex-col items-end justify-between gap-8 bg-white px-4 py-6 shadow-md lg:self-stretch lg:px-12">
                <h3>{latestPost?.caption}</h3>
                <Button className="flex w-fit gap-2">
                    <FaInstagram />
                    <a
                        href={latestPost?.permalink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver no instagram
                    </a>
                </Button>
            </div>
        </div>
    );
}
