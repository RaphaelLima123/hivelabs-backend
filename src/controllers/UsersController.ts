import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {
  async findUser(req: Request, res: Response): Promise<Response> {
    const { nickname } = req.params

    const usersService = new UsersService()
    const user = await usersService.findUser({ nickname })

    return res.json(user)
  }

  async findUsers(req: Request, res: Response): Promise<Response> {
    const { name, lastname } = req.params

    const usersService = new UsersService()
    const users = await usersService.findUsers({ name, lastname })

    return res.json(users)
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, lastname, nickname, address, bio } = req.body

    const usersService = new UsersService()
    const createUser = await usersService.createUser({
      name,
      lastname,
      nickname,
      address,
      bio
    })

    return res.json(createUser)
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { lastname, address } = req.body

    const usersService = new UsersService()

    const userUpdate = await usersService.updateUser({
      id,
      lastname,
      address
    })

    return res.json(userUpdate)
  }

  async updateUserNickname(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { nickname } = req.body

    const usersService = new UsersService()

    const userUpdate = await usersService.updateUserNickname({ id, nickname })

    return res.json(userUpdate)
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const usersService = new UsersService()
    const userDelete = await usersService.deleteUser({ id })

    return res.json(userDelete)
  }
}

export { UsersController }
