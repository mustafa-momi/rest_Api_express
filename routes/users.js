import express, { json } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  paginatedResult,
} from "../controllers/users.js";
const router = express.Router();
import users from '../model/Users.js'


router.get("/:key", paginatedResult(users), (req, res) =>
  res.json(res.paginatedResult)
)

//gets all the users
router.get("/", getUsers);

//get user by Id
router.get("/:id", getUser);

//create user by Id
router.post("/", createUser);

//update user by Id
router.put("/:id", updateUser);

//delete User
router.delete("/:id", deleteUser);

// router.get('/search', (req, res) => {

//   const filters = req.query;
//   const filteredUsers = users.filter(user => {
//     let isValid = true;
//     for (key in filters) {
//       console.log(key, user[key], filters[key]);
//       isValid = isValid && user[key] == filters[key];
//     }
//     return isValid;
//   });
//   res.send(filteredUsers)
// })

export default router;
// module.exports = router
