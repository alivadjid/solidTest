const mongoose = require("mongoose");

const connectDB = async() => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/solid", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    })
    // console.log('conn',conn)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error){
    console.log(`Error:  ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB