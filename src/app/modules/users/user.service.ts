import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  const id = await generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_password as string
  }
  //default password
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to  user')
  }
  return createdUser
}
