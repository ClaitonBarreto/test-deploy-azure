const app = require('express')()


app.get('/', (req,res)  => {
    res.send("APP FUNCIONANDO")
})

app.get('/novarota', (req,res) => {
    res.json({
        message: "NOVA ROTA"
    })
})

app.listen(process.env.PORT)