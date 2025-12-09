import Section from "@/components/Section";

export default function ShopPage() {
    const products = [
        { name: "Signature Tee", price: "$30.00", type: "Apparel" },
        { name: "Trucker Hat", price: "$25.00", type: "Headwear" },
        { name: "Tour Hoodie", price: "$55.00", type: "Apparel" },
        { name: "Limited Poster", price: "$20.00", type: "Print" },
    ];

    return (
        <div className="pt-20">
            <Section className="bg-cream min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl font-bold text-charcoal">Shop</h1>
                    <p className="mt-4 text-charcoal/60">Wear the story.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="group">
                            <div className="aspect-square bg-white border border-clay-red/10 relative flex items-center justify-center mb-4 overflow-hidden">
                                <span className="text-charcoal/20 font-bold text-4xl uppercase -rotate-12 select-none">
                                    {product.type}
                                </span>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                                <div className="absolute top-4 right-4 bg-clay-red text-white text-xs font-bold px-2 py-1 uppercase">
                                    Coming Soon
                                </div>
                            </div>
                            <h3 className="font-bold text-lg text-charcoal">{product.name}</h3>
                            <p className="text-clay-red font-medium">{product.price}</p>
                            <button className="mt-4 w-full py-2 border border-charcoal text-charcoal font-bold uppercase text-sm hover:bg-charcoal hover:text-white transition-colors">
                                Notify Me
                            </button>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
