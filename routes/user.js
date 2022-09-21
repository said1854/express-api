import express from 'express';
const router = express.Router();
import {
    v4 as uuidv4
} from 'uuid';
uuidv4();
let users = [];

router.get('/', (req, res) => {
    res.send(users);
})


router.post('/', (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    });
    res.send(`User with the name ${user.firstName} added to the database`)
})


router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
        res.send(foundUser)
        console.log(req.params.id, foundUser)
    } else {
        console.log("User not found");
        res.send(`User with the id:${id} not found!`)
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id:${id} deleted from database`);
})

export default router;