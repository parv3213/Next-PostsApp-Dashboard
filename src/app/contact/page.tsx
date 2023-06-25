import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Textarea from '@/components/Input/Textarea'
import Image from 'next/image'

interface Props {}
const Contact = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-start gap-20">
      <h1 className="font-bold text-[60px]">Let&apos;s Keep in Touch</h1>
      <div className="flex flex-row w-full justify-between gap-24 items-center">
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className="object-contain animate-[moveContact_1s_ease_infinite_alternate]"
          />
        </div>
        <form className="flex-1 flex gap-4 flex-col">
          <Input placeholder="name" type="text" />
          <Input placeholder="email" type="email" />
          <Textarea placeholder="message" rows={10} />
          <Button text="Send" url="/" />
        </form>
      </div>
    </div>
  )
}
export default Contact
