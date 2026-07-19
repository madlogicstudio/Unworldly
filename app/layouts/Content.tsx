'use client'

import Community from "./Community"
import Products from "./Products"
import { Cart } from "../components/Cart"

type ContentProps = {
    isCart: boolean;
    setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
    cart: any[];
    addToCart: React.Dispatch<React.SetStateAction<any[]>>;
}

function Content({isCart, setIsCart, cart, addToCart}: ContentProps) {

    

    return (
        <div className="max-w-[1080px] w-full flex flex-col items-center justify-start">
            {!isCart && <Products cart={cart} addToCart={addToCart} />}
            {!isCart && <Community />}
            {isCart && <Cart setIsCart={setIsCart} cart={cart} addToCart={addToCart}/>}
        </div>
    )
}

export default Content