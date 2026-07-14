'use client'

import Image from "next/image"

import Skull from "../../public/Icons/Icon.png"

function Footer() {
    return (
        <div className="max-w-[1080px] w-full flex flex-col items-center justify-start px-3 pb-12 gap-6 shadow-lg bg-black text-white">

            <div className="flex sm:flex-row flex-col">
                <div className="flex-2 flex flex-col text-center sm:text-start items-center sm:items-start gap-6 p-6">
                    <Image src={Skull} className="h-24 w-24" alt=""/>
                    <span className="font-mono sm:text-sm text-xs sm:pr-32">Unworldly is an Artist Owned & Operated Street Wear website.</span>
                </div>
                <div className="flex-1 h-full flex flex-col text-center sm:text-start items-center sm:items-start gap-3 p-6">
                    <span className="font-mono sm:text-sm text-xs uppercase my-3">Help</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Shipping Delivery</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Return & Refunds</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Contact Us</span>
                </div>
                <div className="flex-1 h-full flex flex-col text-center sm:text-start items-center sm:items-start gap-3 p-6">
                    <span className="font-mono sm:text-sm text-xs uppercase my-3">Legal Area</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Terms & Conditions</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Privacy Policy</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Cookie Policy</span>
                </div>
            </div>
            
            <div className="w-full flex sm:flex-row flex-col-reverse items-center justify-between p-6 gap-6 pb-0">
                <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">© 2026 Unworldly | Madlogicstudio</span>
                <div className="flex sm:flex-row flex-col items-center justify-center gap-3 ">
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Facebook</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Instagram</span>
                    <span className="font-mono sm:text-sm text-xs cursor-pointer hovered">Tiktok</span>
                </div>
            </div>

        </div>
    )
}

export default Footer