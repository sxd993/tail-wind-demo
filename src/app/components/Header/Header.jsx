import Image from 'next/image'
import logo from '../../../../assets/images/logo-inverted.png'
import HeaderLink from './HeaderItem'

export default function Header() {
    return (
        <header class='text-zinc-200 font-quicksand'>
            <nav
                class="sticky flex flex-row justify-between top-0 bg-gradient-to-r from-red-500 to-pink-500"
            >
                <div class=' flex items-center p-2 gap-2'>
                    <Image src={logo} alt='logo' width={50} />
                    <div class=' inline font-bold text-2xl'>
                        <span>tw</span>
                        :
                        <span class='text-sky-700'>mf</span>
                    </div>
                </div>
                <div class=' flex items-center '>
                    <HeaderLink title='Home' href='/' />
                    <HeaderLink title='Lineup' href='/lineup' />
                    <HeaderLink title='Tickets' href='/tickets' />
                    <HeaderLink title='Support' href='/support' />
                </div>
            </nav>
        </header>
    )

}