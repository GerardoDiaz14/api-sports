import { Module } from '@nestjs/common';
import { GlobalModule } from './shared/global.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeUsersModule } from './modules/type_users/type_users.module';
@Module({
  imports: [GlobalModule,
    AuthModule,
    UsersModule,
    TypeUsersModule
  ],
  providers: [],
})
export class AppModule { }
