'use client'

import Brand from "../../public/Icons/Brand.png"

type HeaderProps = {
    setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({setIsCart}: HeaderProps) {
    return (
        <div className="w-full flex justify-center sticky top-0 z-40">

            <div className="max-w-[1080px] w-full flex flex-row items-center justify-between p-3 shadow-lg bg-white">
                <img src={Brand.src} className="sm:h-12 sm:w-46 h-9 w-32 cursor-pointer" alt="Brand" onClick={() => location.reload()} />
                <div className="flex flex-row items-center gap-3">
                    <i title="Search" className="bx bx-search-big cursor-pointer text-black sm:text-2xl text-xl hovered" />
                    <i title="Wishlist" className="bx bx-heart cursor-pointer text-black sm:text-2xl text-xl hovered" />
                    <i title="Log in" className="bx bx-user cursor-pointer text-black sm:text-2xl text-xl hovered" />
                    <i title="Cart" className="bx bx-shopping-bag cursor-pointer text-black sm:text-2xl text-xl hovered" 
                        onClick={() => setIsCart(true)}/>
                </div>
            </div>

        </div>
    )
}

export default Header