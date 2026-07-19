'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Showcase1 from "../../public/Showcase/1000090355.jpeg"
import Showcase2 from "../../public/Showcase/1000090358.jpeg"
import Showcase3 from "../../public/Showcase/1000090356.jpeg"
import Showcase4 from "../../public/Showcase/1000090357.jpeg"
import Showcase5 from "../../public/Showcase/1000090509.jpeg"

function Showcase() {

    const Images = [
        Showcase5, Showcase1
    ]

    const [count, setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount((prev) => (prev + 1) % Images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [Images.length]);

    return (
        <div className='max-w-[1080px] w-full flex flex-col items-center justify-center overflow-x-hidden pb-3 z-0'>

            <div className="flex flex-row transition-transform duration-500 ease-in-out" 
                style={{transform: `translateX(-${count * 100}%)`}}>
                {Images.map((image, index) => (
                    <div key={index} className="min-w-full">
                        <Image src={image} className="w-full h-screen md:max-h-[768px] object-cover" alt="" priority={index === 0}/>
                    </div>    
                ))} 
            </div>
            <div className="w-full p-3 flex flex-rw items-center justify-between">
                <i className="bx bx-chevron-left cursor-pointer text-black text-2xl hovered" 
                    onClick={() => setCount((prev) => (prev - 1) % Images.length)} />
                <i className="bx bx-chevron-right cursor-pointer text-black text-2xl hovered" 
                    onClick={() => setCount((prev) => (prev + 1) % Images.length)} />
            </div>
            
        </div>
    )
}

export default Showcase