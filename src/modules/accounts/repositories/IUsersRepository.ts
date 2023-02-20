import { ICreateUsersDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/Users";


interface IUsersRepository
{
  create(data: ICreateUsersDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  list(): Promise<User[]>
  findById(user_id: string): Promise<User>
}

export { IUsersRepository }