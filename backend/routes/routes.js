import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
import { createUser, loginUser } from '../controllers/UserController.js'

const routerBlog = express.Router()
const routerUser = express.Router()

routerBlog.get('/', getAllBlogs)
routerBlog.get('/:id', getBlog)
routerBlog.post('/', createBlog)
routerBlog.put('/:id', updateBlog)
routerBlog.delete('/:id', deleteBlog)


routerUser.post('/register', createUser)
routerUser.post('/login', loginUser)


export { routerBlog, routerUser}

