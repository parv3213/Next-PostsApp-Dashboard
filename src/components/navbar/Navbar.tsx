'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]

interface Props {}

const Navbar = (props: Props) => {
  const session = useSession()

  return (
    <div className="flex justify-between py-10">
      <Link href="/" className="font-bold text-xl">
        lamamia
      </Link>

      <div className="flex gap-5 items-center">
        <DarkModeToggle />
        <ul className="flex gap-4 items-center">
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
        </ul>
        {session.status === 'authenticated' && (
          <button
            className="text-sm rounded-md px-2 py-1 border-none text-white bg-[#53C28A]"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}
export default Navbar
