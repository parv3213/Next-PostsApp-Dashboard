'use client'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {}
const Login = (props: Props) => {
  const session = useSession()
  const router = useRouter()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }

    const email = target.email.value
    const password = target.password.value

    try {
      signIn('credentials', {
        email,
        password,
      })
    } catch (error) {
      alert('There is some error')
    }
  }

  if (session.status === 'loading') {
    return <p className="text-center text-4xl text-bold animate-pulse">Loading...</p>
  }

  if (session.status === 'authenticated') router.push('/dashboard')

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-4 items-center mb-4">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="font-bold text-lg">Please sign in to see the dashboard.</p>
      </div>
      <form className="flex flex-col gap-5" autoComplete="new-password" onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" type="email" tailwindProperties="rounded-md" />
        <Input name="password" placeholder="Password" type="password" tailwindProperties="rounded-md" />
        <Button text="Login" tailwindProperties="w-full font-semibold p-5" type="submit" />
        <Button
          text="Login with Google"
          tailwindProperties="w-full font-semibold bg-[#a94b2a] p-5"
          onClick={() => {
            signIn('google')
          }}
        />
      </form>
      <span>- OR -</span>
      <Link href="/dashboard/register" className="pointer underline opacity-60">
        Create new account
      </Link>
    </div>
  )
}
export default Login
