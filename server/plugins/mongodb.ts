import mongoose from 'mongoose'

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()

  try {
    if (mongoose.connection.readyState === 1) return
    
    await mongoose.connect(config.mongodbUri)
    console.log('Successfully connected to MongoDB Cluster')
  } catch (error) {
    console.log('ERROR: Failed to connect to MongoDB Cluster')
  }

})
