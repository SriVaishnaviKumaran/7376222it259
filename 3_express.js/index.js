const express = require('express')
const app = express ()
const PORT = 3000

app.get('/', (req,res) =>res.send('Thupakki vela seidhu Parthiban'))
app.get('/lawrence', (req,res) =>res.send('110 kilo weight thookura lawrence unna adikuradhu perusu illa '))
app.get('/onecredit', (req,res) =>res.send('Bro ellam oru alavukku dhaan'))


app.listen(PORT, () => console.log(
`Example app listening at http://localhost:${PORT}`))