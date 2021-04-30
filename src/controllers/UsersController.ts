import { Request, Response } from 'express'

class UsersController {
  async findUser(req: Request, res: Response) {}

  async findUsers(req: Request, res: Response) {}

  async createUser(req: Request, res: Response) {}

  async updateUser(req: Request, res: Response) {}

  async deleteUser(req: Request, res: Response) {}
}

export { UsersController }
