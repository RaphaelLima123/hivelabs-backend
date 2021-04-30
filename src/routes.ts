import { Router } from 'express'
import { UsersController } from './controllers/UsersController'

const routes = Router()

const usersController = new UsersController()

routes.get('/users/:name/:lastname?', (req, res) => usersController.findUsers)
routes.get('/users/:nickname', (req, res) => usersController.findUser)
routes.post('/users', (req, res) => usersController.createUser)
routes.put('/users/:id', (req, res) => usersController.updateUser)
routes.delete('/users/:id', (req, res) => usersController.deleteUser)

export default routes
