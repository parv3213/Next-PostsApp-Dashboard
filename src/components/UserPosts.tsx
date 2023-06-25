import Image from 'next/image'

interface Props {
  data: any
  loading: boolean
  handleDelete: (id: string) => Promise<void>
}
const UserPosts = ({ data, loading, handleDelete }: Props) => {
  if (loading) {
    return <p className="text-center">Loading</p>
  }

  return (
    <div className="flex-1 flex flex-col gap-5">
      {data &&
        data.map((post: any) => {
          return (
            <div className="flex flex-row justify-between items-center gap-2">
              <Image src={post.img} alt="Post image" width={100} height={100} className="object-cover" />
              <span className="text-xl font-bold">{post.title}</span>
              <button className="pointer" onClick={() => handleDelete(post._id)}>
                ❌
              </button>
            </div>
          )
        })}
    </div>
  )
}
export default UserPosts
