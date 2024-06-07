import Image from 'next/image'
import HeaderLink from './HeaderItem'
import BurgerMenu from './BurgerMenu'
import DarkModeButton from '../Button/DarkModeButton'
import logoINV from '../../../../assets/images/logo-inverted.png'


export default function Header() {
    return (
        <header className='text-zinc-200'>
            <nav className="flex flex-row justify-between items-center top-0 bg-gradient-to-r from-red-500 to-pink-500 z-10 fixed left-0 w-full">
                <div className='flex items-center p-3 gap-2'>
                    <Image src={logoINV} alt='logo' width={50} />
                    <div className='inline font-bold text-2xl'>
                        <span>SOME</span>:
                        <span className='text-sky-700'>THING</span>
                    </div>
                </div>
                <div className='block md:hidden ml-auto p-4 my-auto cursor-pointer '>
                    <DarkModeButton />
                    <BurgerMenu />
                </div>
                <div className='hidden md:flex items-center'>
                    <HeaderLink title="Home" href="/" />
                    <HeaderLink title="Lineup" href="/lineup" />
                    <HeaderLink title="Tickets" href="/tickets" />
                    <HeaderLink title="Support" href="/support" />
                    <DarkModeButton />
                </div>

            </nav>
        </header>
    )
}
