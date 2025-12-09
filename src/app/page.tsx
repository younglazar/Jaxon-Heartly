import Image from "next/image";
import Link from "next/link";
import { Play, Music, ArrowRight, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Marquee text="New music out now · AI Country Artist · Southern Storytelling Evolved" />

      {/* Intro Cards */}
      <Section className="bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Born in Carrollton, GA", desc: "Roots run deep in the red clay." },
            { title: "Raised on Country & Soul", desc: "A blend of blues, hymns, and radio hits." },
            { title: "Digital Country Voice", desc: "A new era of storytelling." },
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 border border-clay-red/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-clay-red mb-4">{card.title}</h3>
              <p className="text-charcoal/80">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Music */}
      <Section className="bg-charcoal text-cream">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative aspect-square max-w-md mx-auto">
            <Image
              src="/images/album.png"
              alt="Latest Release"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-clay-red">Latest Release</h2>
            <p className="text-xl text-cream/80">
              Experience the sound of modern country with a soulful twist.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors">
                <Music size={20} /> Spotify
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors">
                <Music size={20} /> Apple Music
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-colors">
                <Play size={20} /> YouTube
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Video Spotlight */}
      <Section className="bg-cream">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-4xl font-bold text-charcoal">Featured Videos</h2>
          <Link href="/videos" className="hidden md:flex items-center gap-2 text-clay-red font-bold hover:underline">
            View All <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-charcoal relative group cursor-pointer overflow-hidden">
            <Image
              src="/images/performance.png"
              alt="Acoustic Performance"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-clay-red/90 rounded-full flex items-center justify-center text-white pl-1 group-hover:scale-110 transition-transform">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-bold text-xl">Acoustic Sessions: Porch Side</h3>
            </div>
          </div>
          <div className="aspect-video bg-charcoal relative group cursor-pointer overflow-hidden">
            {/* Placeholder for second video, reusing performance image for now or just a color block */}
            <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
              <span className="text-cream/50">Coming Soon</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/videos" className="inline-flex items-center gap-2 text-clay-red font-bold hover:underline">
            View All <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-charcoal">Gallery</h2>
          <p className="mt-4 text-charcoal/60">Snapshots from the journey.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-[3/4] relative">
            <Image src="/images/portrait.png" alt="Gallery 1" fill className="object-cover" />
          </div>
          <div className="aspect-[3/4] relative bg-clay-red/10">
            {/* Placeholder */}
          </div>
          <div className="aspect-[3/4] relative bg-forest-green/10">
            {/* Placeholder */}
          </div>
          <div className="aspect-[3/4] relative bg-charcoal/10">
            {/* Placeholder */}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/gallery" className="px-8 py-3 border-2 border-charcoal text-charcoal font-bold uppercase hover:bg-charcoal hover:text-white transition-colors">
            View Full Gallery
          </Link>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-clay-red text-cream text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <Mail size={48} className="mx-auto text-cream/80" />
          <h2 className="font-serif text-4xl font-bold">Join the Jaxon Heartly Circle</h2>
          <p className="text-lg text-cream/90">
            Be the first to hear new music, get exclusive updates, and follow the journey.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-none bg-cream text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-charcoal"
            />
            <button type="submit" className="px-8 py-3 bg-charcoal text-cream font-bold uppercase hover:bg-charcoal/80 transition-colors">
              Join
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}
