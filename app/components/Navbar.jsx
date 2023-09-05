import Link from 'next/link'
import React from 'react'
import Logo from '../../public/logo.png'
import Image from 'next/image'

function Navbar() {
  return (

    <nav className='pb-4
    border-b-2 border-gray-200 
    flex flex-col sm:flex-row items-center gap-5 
    my-10 mx-auto 
    max-w-5xl'>
    <Image className='invisible md:visible'
      src={Logo}
      alt='logo'
      width={70}
      placeholder='blur'
      quality={100}
    />
    <div className='flex gap-3'>
    <Image className='visble md:invisible'
      src={Logo}
      alt='logo'
      width={40}
      placeholder='blur'
      quality={100}
    /> <h1>Helpdesk</h1>
    </div>
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">Tickets</Link>
    <Link href="/tickets/create">Create Ticket</Link>

  </nav>

  )
}

export default Navbar