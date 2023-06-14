import Image from 'next/image'

interface Props {}
const Footer = (props: Props) => {
  return (
    <div className="py-4 text-sm flex items-center justify-between">
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className="flex items-center gap-2">
        <Image src="/1.png" alt="1" width={15} height={15} className=" opacity-50 cursor-pointer" />
        <Image src="/2.png" alt="2" width={15} height={15} className=" opacity-50 cursor-pointer" />
        <Image src="/3.png" alt="3" width={15} height={15} className=" opacity-50 cursor-pointer" />
        <Image src="/4.png" alt="4" width={15} height={15} className=" opacity-50 cursor-pointer" />
      </div>
    </div>
  )
}
export default Footer
