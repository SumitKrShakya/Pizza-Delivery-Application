const express = require("express")
const path = require("path")
const app = express()

app.set("view engine", 'ejs')
app.use(express.static('public'))


app.get('/api', (req, res) => {
    res.json({ "thissucks": "connecting ReactJs to NodeJs" })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))