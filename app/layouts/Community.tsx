'use client'

function Community() {
    return (
        <div className="max-w-[1080px] w-full flex flex-col items-center justify-center gap-6 px-3 py-12 bg-gray-100">

            <span className="font-mono text-black">Join The Unworldly Community</span>
            <span className="font-mono text-black text-center sm:text-sm text-xs">Join our mailing list and enjoy 10% off your first order. 
                Stay up to date with Unworldly's new arrivals, promotions and events.</span>
            
            <div className="w-full flex flex-row items-center relative sm:w-full md:w-[300px]">
                <input type="email" placeholder="Email" className="w-full placeholder:text-[#EA7B7B] outline-none bg-white p-3 sm:text-sm text-xs text-black"
                    maxLength={60} required/>
                <i className="bx bx-chevron-right cursor-pointer text-black text-2xl absolute bg-white right-0 px-3 hovered" />
            </div>
            
        </div>
    )
}

export default Community