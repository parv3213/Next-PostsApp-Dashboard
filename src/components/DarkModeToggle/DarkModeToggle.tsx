import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

interface Props {}
const DarkModeToggle = (props: Props) => {
  const { toggle, mode } = useContext(ThemeContext)

  return (
    <div
      className="relative border-[1px] border-[#53C28A] border-opacity-60 rounded-full flex flex-row items-center justify-between gap-3 p-[3px] pointer"
      onClick={toggle}
    >
      <div className="text-sm">🌙</div>
      <div className="text-sm">☀️</div>
      <div
        className={`p-1 absolute w-4 h-4 bg-[#53C28A] rounded-full ${mode === 'light' ? 'right-[3px]' : 'left-[3px]'}`}
      />
    </div>
  )
}
export default DarkModeToggle
