import Button from '@/components/Button/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center gap-20 ">
      <div className="flex flex-col gap-10">
        <h1 className="text-[72px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#194c33] to-[#bbb]">
          Better design for your digital products.
        </h1>
        <p className="text-[24px]">
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See our Work" />
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="Hero image"
          width={1000}
          height={1000}
          className="animate-[moveHero_1s_ease_infinite_alternate] object-contain"
        />
      </div>
    </div>
  )
}
