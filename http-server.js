const express = require('express')
const app = express()
const port = process.env.PORT||3000
const users = [{name:'Payunin', age:'18'},{name:'user002', age:'322'}];

app.get('/', (req, res)=>{
  res.json(users);
})

app.listen(port)