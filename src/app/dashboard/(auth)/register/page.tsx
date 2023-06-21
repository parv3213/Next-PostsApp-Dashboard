'use client'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {}
const Register = (props: Props) => {
  const router = useRouter()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      password: { value: string }
    }

    const name = target.name.value
    const email = target.email.value
    const password = target.password.value

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Context-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      res.status === 201 && router.push('/dashboard/login?success=Account has been created')
    } catch (error) {
      alert('There is some error')
    }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-4 items-center mb-4">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="font-bold text-lg">Please sign up to see the dashboard.</p>
      </div>
      <form className="flex flex-col gap-5" autoComplete="new-password" onSubmit={handleSubmit}>
        <Input name="name" placeholder="Username" type="text" tailwindProperties="rounded-md" />
        <Input name="email" placeholder="Email" type="email" tailwindProperties="rounded-md" />
        <Input name="password" placeholder="Password" type="password" tailwindProperties="rounded-md" />
        <Button text="Register" tailwindProperties="w-full font-semibold p-5" type="submit" />
      </form>
      <span>- OR -</span>
      <Link href="/dashboard/login" className="pointer underline opacity-60">
        Login with an existing account
      </Link>
    </div>
  )
}
export default Register
