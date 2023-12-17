'use client'

import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from 'react-icons'

export const MenuIcon = () => {

    return (
        <button
            className="h-full p-2 aspect-square flex items-center"
        >
            <IconContext.Provider value={{ size: "fit-content" }} >
                <BiMenuAltRight />
            </IconContext.Provider>
        </button>
    )
}