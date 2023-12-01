// import express from 'express';
const pg = require('pg')
const express = require('express')
const app = express()

// const config = new 

const client = new pg.Client({
        // host: 'postgres',
        // port: 8080,
        user: 'postgres',
        password: 'password',
        database: 'docker-first-image-db'
    }
)
client.connect()

.then(() => {

app.get('/', async (req, res) => {
    const result = await client.query('SELECT * FROM animals')
    
    res.send({'message': result.rows})
})
    
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
})

// .then(() => {

// // })
// })
