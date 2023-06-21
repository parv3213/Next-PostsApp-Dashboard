import User from '@/models/User'
import connect from '@/utils/db'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      name: 'Credentials',
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        try {
          await connect()

          const user = await User.findOne({ email: credentials.email })
          if (!user || !user.password) {
            throw new Error('Invalid credentials')
          }

          const isCorrectPassword = await bcrypt.compare(credentials.password, user.password)
          if (!isCorrectPassword) throw new Error('Invalid credentials')

          return user
        } catch (error) {
          throw new Error(JSON.stringify(error))
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
})

export { handler as GET, handler as POST }
