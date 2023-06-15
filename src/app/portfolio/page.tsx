import Image from 'next/image'
import Link from 'next/link'

interface Props {}
const Portfolio = (props: Props) => {
  return (
    <div className="flex flex-col justify-start gap-5">
      <p className="text-3xl font-bold">Choose a gallery</p>

      <div className="flex flex-row gap-10 flex-wrap">
        <PortfolioCategory
          href="/portfolio/illustrations"
          src="/illustration.png"
          alt="illustrations"
          title="Illustrations"
        />
        <PortfolioCategory href="/portfolio/websites" src="/websites.jpg" alt="websites" title="Websites" />
        <PortfolioCategory href="/portfolio/applications" src="/apps.jpg" alt="apps" title="Applications" />
      </div>
    </div>
  )
}
export default Portfolio

interface PortfolioCategoryProps {
  href: string
  src: string
  alt: string
  title: string
}

const PortfolioCategory = ({ href, src, alt, title }: PortfolioCategoryProps) => {
  return (
    <div className="h-[400px] w-[300px] border-[5px] border-[#bbb] overflow-x-hidden hover:text-[#53C28A]">
      <Link href={href}>
        <div className="w-full h-full relative">
          <Image src={src} alt={alt} fill className="object-cover object-left" />
          <span className="text-[40px] font-bold absolute bottom-2 right-2">{title}</span>
        </div>
      </Link>
    </div>
  )
}
