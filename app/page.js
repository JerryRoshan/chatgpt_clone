import Banner from '@/components/Banner'
import Header from '@/components/Header'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen w-screen'>
        <Banner />
        <Header />
      </div>
    </>
  )
}
