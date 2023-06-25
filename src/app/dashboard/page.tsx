'use client'

import CreatePost from '@/components/CreatePost'
import UserPosts from '@/components/UserPosts'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

interface Props {}
const Dashboard = (props: Props) => {
  const session = useSession()
  const router = useRouter()

  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      title: { value: string }
      desc: { value: string }
      img: { value: string }
      content: { value: string }
    }

    const title = target.title.value
    const desc = target.desc.value
    const img = target.img.value
    const content = target.content.value

    const username = session.data?.user?.name

    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Context-Type': 'application/json',
        },
        body: JSON.stringify({ title, desc, img, content, username }),
      })

      mutate()
    } catch (error) {
      alert('There is some error')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })

      mutate()
    } catch (error) {
      alert('There is some error')
    }
  }

  if (session.status === 'loading') {
    return <p className="text-center text-4xl text-bold animate-pulse">Loading...</p>
  }

  if (session.status === 'unauthenticated') router.push('/dashboard/login')

  if (session.status === 'authenticated')
    return (
      <div className="flex flex-rol justify-between gap-20 items-center">
        <UserPosts data={data} loading={isLoading} handleDelete={handleDelete} />
        <CreatePost handleSubmit={handleSubmit} />
      </div>
    )
}
export default Dashboard
