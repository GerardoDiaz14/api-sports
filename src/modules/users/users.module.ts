import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
  imports:[ TypeOrmModule.forFeature([Users]),
    forwardRef(() => AuthModule), 
  ]
})
export class UsersModule {}