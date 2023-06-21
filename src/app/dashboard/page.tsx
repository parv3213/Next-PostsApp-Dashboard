'use client'
import { useSession } from 'next-auth/react'

interface Props {}
const Dashboard = (props: Props) => {
  const session = useSession()
  console.log(session)

  return <div>Dashboard</div>
}
export default Dashboard
