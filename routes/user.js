import express from 'express';
const router = express.Router();
import {
    v4 as uuidv4
} from 'uuid';
uuidv4();
const users = [];

router.get('/', (req, res) => {
    res.send(users);
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res.send('the get id route!')
})

router.post('/', (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    });
    res.send(`User with the name ${user.firstName} added to the database`)
})


export default router;