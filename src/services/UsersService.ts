import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import { UsersRepository } from '../repositories/UsersRepository'
import AppError from '../errors/AppError'

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

interface IUserFindReturn {
  name: string
  lastname: string
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
}

interface IUserUpdateReturn {
  nickname: string
  lastname: string
  address: string
}

interface IUserUpdateNickname {
  id: string
}

interface IUserUpdateNicknameReturn {
  nickname: string
}

interface IUserDelete {
  id: string
}

interface IUserDeleteReturn {
  message: string
}

class UsersService {
  async findUser({ nickname }: IUserFind): Promise<IUserFindReturn> {
    const usersRepository = getCustomRepository(UsersRepository)
    const user = await usersRepository.findOne({ where: { nickname } })

    return { name: user.name, lastname: user.lastname, nickname: user.nickname }
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
  }: IUserCreate): Promise<IUserCreate> {
    const usersRepository = getCustomRepository(UsersRepository)

    const checkIfUserExist = await usersRepository.findOne({
      where: { nickname }
    })

    if (checkIfUserExist) {
      throw new AppError('Usuário já existente')
    }
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
    address
  }: IUserUpdate): Promise<IUserUpdateReturn> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne(id)
    if (!user) {
      throw new AppError(`O usuário a ser alterado não existe`)
    }

    Object.assign(user, { lastname }, { address })

    await usersRepository.save(user)
    return {
      nickname: user.nickname,
      lastname: user.lastname,
      address: user.address
    }
  }

  async updateUserNickname({
    id
  }: IUserUpdateNickname): Promise<IUserUpdateNicknameReturn> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne(id)
    if (!user) {
      throw new AppError(`O usuário a ser alterado não existe`)
    }

    const nickname = user.nickname

    Object.assign(user, { nickname })

    await usersRepository.save(user)
    return { nickname: user.nickname }
  }

  async deleteUser({ id }: IUserDelete): Promise<IUserDeleteReturn> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne(id)
    if (!user) {
      throw new AppError(`O usuário a ser deletado não existe`)
    }

    await usersRepository.delete({ id: user.id })
    return { message: 'Usuário deletado com sucesso!' }
  }
}

export { UsersService }
