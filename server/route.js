import express from 'express';
import { registerUser, loginUser } from './Route/auth.js';
import { createMovie, updateMovie, deleteMovie, getMovie, getRamdomMovie, getAllMovie } from './Route/movies.js';
import { createList, deleteList, getList } from './Route/lists.js';
import { DeleteUser, getUser, getAllUser, getAllUserState } from './Route/users.js';
import verify from './verifyToken.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

//Movies
router.post("/movies/", createMovie);
router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);
router.get("/movies/find/:id", getMovie);
router.get("/movies/random", getRamdomMovie);
router.get("/movies/", getAllMovie);

//List
router.post("/lists/", createList);
router.delete("/lists/:id", deleteList);
router.get("/lists", verify, getList);
//User
// router.put("/:id", verify, updateUser);
router.delete("/:id", verify, DeleteUser);
router.get("/find/:id", getUser);
router.get("/", verify, getAllUser);
router.get("/stats", getAllUserState);
export default router;