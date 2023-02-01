const express = require('express')
const userRouter=require('./users/users.router.js')

const app = express()

app.use(express.json())



app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Server working'
    })
})



app.use('/',userRouter)

app.listen(9001,()=>{
    console.log('Server working')
})

module.exports = app
