'use client'

import Header from "./layouts/Header"
import Showcase from "./layouts/Showcase"
import Content from "./layouts/Content"
import Footer from "./layouts/Footer"
import { TextCarousell } from "./components/TextCarousell"
import { useState } from "react"

function page() {

  const [isCart, setIsCart] = useState(false);
  const [cart, addToCart] = useState<any[]>([])

  return (
    <div className="h-auto w-full flex flex-col items-center justify-start bg-white">
      <TextCarousell />
      <Header setIsCart={setIsCart} />
      {!isCart && <Showcase />}
      <Content isCart={isCart} setIsCart={setIsCart} cart={cart} addToCart={addToCart}/>
      <Footer />
    </div>
  )
}

export default page