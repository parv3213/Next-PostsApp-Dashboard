import AuthProvider from '@/components/AuthProvider/AuthProvider'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev',
  description: 'This is the description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="max-w-7xl mx-auto min-h-[100vh] flex flex-col justify-between md:px-10 px-14">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
