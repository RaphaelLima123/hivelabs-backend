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
    const user = await usersService.createUser({
      name,
      lastname,
      nickname,
      address,
      bio
    })

    return res.json(user)
  }

  // async updateUser(req: Request, res: Response) {
  //   const { id } = req.params

  //   const usersService = new UsersService()

  //   const user = usersService.update()

  //   return res.json(user)
  // }

  async updateUserNickname(req: Request, res: Response) {
    const { id } = req.params
    const { nickname } = req.body

    const usersService = new UsersService()

    const user = await usersService.updateUserNickname({ id, nickname })

    return res.json(user)
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params

    const usersService = new UsersService()
    const user = await usersService.deleteUser({ id })

    res.json(user)
  }
}

export { UsersController }
