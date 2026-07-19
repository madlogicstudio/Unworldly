'use client'

import { useState } from "react";
import Image from "next/image";

type HeaderProps = {
    setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
    cart: any[];
    addToCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Cart = ({setIsCart, cart, addToCart}: HeaderProps) => {

    const handleRemove = (idToRemove: number) => {
        addToCart((prevItems) => prevItems.filter((item) => item.Title !== idToRemove));
    }
    
    return (
        <div className='min-h-screen w-full flex flex-col items-start justify-start p-3 gap-3'>
            <div className="w-full flex flex-row items-center justify-start gap-3">
                <div className="w-full flex flex-row items-center justify-start gap-3">
                    <i className="bx bx-arrow-left cursor-pointer text-black text-2xl hovered" 
                        onClick={() => setIsCart(false)} />
                    <span className="font-mono text-black">Back</span>
                </div>
                
                <span className="font-mono text-black">Products</span>
            </div>

            {cart.length === 0 && <div className="w-full h-screen flex flex-col items-center justify-center p-3 gap-3 text-black">
                It appears that your cart is currently empty!
                <span className="font-mono text-black p-3 border text-sm cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
                    onClick={() => setIsCart(false)}>Continue Shopping</span>
            </div>}

            {cart.length != 0 && <div className="w-full flex flex-col items-start justify-start py-3 gap-3 text-black">
                
                {cart.map((item, index) => (
                    <div key={index} className="h-full w-full flex flex-row items-start shadow-lg">
                        <div className="relative sm:h-60 sm:w-60 h-30 w-30 flex-shrink-0">
                            <Image 
                                src={item.Image} 
                                alt={item.Title} 
                                fill 
                                className="object-cover transition duration-300 ease-in-out" 
                            />
                        </div>

                        <div className="sm:h-60 h-auto flex-1 flex flex-col items-start justify-start p-3 gap-2">
                            <div className="w-full flex sm:flex-row flex-col sm:items-center items-start justify-between gap-2">
                                <span className="text-black sm:text-lg text-md font-semibold">
                                    {item.Title}
                                </span>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="text-black sm:text-md text-sm">Color: </span>
                                    <div className="w-full flex flex-row items-center border px-2 py-1 rounded">
                                        <span className="text-black sm:text-md text-sm cursor-pointer">Black</span>
                                        <i className="bx bx-chevron-down cursor-pointer text-black text-xl ml-1 hovered" />
                                    </div>
                                </div>
                            </div>
                            
                            <span className="text-gray-500 sm:text-md text-sm font-mono">
                                ₱ {item.Price}
                            </span>

                            <div className="h-full w-full flex flex-row items-end justify-end">
                                <i className="bx bx-trash cursor-pointer sm:text-2xl text-xl hovered transition" 
                                    onClick={() => handleRemove(item.Title)} />
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>}
            
        </div>
    )
}
