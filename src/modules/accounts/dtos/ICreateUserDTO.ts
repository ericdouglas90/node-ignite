interface ICreateUsersDTO
{
  name: string;
  password: string;
  email: string;
  driver_license: string;
  avatar?: string;
  id?: string;
}

export { ICreateUsersDTO }