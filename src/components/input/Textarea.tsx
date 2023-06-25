import { HTMLInputTypeAttribute } from 'react'

interface Props {
  name?: string
  placeholder: string
  tailwindProperties?: string
  rows?: number
}
const Textarea = ({ name, placeholder, tailwindProperties, rows }: Props) => {
  return (
    <textarea
      name={name}
      className={`font-semibold outline-none border-2 border-[#bbb] bg-transparent p-5 text-xl placeholder-current placeholder:opacity-60 ${tailwindProperties}`}
      placeholder={placeholder}
      rows={rows || 10}
      autoComplete="new-password"
    />
  )
}
export default Textarea
