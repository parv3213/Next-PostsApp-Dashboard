import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

interface Props {
  params: {
    id: string
  }
}

const BlogPost = async ({ params }: Props) => {
  const id = params.id
  const data = await getData(id)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-5 justify-between w-full">
        <div className="flex flex-col justify-between gap-5 flex-1">
          <h1 className="font-bold text-[40px]">{data.title}</h1>
          <p>{data.desc}</p>
          <div className="flex flex-row gap-3 items-center">
            <Image
              alt="author"
              src="https://www.parv3213.xyz/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6gya9wqz%2Fproduction%2F31b83ddeb432bbd2db9138ac3d293a1c37af3737-1068x1406.jpg&w=256&q=75"
              width={25}
              height={25}
              className="object-cover rounded-full"
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className="relative w-[50%] flex-1">
          <Image fill src={data.img} alt="Post image" className="object-cover rounded-xl" />
        </div>
      </div>
      <p className="text-justify">{data.content}</p>
    </div>
  )
}
export default BlogPost
