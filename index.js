const express = require("express")
const app = express()

const port = 3000


app.use(express.json())
const datasource = require('./connect').datasource

const postRoute = require('./routes/post.route')
const categoryRoute = require('./routes/category.route')

app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

app.listen(port, ()=>{
    console.log("app is listening on port 3000")
})