import Image from "next/image";
import { Play, Music } from "lucide-react";
import Section from "@/components/Section";

export default function MusicPage() {
    return (
        <div className="pt-20">
            <Section className="bg-charcoal text-cream min-h-[60vh] flex items-center">
                <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                    <div className="w-full md:w-1/2 relative aspect-square max-w-md mx-auto">
                        <Image
                            src="/images/album.png"
                            alt="Latest Release"
                            fill
                            className="object-cover shadow-2xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <span className="text-clay-red font-bold tracking-widest uppercase">Latest Release</span>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold">Southern Roots</h1>
                        <p className="text-xl text-cream/80">
                            A soulful journey through the heart of Georgia.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                            <button className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors">
                                <Music size={20} /> Listen on Spotify
                            </button>
                            <button className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors">
                                <Music size={20} /> Apple Music
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-cream">
                <h2 className="font-serif text-4xl font-bold text-charcoal mb-12 text-center">Upcoming Releases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[1, 2].map((item) => (
                        <div key={item} className="flex gap-6 items-center bg-white p-6 rounded-lg shadow-sm border border-clay-red/10">
                            <div className="w-24 h-24 bg-charcoal/10 flex-shrink-0 relative">
                                {/* Placeholder art */}
                                <div className="absolute inset-0 flex items-center justify-center text-charcoal/30 font-bold">?</div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-charcoal">Untitled Track {item}</h3>
                                <p className="text-clay-red">Coming Soon</p>
                                <button className="mt-2 text-sm text-charcoal/60 underline hover:text-charcoal">Pre-save</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
