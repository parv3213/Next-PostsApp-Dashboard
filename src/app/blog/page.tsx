import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/posts`, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export const metadata = {
  title: 'Blogs',
  description: 'This is the Lamadev blogs',
}

interface Props {}

const Blog = async (props: Props) => {
  const data = await getData()

  return (
    <div className="flex flex-col gap-10">
      {data.map((item: any) => {
        return (
          <Link
            href={`/blog/${item._id}`}
            key={item._id}
            className="flex flex-row justify-between gap-10 w-full pointer hover:scale-[1.02] transition duration-200"
          >
            <div className="">
              <Image
                src={item.img}
                alt="blog image"
                className="object-cover w-[200px] h-[200px]"
                width={200}
                height={200}
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <h2>{item.desc}</h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default Blog
