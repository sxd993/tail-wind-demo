import hero from '../../assets/images/hero.jpg'
import logo from '../../assets/images/logo.png'
import Image from 'next/image'
import FormSubmit from './components/FormSubmit/FormSubmit'

import band1 from '../../public/band1.jpg'
import band2 from '../../public/band2.jpg'
import band3 from '../../public/band3.jpg'
import band4 from '../../public/band4.jpg'
import band5 from '../../public/band5.jpg'
import band6 from '../../public/band6.jpg'
import band7 from '../../public/band7.jpg'

import BandItem from './components/BandItem/BandItem'

export default function HomePage() {
  return (
    <>
      <div className=' bg-cover bg-center bg-fixed flex flex-col items-center justify-center min-h-[400px] h-[calc(100vh-200px)]' style={{ backgroundImage: `url(${hero.src})` }}>
        <div className='bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md'>
          <div className='relative'>
            <Image src={logo} alt='logo' width={175}></Image>
            <div className='flex items-center justify-center mt-[-70px] mb-8'>
              <div class='bg-pink-500 w-14 h-14 rounded-full flex justify-center items-center gap-1'>
                <div class='h-2 w-1 bg-pink-300 rounded-full animate-wavey1'></div>
                <div class='h-3 w-1 bg-pink-200 rounded-full animate-wavey2'></div>
                <div class='h-4 w-1 bg-pink-100 rounded-full animate-wavey3'></div>
                <div class='h-3 w-1 bg-pink-200 rounded-full animate-wavey2'></div>
                <div class='h-2 w-1 bg-pink-300 rounded-full animate-wavey1'></div>
              </div>
            </div>
          </div>

          <h1 className='text-4xl font-bold mt-4'>
            SM:<span className='text-sky-900'>TG</span>
          </h1>
        </div>
        <div className='flex gap-3 flex-col items-center rounded-lg'>
          <h1 className='font-bold mt-3 text-base p-3 rounded-lg'>Keep me updated with news and promotions</h1>
          <FormSubmit />
        </div>
      </div>
      <main className='max-w-screen-lg mt-20 mx-auto flex flex-col gap-2 items-center mb-[200px] '>
        <h2>Headliners</h2>
        <h6 className='p-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vitae maiores velit iusto, fuga numquam ipsum tempore reiciendis architecto doloribus omnis laborum natus saepe. Ipsum provident amet itaque ex facere?</h6>
        <div className="w-full pb-6 mt-4 flex gap-4 snap-x scroll-auto overflow-auto md:grid md:grid-cols-2 md:gap-6 md:overflow-hidden">
          <BandItem src={band1} name={'Corduroy Gary'} event={'1st July 9pm - Main Stage'} />
          <BandItem src={band2} name={'Corduroy Gary'} event={'1st July 9pm - Main Stage'} />
          <BandItem src={band3} name={'Corduroy Gary'} event={'1st July 9pm - Main Stage'} />
          <BandItem src={band4} name={'Corduroy Gary'} event={'1st July 9pm - Main Stage'} />
          <BandItem src={band5} name={'Corduroy Gary'} event={'1st July 9pm - Main Stage'} />
          <BandItem src={band6} name={'Corduroy Gary'} event={'1st July 9pm - Main Stage'} />
          <BandItem src={band7} name={'Corduroy Gary'} event={'1st July 9pm - Main Stage'} />
        </div>
      </main>
    </>
  )
}
