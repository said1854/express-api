import express from 'express'
import bodyParser from 'body-parser'
const app = express();
const PORT = 5000;
import usersRoutes from './routes/user.js'

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send({
        message: 'said'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})