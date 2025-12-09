import Image from "next/image";
import Section from "@/components/Section";

export default function GalleryPage() {
    const images = [
        "/images/portrait.png",
        "/images/performance.png",
        "/images/hero.png",
        "/images/album.png",
        "/images/portrait.png", // Reuse for demo
        "/images/hero.png",     // Reuse for demo
    ];

    return (
        <div className="pt-20">
            <Section className="bg-white">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl font-bold text-charcoal">Gallery</h1>
                    <p className="mt-4 text-charcoal/60">Moments captured in time.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative aspect-[3/4] group overflow-hidden">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
