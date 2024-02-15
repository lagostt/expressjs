
const express = require("express")

const app = express()

const loginHtml = `
    <html>
      <head>
        <title>Login</title>
      </head>
      <body>
        <h1>This is login page</h1>
      </body>
    </html>
  `

  const registerHtml = `
    <html>
      <head>
        <title>Register</title>
      </head>
      <body>
        <h1>This is register page</h1>
      </body>
    </html>
  `
app.get('/auth/login',(req,res)=>{
res.send(loginHtml)
})

app.get('/auth/register',(req,res)=>{
    res.send(registerHtml)
    })

  app.get('/post/:id(\\d+)', (req, res) => {
      const id = req.params.id;
      res.send(`Post ID: ${id}`);
});

app.get('/post/all', (req, res) => {

  const myArray = [{id:'1'}, {name:'amine'}, {lastname:'ben ammar'}, {age:'19'}];
  res.send(myArray);
});


app.listen(5000, ()=>{
    console.log("running on port 5000")
})