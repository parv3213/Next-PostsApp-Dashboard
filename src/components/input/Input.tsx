import { HTMLInputTypeAttribute } from 'react'

interface Props {
  name?: string
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
  tailwindProperties?: string
}
const Input = ({ name, placeholder, type, tailwindProperties }: Props) => {
  return (
    <input
      name={name}
      type={type}
      className={`outline-none border-2 border-[#bbb] bg-transparent p-5 text-xl placeholder-current placeholder:opacity-60 font-semibold ${tailwindProperties}`}
      placeholder={placeholder}
      autoComplete="new-password"
    />
  )
}
export default Input
