import Link from 'next/link';

export default function HeaderLink({ title, href, children, position }) {
    return (
        <Link href={href} class={`relative flex h-full items-center py-2 px-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors delay-0 ease-in-out rounded-[56px]`}>
            <span>{title}</span>
            {children}
        </Link>

    );
}
