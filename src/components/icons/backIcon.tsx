'use client'

import { BiCaretLeft } from "react-icons/bi";
import { IconContext } from 'react-icons'
import { useRouter, usePathname } from "next/navigation"

export const BackIcon = () => {
    const router = useRouter()
    const pathname = usePathname()

    function goBack() {
        if (pathname !== '/') router.back()
    }

    return (
        <button
            onClick={goBack}
            className="h-full p-2 aspect-square flex items-center"
        >
            <IconContext.Provider value={{ size: "fit-content" }} >
                <BiCaretLeft />
            </IconContext.Provider>
        </button>
    )
}