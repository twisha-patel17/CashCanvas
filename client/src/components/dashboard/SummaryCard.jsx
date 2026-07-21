export const SummaryCard = ({
  label,
  value,
  subtitle,
  icon,
  valueColor,
  iconBg,
  iconColor,
}) => {
  return (
    <div
      className="
      min-h-35 rounded-2xl border border-[#DCD6C7]
      bg-white p-5 transition-all duration-300
      hover:-translate-y-1 hover:shadow-md
      dark:border-[#3A3A3A] dark:bg-[#1F1F1F]
      "
    >
      <div className="flex items-center justify-between">
        <p
          className="
          text-[11px] font-medium uppercase
          tracking-[0.12em] text-[#2D5A4A]
          dark:text-[#7BC3AF]
          "
        >
          {label}
        </p>

        <div
          className="
          flex h-10 w-10 items-center justify-center
          rounded-xl
          "
          style={{ backgroundColor: iconBg }}
        >
          <span
            className="text-xl"
            style={{ color: iconColor }}
          >
            {icon}
          </span>
        </div>
      </div>

      <h2
        className="
        mt-5 text-[26px] font-semibold
        "
        style={{ color: valueColor }}
      >
        {value}
      </h2>

      <p
        className="
        mt-1 text-sm text-[#5B6360]
        dark:text-[#A1A1AA]
        "
      >
        {subtitle}
      </p>
    </div>
  );
};
