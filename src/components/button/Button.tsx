import Link from 'next/link'

interface Props {
  text: string
  url: string
}
const Button = ({ text, url }: Props) => {
  return (
    <Link href={url || ''}>
      <button className="pointer w-fit rounded-md text-sm p-3 border-none text-white bg-[#53C28A]">{text}</button>
    </Link>
  )
}
export default Button
