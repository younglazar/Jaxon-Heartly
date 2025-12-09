import { Mail, MapPin } from "lucide-react";
import Section from "@/components/Section";

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Section className="bg-cream min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl font-bold text-charcoal">Contact</h1>
                    <p className="mt-4 text-charcoal/60">Get in touch.</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Collaboration Form */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Collaborations & Licensing</h2>
                            <p className="text-charcoal/80">
                                For business inquiries, licensing, or creative collaborations.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-bold text-charcoal uppercase tracking-wider">Name</label>
                                <input type="text" id="name" className="w-full bg-white border border-charcoal/20 p-4 focus:outline-none focus:border-clay-red transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-bold text-charcoal uppercase tracking-wider">Email</label>
                                <input type="email" id="email" className="w-full bg-white border border-charcoal/20 p-4 focus:outline-none focus:border-clay-red transition-colors" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-bold text-charcoal uppercase tracking-wider">Message</label>
                                <textarea id="message" rows={6} className="w-full bg-white border border-charcoal/20 p-4 focus:outline-none focus:border-clay-red transition-colors" placeholder="How can we work together?"></textarea>
                            </div>
                            <button type="submit" className="px-8 py-4 bg-charcoal text-cream font-bold uppercase tracking-wider hover:bg-clay-red transition-colors w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Newsletter & Info */}
                    <div className="space-y-12">
                        <div className="bg-clay-red text-cream p-8 md:p-12">
                            <Mail size={40} className="mb-6" />
                            <h2 className="font-serif text-3xl font-bold mb-4">Join the Circle</h2>
                            <p className="mb-8 text-cream/90">
                                Sign up for the newsletter to get early access to new music, exclusive content, and behind-the-scenes stories.
                            </p>
                            <form className="space-y-4">
                                <input type="email" className="w-full bg-cream/10 border border-cream/30 p-4 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream transition-colors" placeholder="your@email.com" />
                                <button type="submit" className="w-full bg-cream text-clay-red font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6 pl-4 border-l-2 border-charcoal/10">
                            <div>
                                <h3 className="font-bold text-charcoal uppercase tracking-wider mb-2">Location</h3>
                                <div className="flex items-center gap-2 text-charcoal/80">
                                    <MapPin size={18} />
                                    <span>Nashville, TN / Carrollton, GA</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal uppercase tracking-wider mb-2">Management</h3>
                                <p className="text-charcoal/80">
                                    Managed by AI Artists United<br />
                                    <a href="mailto:mgmt@jaxonheartly.com" className="text-clay-red hover:underline">mgmt@jaxonheartly.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
