import { HTMLInputTypeAttribute } from 'react'

interface Props {
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
}
const Input = ({ placeholder, type }: Props) => {
  return (
    <input
      type={type}
      className="outline-none border-2 border-[#bbb] bg-transparent p-5 text-xl placeholder-current placeholder:opacity-60 font-semibold"
      placeholder={placeholder}
    />
  )
}
export default Input
