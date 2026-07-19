'use client'

export const TextCarousell = () => {

    const items = [
        "✦ UNWORLDLY ✦",
        "FREE SHIPPING",
        "NEW DROP",
        "LIMITED EDITION",
        "WORLDWIDE SHIPPING",
        "LIMITED STOCK"
    ];

    return (
        <div className="max-w-[1080px] w-full overflow-hidden bg-black sm:py-4 py-3">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...items, ...items].map((item, index) => (
                <span key={index} className="mx-8 text-white font-mono sm:text-sm text-xs cursor-pointer hovered">
                    {item}
                </span>
                ))}
            </div>
        </div>
    )
}
