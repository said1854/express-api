import {
    v4 as uuidv4
} from 'uuid';
let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    });
    res.send(`User with the name ${user.firstName} added to the database`)
}
export const deleteUser = ('/', (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id:${id} deleted from database`);
})
export const getUsers = (req, res) => {
    res.send(users);
}
export const getUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
        res.send(foundUser)
        console.log(req.params.id, foundUser)
    } else {
        console.log("User not found");
        res.send(`User with the id:${id} not found!`)
    }
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    const {
        firstName,
        lastName,
        age
    } = req.body;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(user);
    console.log(`User with id:${id} has been updated`)
}