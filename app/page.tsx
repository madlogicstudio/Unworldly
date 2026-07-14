'use client'

import Header from "./layouts/Header"
import Showcase from "./layouts/Showcase"
import Products from "./layouts/Products"
import Community from "./layouts/Community"
import Footer from "./layouts/Footer"
import { TextCarousell } from "./components/TextCarousell"

function page() {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-start bg-white">
      <TextCarousell />
      <Header />
      <Showcase />
      <Products />
      <Community />
      <Footer />
    </div>
  )
}

export default page