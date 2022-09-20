import express from 'express';
const router = express.Router();

const user = [{
    firstName: "John",
    lastName: "Doe",
    age: 28
}];

router.get('/', (req, res) => {
    res.send(user);
})

router.post('/', (req, res) => {
    console.log("POST ROUTE REACHED")
    console.log(req)
    res.send("POST ROUTE REACHED")
})


export default router;