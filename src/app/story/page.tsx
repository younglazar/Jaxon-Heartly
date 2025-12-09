import Image from "next/image";
import Section from "@/components/Section";

export default function StoryPage() {
    return (
        <div className="pt-20">
            <Section className="bg-cream">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal">Jaxon’s Story</h1>
                        <p className="text-xl text-clay-red font-medium">From red clay roots to Nashville neon.</p>
                    </div>

                    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                        <Image
                            src="/images/hero.png"
                            alt="Jaxon Heartly Story"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-lg prose-stone mx-auto">
                        <p>
                            Jaxon Heartly was born in Carrollton, Georgia, raised in a tight-knit African American family with deep southern roots. His early life was shaped by red-clay backroads, porch-side cicadas, and Sunday church mornings. He grew up around storytellers — his grandmother’s hymn-like folktales, his father’s blues records, and his mother singing in the kitchen.
                        </p>
                        <p>
                            At age 8 he borrowed his uncle’s beat-up acoustic guitar and learned his first chords on YouTube. By 12 he was writing songs about the woods, the old train tracks, and feeling like he was meant for something bigger.
                        </p>

                        <h3 className="font-serif text-2xl font-bold text-clay-red mt-8 mb-4">Influences & Inspiration</h3>
                        <p>
                            Drawing from Ray Charles, Brad Paisley, Tracy Chapman, Darius Rucker, and blues-heavy soul from his father, Jaxon found his unique sound. At 16 he performed at a talent show that led to local interest and small-stage performances.
                        </p>
                        <p>
                            In his early twenties, a short online clip of one of his acoustic songs went viral, attracting music-industry attention and securing him a creative-friendly Nashville label deal.
                        </p>

                        <h3 className="font-serif text-2xl font-bold text-clay-red mt-8 mb-4">Themes</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Growing up where home is comfort and cage</li>
                            <li>Southern Black identity</li>
                            <li>Quiet heartbreak & healing</li>
                            <li>Family, roots, and redemption</li>
                            <li>Love stories under open Georgia skies</li>
                        </ul>

                        <p className="mt-8">
                            Now 24, he splits his time between Nashville inspiration and Carrollton roots — still writing most songs on his grandmother’s porch.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
