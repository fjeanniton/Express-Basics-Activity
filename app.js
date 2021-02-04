
const express = require('express')
const app  = express()
const port = 4000
const bal  = "750000"
const draw = "250"
const dep  = "250000"

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/balance', (req, res) => {
    res.send(`balance: $${bal}`)
})

app.get('/withdraw', (req, res) => { 
    res.send(`Withdraw: $${draw}`)
})

app.post(`substract`, (req, res) => {
    res.send()
})

app.get('/deposit', (req, res) => {
    res.send(`Deposit: $${dep}`)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


// app.put('/withdraw', function (req, res) {
//     res.send('Got a Withdraw request at /withdraw')
//   })

// app.put('/deposit', function (req, res) {
//     res.send('Got a Deposit request at /deposit')
//   }) 

