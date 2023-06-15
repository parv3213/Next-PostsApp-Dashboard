'use client'

import { createContext, useState } from 'react'

type ThemeContext = {
  toggle: () => void
  mode: 'dark' | 'light'
}

export const ThemeContext = createContext<ThemeContext>({
  toggle: () => undefined,
  mode: 'dark',
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
