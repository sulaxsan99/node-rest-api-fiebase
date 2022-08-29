const express = require('express')

const booksRouter = require('./books')
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
res.send("buvbifuvf")
})
app.use('/books', booksRouter);

app.listen(5000,()=>{
    console.log(`server is running`)
})