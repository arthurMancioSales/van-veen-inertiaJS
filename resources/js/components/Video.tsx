import { cn } from "@/lib/cn";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function Video({
    src,
    className,
}: {
    src: string;
    className?: string;
}) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoPlaying, setVideoPlaying] = useState(false);

    function toggleVideo() {
        if (!videoRef) {
            return;
        }

        if (!videoPlaying) {
            videoRef.current?.play();
            setVideoPlaying(true);
            return;
        }

        videoRef.current?.pause();
        setVideoPlaying(false);
    }

    return (
        <div
            className={cn(
                "relative aspect-square w-full bg-accent-foreground ",
                className,
            )}
        >
            <div
                className="group relative mx-auto h-fit lg:w-[302px]"
                onClick={toggleVideo}
            >
                <video
                    src={src}
                    ref={videoRef}
                    className="w-full lg:h-full"
                    controlsList="nodownload"
                />
                {videoPlaying ? (
                    <Pause className="absolute left-1/3 top-1/3 size-32 fill-slate-50 text-slate-50 opacity-75 transition-all duration-150 group-hover:opacity-75 lg:opacity-0" />
                ) : (
                    <Play className="absolute left-1/3 top-1/3 size-32 fill-slate-50 text-slate-50 opacity-75 transition-all duration-150 group-hover:opacity-75 lg:opacity-0" />
                )}
            </div>
        </div>
    );
}
