import Image from "next/image";
import { Music } from "lucide-react";

export default function MusicPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center bg-cream">
            {/* Profile Section */}
            <div className="text-center space-y-4 mb-10 animate-fade-in-up">
                <div className="relative w-32 h-32 mx-auto round-full overflow-hidden shadow-xl border-4 border-white">
                    <Image
                        src="/images/hero-v2.png"
                        alt="Jaxon Heartly"
                        fill
                        className="object-cover object-[35%_0]"
                        priority
                    />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
                    Jaxon Heartly
                </h1>
                <p className="text-charcoal/60 font-medium tracking-wide">
                    Clay, Soul, and Country Stories
                </p>
            </div>

            {/* Links Section */}
            <div className="w-full max-w-md space-y-4 animate-fade-in-up delay-100">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 bg-charcoal text-cream rounded-lg hover:bg-clay-red hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                    <Music className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-bold tracking-wider uppercase">Listen on Spotify</span>
                </a>

                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 bg-charcoal text-cream rounded-lg hover:bg-clay-red hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                    <Music className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-bold tracking-wider uppercase">Listen on Apple Music</span>
                </a>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center animate-fade-in-up delay-200">
                <p className="text-sm text-charcoal/40 font-light">
                    Join the journey.
                </p>
            </div>
        </div>
    );
}
