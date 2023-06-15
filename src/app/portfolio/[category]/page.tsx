import Button from '@/components/button/Button'
import Image from 'next/image.js'
import { notFound } from 'next/navigation'
import { items } from './data.js'

const getData = (cat: any) => {
  // @ts-ignore
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }: any) => {
  const category = params.category
  const data = getData(category)
  return (
    <div className="">
      <h1 className="text-[#53C28A] mb-20 text-3xl font-bold">{category}</h1>
      <div className="flex flex-col gap-10">
        {/* @ts-ignore */}
        {data.map((topic, index) => {
          return (
            <div
              className={`flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } justify-between items-center gap-10 w-full`}
            >
              <div className="flex flex-col gap-3 max-w-[50%]">
                <h3 className="text-4xl font-semibold">{topic.title}</h3>
                <p className="text-xl text-medium">{topic.desc}</p>
                <Button text="See more" url="/" />
              </div>
              <div className="relative h-[500px] w-full">
                <Image src={topic.image} alt="topic" fill />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Category
