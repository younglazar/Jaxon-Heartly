import Image from "next/image";
import { Play } from "lucide-react";
import Section from "@/components/Section";

export default function VideosPage() {
    const videos = [
        { title: "Acoustic Sessions: Porch Side", image: "/images/performance.png", type: "Acoustic" },
        { title: "Studio Diaries Vol. 1", image: "/images/hero.png", type: "Studio" },
        { title: "Live from the Living Room", image: "/images/portrait.png", type: "Performance" },
        { title: "New Single Teaser", image: "/images/album.png", type: "Short" },
    ];

    return (
        <div className="pt-20">
            <Section className="bg-charcoal min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl font-bold text-cream">Videos</h1>
                    <p className="mt-4 text-cream/60">Visual stories from the studio and the porch.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videos.map((video, index) => (
                        <div key={index} className="group relative aspect-video bg-black/50 overflow-hidden cursor-pointer rounded-lg">
                            <Image
                                src={video.image}
                                alt={video.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-clay-red/90 rounded-full flex items-center justify-center text-white pl-1 group-hover:scale-110 transition-transform shadow-lg">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <span className="text-xs font-bold uppercase tracking-wider text-clay-red mb-1 block">{video.type}</span>
                                <h3 className="text-white font-bold text-xl">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
