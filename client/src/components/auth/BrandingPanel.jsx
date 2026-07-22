import logo from "../../assets/cashcanvas-logo.png";
import { Link } from "react-router-dom";

export const BrandingPanel = ({quote, author}) => {
  return (
    <div className="bg-[#1F3F34] dark:bg-[#162B24] h-[calc(100vh-18px)] lg:px-15 lg:py-15 px-6 py-8 sm:px-10 sm:py-10 flex flex-col justify-between">

  {/* Top */}
  <div className="flex items-center gap-3">
    <img src={logo} alt="CashCanvas" className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12" />
    <Link
        to="/"
        className="inline-block w-fit font-fraunces dark:text-white text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#EDE7D6] hover:opacity-80 transition-opacity"
      >
        CashCanvas
      </Link>
  </div>

  {/* Middle */}
  <div>
<p className="max-w-full sm:max-w-md text-2xl sm:text-[26px] lg:[28px] font-['Cormorant_Garamond'] text-[28px] dark:text-[#F5F5F5] font-semibold italic leading-[1.35] text-[#EDE7D6] wrap-break-word">
  {quote}
</p>
  </div>

  {/* Bottom */}
  <p className="text-sm sm:text-[14px] text-[#CFC7B3] dark:text-[#B0B0B0]">
    {author}
  </p>

</div>
  )
}
