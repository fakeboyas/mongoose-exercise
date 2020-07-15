const express = require("express")
const app = express()

const PORT =5001
const {db} = require('./config')

app.use(express.json())
app.use(express.urlencoded(({extended:false})))

app.use('/api/movies', require('./routes/movies'));

app.get('/', (req,res)=>{
    res.send('demo')
})

if(db){
    console.log ('connect to database')
    app.listen(PORT,()=>    {
        console.log(`Server running on port ${PORT}`)
    })
}