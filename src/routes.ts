import { Router } from 'express'
import { UsersController } from './controllers/UsersController'

const routes = Router()

const usersController = new UsersController()

routes.get('/users/nickname/:nickname', usersController.findUser)
routes.get('/users/:name/:lastname?', usersController.findUsers)
routes.post('/users', usersController.createUser)
routes.put('/users/:id', usersController.updateUser)
routes.put('/users/nickname/:id', usersController.updateUserNickname)
routes.delete('/users/:id', usersController.deleteUser)

export default routes
