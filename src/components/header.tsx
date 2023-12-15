import Link from "next/link";
import { Title } from "./typography";

export default function Header() {
    return (
        <header className='h-12 w-full fixed top-0 bg-neutral-300'>

            <Link href={'/'}>
                <Title>Gvão Movies</Title>
            </Link>
        </header>

    )
}
