import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


@injectable()
class ListSpecificationsUseCase
{
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationRepository){}

  async execute(): Promise<Specification[]>
  {
    const speficications = await this.specificationsRepository.list();
    return speficications;
  }
}

export { ListSpecificationsUseCase }