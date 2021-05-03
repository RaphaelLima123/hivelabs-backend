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
    try {
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
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message })
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { lastname, address } = req.body

      const usersService = new UsersService()

      const userUpdate = await usersService.updateUser({
        id,
        lastname,
        address
      })

      return res.json(userUpdate)
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message })
    }
  }

  async updateUserNickname(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const usersService = new UsersService()

      const userUpdate = await usersService.updateUserNickname({ id })

      return res.json(userUpdate)
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message })
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const usersService = new UsersService()
      const userDelete = await usersService.deleteUser({ id })

      res.json(userDelete)
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message })
    }
  }
}

export { UsersController }
