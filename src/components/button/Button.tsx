'use client'
import Link from 'next/link'

interface Props {
  text: string
  url?: string
  onClick?: () => void
  tailwindProperties?: string
  type?: 'submit' | 'button'
}
const Button = ({ text, url, tailwindProperties, onClick, type }: Props) => {
  if (url)
    return (
      <Link href={url}>
        <ButtonElement text={text} tailwindProperties={tailwindProperties} type={type} />
      </Link>
    )
  else if (onClick)
    return <ButtonElement text={text} tailwindProperties={tailwindProperties} onClick={onClick} type={type} />
  else return <ButtonElement text={text} tailwindProperties={tailwindProperties} type={type} />
}
export default Button

interface ButtonElementProps {
  type?: 'submit' | 'button' | undefined
  text: string
  onClick?: () => void
  tailwindProperties?: string
}

const ButtonElement = ({ type, text, tailwindProperties, onClick }: ButtonElementProps) => {
  return (
    <button
      type={type}
      className={`pointer w-fit rounded-md text-sm p-3 border-none text-white bg-[#53C28A] ${tailwindProperties}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {text}
    </button>
  )
}
