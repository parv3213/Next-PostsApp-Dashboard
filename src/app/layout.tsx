import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev',
  description: 'Lama Dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto min-h-[100vh] flex flex-col justify-between md:px-10 px-14">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
