'use client'

import Image from "next/image"
import React, { useState } from "react"

type ProductCardProps = {
    onSelect: (color: "white" | "black") => void;
    img: any;
    title: string;
    price: String;
    cart: any[];
    addToCart: React.Dispatch<React.SetStateAction<any[]>>;
    selectedColors: "white" | "black";
}

export const ProductCard = ({onSelect, img, title, price, cart, addToCart, selectedColors}: ProductCardProps) => {

    const [selected, setSelected] = useState(true);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {

        setIsAdded(true);

        addToCart([
            ...cart,
            {
                Image: img,
                Title: title,
                Price: price,
                Color: selectedColors
            }
        ]);

        setInterval(() => {
            setIsAdded(false);
        }, 3000);
    } 

    return (
        <div className="h-auto w-[160px] sm:w-[240px] flex flex-col items-start justify-center gap- shadow-lg cursor-pointer overflow-hidden">

            <Image src={img} className="hover:scale-150 transition duration-300 ease-in-out border" alt="" />

            <div className="w-full flex flex-row items-center justify-start p-3 bg-white z-10">
                <div className={`${selected? "bg-gray-200" : ""} flex flex-row items-center p-1`} 
                    onClick={() => {
                        setSelected(true);
                        onSelect("white");
                    }}>
                    <i className="bx bx-squircle text-black cursor-pointer" />
                </div>
                <div className={`${selected? "" : "bg-gray-200"} flex flex-row items-center p-1`} 
                    onClick={() => {
                        setSelected(false);
                        onSelect("black");
                    }}>
                    <i className="bxf bx-squircle text-black cursor-pointer" />
                </div>            
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-3 p-3 z-10 bg-white">
                <span className="w-full font-mono text-black text-sm truncate">{title}</span>
                <span className="w-full font-sans text-black text-sm truncate">₱ {price}</span>
            </div>

            <div className="w-full flex flex-row items-center justify-between px-3 pb-3 z-10 bg-white">
                <i className="bx bx-heart cursor-pointer text-black text-xl" />
                {isAdded? 
                    <i className="bx bx-check cursor-pointer text-green-300 text-xl" />
                    :
                    <i className="bx bx-cart cursor-pointer text-black text-xl hovered" 
                        onClick={handleAddToCart}/>
                }
                
            </div>
            
        </div>
    )
}
