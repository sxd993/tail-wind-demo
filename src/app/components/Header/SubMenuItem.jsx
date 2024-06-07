import Link from "next/link"

export default function Item({ children, href }) {
    return (
        <Link class='font-bold ' href={href}>{children}</Link>
    )
}

