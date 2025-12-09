import Link from "next/link";
import Section from "@/components/Section";

export default function NewsPage() {
    const posts = [
        {
            title: "In the Studio: New Music Coming Soon",
            date: "December 1, 2025",
            excerpt: "We've been working late nights to bring you something special. The new sound is deeper, grittier, and more honest than ever.",
            category: "Music Update"
        },
        {
            title: "The Story Behind the Sound",
            date: "November 15, 2025",
            excerpt: "How red clay roads and old blues records shaped the sonic landscape of the upcoming album.",
            category: "Behind the Scenes"
        },
        {
            title: "AI Country Music in 2025",
            date: "November 1, 2025",
            excerpt: "Exploring the intersection of technology and tradition, and what it means to be a digital artist in a soulful genre.",
            category: "Thought Piece"
        },
        {
            title: "Behind the Scenes: Visual Creation Process",
            date: "October 20, 2025",
            excerpt: "A look at how we generate the visual world of Jaxon Heartly using advanced AI tools.",
            category: "Visuals"
        }
    ];

    return (
        <div className="pt-20">
            <Section className="bg-white min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl font-bold text-charcoal">News</h1>
                    <p className="mt-4 text-charcoal/60">Updates from the journey.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {posts.map((post, index) => (
                        <article key={index} className="border-b border-charcoal/10 pb-12 last:border-0">
                            <div className="flex items-center gap-4 mb-4 text-sm">
                                <span className="text-clay-red font-bold uppercase tracking-wider">{post.category}</span>
                                <span className="text-charcoal/40">•</span>
                                <span className="text-charcoal/60">{post.date}</span>
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4 hover:text-clay-red transition-colors cursor-pointer">
                                <Link href="#">{post.title}</Link>
                            </h2>
                            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <Link href="#" className="text-charcoal font-bold border-b-2 border-clay-red hover:text-clay-red transition-colors inline-block pb-1">
                                Read Story
                            </Link>
                        </article>
                    ))}
                </div>
            </Section>
        </div>
    );
}
