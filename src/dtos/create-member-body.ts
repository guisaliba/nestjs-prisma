import { IsNotEmpty, Length } from 'class-validator'

export class CreateMemberBody {
  @IsNotEmpty()
  @Length(5, 100, {
    message: 'Name length must be longer than or equal to 5 caracters.'
  })
  name: string;

  @IsNotEmpty({
    message: 'Member function should not be empty.'
  })
  function: string;
} 