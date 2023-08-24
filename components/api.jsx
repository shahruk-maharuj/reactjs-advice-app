import { useState } from "react";

export default function api() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
    setAdvice(data.slip.advice)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-6xl font-bold'>{advice}</h1>
      <button onClick={getAdvice} className="bg-[#141414] hover:bg-[#343434] text-[#fff] text-xl rounded-full pt-10 pb-10 pl-20 pr-20">Get Advice</button>
    </main>
  )
}
