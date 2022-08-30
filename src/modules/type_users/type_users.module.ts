import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TypeUsersController } from './type_users.controller';
import { TypeUsers } from './type_users.entity';
import { TypeUsersService } from './type_users.service';

@Module({
  providers: [TypeUsersService],
  controllers: [TypeUsersController],
  exports: [TypeUsersService],
  imports:[ TypeOrmModule.forFeature([TypeUsers]),
    forwardRef(() => AuthModule), 
  ]
})
export class TypeUsersModule {}