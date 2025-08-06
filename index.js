require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/linkedin',(req,res)=>{
    res.send("Hello arpit");
})
app.get('/login',(req,res)=>{
    res.send('<a href="https://www.facebook.com">Login with facebook</a>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
