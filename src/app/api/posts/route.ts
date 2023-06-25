import Post from '@/models/Post'
import connect from '@/utils/db'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url)

  const username = url.searchParams.get('username')

  try {
    await connect()

    const posts = await Post.find(username ? { username } : {})

    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}

export const POST = async (request: NextRequest) => {
  try {
    await connect()

    const body = await request.json()

    const newPost = new Post(body)

    await newPost.save()

    return new NextResponse('Post has been created', { status: 201 })
  } catch (error) {
    console.log(error)
    return new NextResponse('Database error', { status: 500 })
  }
}
