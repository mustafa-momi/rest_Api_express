import users from "../model/Users.js";
import db from '../database.js'

//we have to export all the functions we will define here..
export const getUsers = (req, res) => {
    res.send(users);
};

export const getUser = (req, res) => {
    const { id } = req.params;

    const found = users.find((user) => user.id === parseInt(id))
    res.send(found)
};

export const createUser = (req, res) => {
    let id = (users.length + 1);
    //   console.log(id);
    const newUser = req.body;

    if (!newUser.firstName)
        return res.send('fill out firstName plzz.')

    if (!newUser.lastName)
        return res.send('fill out lastName plzz.')

    if (!newUser.status)
        return res.send('fill out status plzz.')

    if (!newUser.age)
        return res.send('fill out age plzz.')

    if (!newUser.country)
        return res.send('fill out country plzz.')

    users.push({ id, ...newUser });
    res.send(`${req.body.firstName} Added to the Database.`);
};

export const updateUser = (req, res) => {
    const found = users.some((mem) => mem.id === parseInt(req.params.id));

    if (found) {
        const updUser = req.body;

        users.forEach((user) => {
            if (user.id === parseInt(req.params.id)) {
                user.firstName = updUser.firstName ? updUser.firstName : user.firstName;
                user.lastName = updUser.lastName ? updUser.lastName : user.lastName;
                user.status = updUser.status ? updUser.status : user.status;
                user.age = updUser.age ? updUser.age : user.age;
                user.country = updUser.country ? updUser.country : user.country;
                res.send(`User updated.`);
            }
        });
    } else res.status(400).json({ msg: `Member with id ${req.params.id} not found` });
    // res.send("update member")
};

export const deleteUser = (req, res) => {

    const found = users.some((mem) => mem.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: `User with ${req.params.id} deleted.`,
            users: users.filter((user) => user.id !== parseInt(req.params.id)),
        })
        // users = users.filter((user)=>user.id !== parseInt(req.params.id))

    } else res.status(400).json({ msg: `Member with id ${req.params.id} not found` });
};

export function paginatedResult(model) {
    return (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const searchField = req.query.search;

        const startIndex = (page - 1) * limit;
        const endIndex = (page * limit);
        const resultEmployees = {};

        //previous page 
        if (startIndex > 0) {
            resultEmployees.previous = {
                page: page - 1,
                limit: limit
            }
        }

        //next Page
        if (endIndex < model.length) {
            resultEmployees.next = {
                page: page + 1,
                limit: limit
            }
        }

        resultEmployees.data = model.slice(startIndex, endIndex)
        res.paginatedResult = resultEmployees;
        next()
    }
}

// export const postUser = (req, res) => {
//     const { username, password } = req.body;
//     try {
//         console.log('opper')
//         if (username && password) {
//             console.log("niichy")
//             db.promise().query(`INSERT INTO test VALUES(${username},${password})`)
//             res.status(200).send({ msg: 'user created.' })
            
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

export function searchResult() {

}