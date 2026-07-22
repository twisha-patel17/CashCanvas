import { FeatureCards } from "./FeatureCards"
import { ReceiptSummary } from "./ReceiptSummary"
import { useNavigate } from "react-router-dom";

export const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="w-full pt-16 sm:px-[6%] sm:pt-20 lg:pt-24 pb-14 px-4 bg-[repeating-linear-gradient(180deg,#F7F5EF,#F7F5EF_27px,#DCD6C7_28px)] dark:bg-[repeating-linear-gradient(180deg,#121212,#121212_27px,#262626_28px)]">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
  <p style={{
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: '19px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#2D5A4A',
    margin: '0 0 14px'
  }} className=" dark:text-[#3E8E7E]">
    Personal finance, kept honestly
  </p>

  <h1 style={{
    fontFamily: 'Fraunces, serif',
    fontWeight: 500,
    lineHeight: 1.12,
    margin: '0 0 18px'
  }} className="dark:text-white text-4xl text-[#1C2321] sm:text-5xl lg:text-[56px]">
    Know exactly where <em style={{ color: '#2D5A4A' }} className=" dark:text-[#3E8E7E]">every rupee</em> goes.
  </h1>

  <p style={{
    fontFamily: 'Inter, sans-serif',
    color: '#5B6360',
    maxWidth: '480px',
    margin: '0 auto'
  }} className="dark:text-[#B0B0B0] mx-auto sm:text-[17px]">
    Track income, expenses, and budgets in one plain, paper-simple ledger — no spreadsheets required.
  </p>
</div>

<div className="mt-8 flex justify-center sm:mt-10"> 
    <button
  className="
    bg-[#2D5A4A]
    text-[#F3F0E6]
    text-[14px]
    font-semibold
    px-5
    text-sm
    py-3
    rounded-[3px]
    hover:bg-[#23483b]
    transition-colors
    dark:bg-[#3E8E7E]
     dark:text-white
     dark:hover:bg-[#34796C]
  "
  onClick={() => navigate("/signup")}
>
  Get started free
</button>
</div>

   <ReceiptSummary />
   <FeatureCards />

    </section>
  )
}
