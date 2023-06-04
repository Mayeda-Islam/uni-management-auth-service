import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    console.log(config.database_url as string)
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })

    console.log(`database connected successfully`)
  } catch (err) {
    console.log(`failed to load`, err)
  }
}

main()
