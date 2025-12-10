import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-v2.png"
                    alt="Jaxon Heartly playing guitar on a porch"
                    fill
                    className="object-cover object-[35%_0]"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl space-y-6">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight">
                        Jaxon Heartly
                    </h1>
                    <p className="text-xl md:text-2xl text-cream/90 max-w-2xl font-light">
                        Clay, soul, and country stories from Carrollton, Georgia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/music"
                            className="px-8 py-4 bg-clay-red text-cream font-bold uppercase tracking-wider hover:bg-burnt-orange transition-colors text-center"
                        >
                            Listen to latest music
                        </Link>
                        <a
                            href="https://www.youtube.com/@JaxonHeartly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-transparent border-2 border-cream text-cream font-bold uppercase tracking-wider hover:bg-cream hover:text-charcoal transition-colors text-center"
                        >
                            Watch Official Videos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
