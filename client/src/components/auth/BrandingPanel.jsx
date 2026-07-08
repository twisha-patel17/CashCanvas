import logo from "../../assets/cashcanvas-logo.png";
import { Link } from "react-router-dom";

export const BrandingPanel = ({quote, author}) => {
  return (
    <div className="bg-[#1F3F34] h-[calc(100vh-18px)] px-15 py-15 flex flex-col justify-between">

  {/* Top */}
  <div className="flex items-center gap-3">
    <img src={logo} alt="CashCanvas" className="w-12 h-12" />
    <Link
        to="/"
        className="inline-block w-fit font-fraunces text-[32px] font-semibold text-[#EDE7D6] hover:opacity-80 transition-opacity"
      >
        CashCanvas
      </Link>
  </div>

  {/* Middle */}
  <div>
<p className="max-w-85 font-['Cormorant_Garamond'] text-[28px] font-semibold italic leading-[1.35] text-[#EDE7D6]">
  {quote}
</p>
  </div>

  {/* Bottom */}
  <p className="text-[14px] text-[#CFC7B3]">
    {author}
  </p>

</div>
  )
}
