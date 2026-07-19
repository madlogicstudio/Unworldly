'use client'

import { ProductCard } from "../components/ProductCard"
import { useState } from "react"

import Fangs from "../../public/Tshirts/Fangs_white.jpg"
import Classic from "../../public/Tshirts/Classic_white.png"
import Faith from "../../public/Tshirts/Faith_white.jpg"
import Underdog from "../../public/Tshirts/Underdog_white.jpg"
import Logo from "../../public/Tshirts/Logo_white.jpg"
import Defy from "../../public/Tshirts/Defy_white.jpg"
import Cosmic from "../../public/Tshirts/Cosmic_white.jpg"
import Beast from "../../public/Tshirts/Beast_white.jpg"

import FangsBlack from "../../public/Tshirts/Fangs_black.png"
import ClassicBlack from "../../public/Tshirts/Classic_black.png"
import FaithBlack from "../../public/Tshirts/Faith_black.png"
import UnderdogBlack from "../../public/Tshirts/Underdog_black.png"
import LogoBlack from "../../public/Tshirts/Logo_black.png"
import DefyBlack from "../../public/Tshirts/Defy_black.png"
import CosmicBlack from "../../public/Tshirts/Cosmic_black.png"
import BeastBlack from "../../public/Tshirts/Beast_black.png"

type ProductsProps = {
    cart: any[];
    addToCart: React.Dispatch<React.SetStateAction<any[]>>;
}

function Products({cart, addToCart}: ProductsProps) {

    const products = [
        {
            white: Classic,
            black: ClassicBlack,
            title: "Unworldly Classic",
            price: "299"
        },
        {
            white: Fangs,
            black: FangsBlack,
            title: "Chin Up, Fangs Out!",
            price: "499"
        },
        {
            white: Faith,
            black: FaithBlack,
            title: "Keep The Faith",
            price: "399"
        },
        {
            white: Underdog,
            black: UnderdogBlack,
            title: "Underdog",
            price: "399"
        },
        {
            white: Logo,
            black: LogoBlack,
            title: "Unworldly Logo",
            price: "299"
        },
        {
            white: Cosmic,
            black: CosmicBlack,
            title: "Cosmic Vision",
            price: "499"
        },
        {
            white: Defy,
            black:DefyBlack,
            title: "Defy The Odds",
            price: "499"
        },
        {
            white: Beast,
            black: BeastBlack,
            title: "Inner Beast!",
            price: "499"
        },
    ]

    const [selectedColors, setSelectedColors] = useState(
        Array(products.length).fill("white")
    );

    const handleColorChange = (index: number, color: "white" | "black") => {
        setSelectedColors(prev => {
            const updated = [...prev];
            updated[index] = color;
            return updated;
        });
    };

    return (
        <div className="max-w-[1080px] w-full flex flex-col items-center justify-start gap-3 p-3">
            <span className="font-mono text-black">Products</span>

            <div className="w-auto flex flex-row items-center justify-center flex-wrap gap-3">
                {products.map((shirt, index) => (
                    <div key={index}>
                        <ProductCard cart={cart} addToCart={addToCart} selectedColors={selectedColors[index]}
                        img={
                            selectedColors[index] === "white"
                                ? shirt.white
                                : shirt.black
                        }
                        title={shirt.title} price={shirt.price} onSelect={(color) => handleColorChange(index, color)} />
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Products
