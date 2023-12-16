'use client'

import { BiCaretLeft } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation"

useRouter

export const BackIcon = () => {

    const router = useRouter()
    const pathname = usePathname()

    function goBack() {
        if (pathname !== '/') router.back()
    }

    return (
        <button onClick={goBack}>
            <BiCaretLeft />
        </button>
    )
}