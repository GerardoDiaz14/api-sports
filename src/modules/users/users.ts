import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TypeUsersDto } from '../type_users/type_users';

export class UsersDto {
  @ApiPropertyOptional()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  rut: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  mail: string;

  @ApiProperty()
  type_users: TypeUsersDto;

  @ApiProperty()
  status: string | 'ACTIVE' | 'DESACTIVE'  | 'DELETED';

  created_at?: Date;
  updated_at?: Date | null;
}
