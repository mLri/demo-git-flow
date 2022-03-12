const express = require('express')

const app = express()

require('dotenv').config()

app.use(express.json())

/* include router */
app.use('/api/v1', require('./routers'))

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))