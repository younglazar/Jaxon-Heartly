import Link from "next/link";
import { Facebook, Instagram, Youtube, Music } from "lucide-react";

const socialLinks = [
    { name: "Spotify", icon: Music, href: "#" },
    { name: "Apple Music", icon: Music, href: "#" },
    { name: "TikTok", icon: Music, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
];

const footerLinks = [
    { name: "Home", href: "/" },
];

export default function Footer() {
    return (
        <footer className="bg-charcoal text-cream py-12 border-t border-clay-red/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-8">
                    {/* Logo */}
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-bold tracking-wide text-clay-red">
                            JAXON HEARTLY
                        </h2>
                        <p className="mt-2 text-cream/60 text-sm">
                            Clay, soul, and country stories.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium uppercase tracking-wider hover:text-clay-red transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="text-cream/80 hover:text-clay-red transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>

                    {/* Copyright & Disclaimer */}
                    <div className="text-center space-y-2 pt-8 border-t border-white/10 w-full max-w-2xl">
                        <p className="text-xs text-cream/40">
                            &copy; {new Date().getFullYear()} Jaxon Heartly. All rights reserved.
                        </p>
                        <p className="text-xs text-clay-red/80 font-medium">
                            This is an AI-powered country music project.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
