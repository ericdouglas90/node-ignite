import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "../../../cars/useCases/listCategories/ListCategoriesUseCase";
import { ListUsersUseCase } from "./ListUsersUseCase";



class ListUsersController
{
  async handle(requet: Request, response: Response): Promise<Response>
  {
    const listUsersUseCase = container.resolve(ListUsersUseCase);
    
    const users = await listUsersUseCase.execute()

    return response.json(users);
  }
}

export { ListUsersController }