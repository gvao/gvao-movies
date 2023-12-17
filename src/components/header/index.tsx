import Link from "next/link";

import { Title } from "../typography";
import { BackIcon, MenuIcon } from "../icons";

export default function Header() {

    return (
        <header className='h-12 w-full fixed top-0 bg-neutral-300 z-50'>
            <div className="container h-full flex items-center justify-between px-2">

                <BackIcon />

                <Link href={'/'}>
                    <Title>GM</Title>
                </Link>

                <MenuIcon />

            </div>
        </header>

    )
}

