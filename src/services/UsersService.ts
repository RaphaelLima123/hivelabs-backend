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

interface IUserUpdate {
  id: string
  lastname?: string
  address?: string
  nickname?: string
}

interface IUserDelete {
  id: string
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

  async updateUser({
    id,
    lastname,
    address,
    nickname
  }: IUserUpdate): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)
  }

  async deleteUser({ id }: IUserDelete): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne(id)

    await usersRepository.delete({ id: user.id })

    return user
  }
}

export { UsersService }
