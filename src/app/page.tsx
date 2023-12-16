import Link from "next/link"
import { ReactNode } from "react"

const DefaultPage = () => {

    return (
        <ul className="flex flex-col gap-2 p-4">
            <DefaultLink href={'/trends'}>Trends</DefaultLink>
            <DefaultLink href={'/Movies'}>Movies</DefaultLink>
        </ul>
    )
}

const DefaultLink = ({ children, href, ...props }: { children: ReactNode, href: string }) => (
    <Link
        {...props}
        href={href}
        className="bg-cyan-500 p-2 rounded shadow text-center text-2xl font-bold" >
        {children}
    </Link>
)


export default DefaultPage