export const FeatureCards = () => {

    const cardsFeatures = [
        {
            icon: "📊",
            title: "Analytics",
            description:
                "See spending patterns emerge across categories and months."
        },
        {
            icon: "💳",
            title: "Expense Tracking",
            description:
                "Log every transaction in seconds, from any device."
        },
        {
            icon: "🎯",
            title: "Budget Planning",
            description:
                "Set limits per category and get warned before you overspend."
        },
        {
            icon: "📈",
            title: "Reports",
            description:
                "Export clean statements as CSV or PDF, anytime."
        }
    ];

    return (
        <section
            className="
            grid
            grid-cols-4
            gap-5.5
            px-[6%]
            py-17.5
            "
        >
            {cardsFeatures.map((feature, index) => (
                <div
                    key={index}
                    className="
                    relative
                    rounded-xs
                    border
                    border-[#DCD6C7]
                    dark:border-[#3A3A3A]
                    bg-white
                    dark:bg-[#1F1F1F]
                    p-6
                    shadow-[0_1px_0_rgba(28,35,33,0.06)]
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:shadow-lg
                    "
                >
                    {/* Scallop */}

                    <div
                        className="
                        absolute
                        -top-px
                        left-4
                        right-4
                        h-1.5
                        "
                        style={{
                            background:
                                "radial-gradient(circle at 6px 0, transparent 4px, #F7F5EF 4.5px) top left/12px 6px repeat-x",
                        }}
                    />

                    <span
                        className="
                        mb-3
                        block
                        text-[26px]
                        "
                    >
                        {feature.icon}
                    </span>

                    <h3
                        className="
                        mb-1.5
                        text-[16px]
                        font-semibold
                        text-[#1C2321]
                        dark:text-white
                        "
                    >
                        {feature.title}
                    </h3>

                    <p
                        className="
                        text-[13px]
                        leading-normal
                        text-[#5B6360]
                        dark:text-[#B0B0B0]
                        "
                    >
                        {feature.description}
                    </p>

                </div>
            ))}
        </section>
    );
};