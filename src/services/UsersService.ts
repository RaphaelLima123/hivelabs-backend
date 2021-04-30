import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import { UsersRepository } from '../repositories/UsersRepository'

interface IUserCreate {
  name: string
  lastname: string
  nickname: string
  address: string
  bio?: string
}

interface IUserFind {
  nickname: string
}

interface IUsersFind {
  name: string
  lastname?: string
}

class UsersService {
  async findUser({ nickname }: IUserFind): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)
    const user = await usersRepository.findOne({ where: { nickname } })

    return user
  }

  async findUsers({ name, lastname }: IUsersFind): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository)
    const users = await usersRepository.find({
      where: {
        name: name,
        lastname: lastname
      }
    })
    return users
  }

  async createUser({
    name,
    lastname,
    nickname,
    address,
    bio
  }: IUserCreate): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = usersRepository.create({
      name,
      lastname,
      nickname,
      address,
      bio
    })

    await usersRepository.save(user)
    return user
  }
}

export { UsersService }
