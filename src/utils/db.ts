import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!)
  } catch (error) {
    throw new Error('Database connection failed')
  }
}

export default connect
