export const SummaryCard = ({
  label,
  value,
  icon,
  valueColor,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="bg-white border border-[#DCD6C7] rounded-2xl p-5 min-h-[140px]">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#2D5A4A] font-medium">
          {label}
        </p>

        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: iconBg }}
        >
          <span className="text-xl" style={{ color: iconColor }}>
            {icon}
          </span>
        </div>
      </div>

      {/* Value */}
      <h2
        className="mt-5 text-[26px] font-semibold"
        style={{ color: valueColor }}
      >
        {value}
      </h2>
    </div>
  );
};
