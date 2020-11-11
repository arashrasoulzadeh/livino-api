const express = require('express')
const authRoutes = require('./routes/auth')

const app = express()

app.use('/api/auth', authRoutes)


app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status || 500).json({
      error: err.message,
      status: err.status,
      errors: err.errors
    })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})