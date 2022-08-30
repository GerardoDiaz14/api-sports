import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

// This should be a real class/interface representing a user entity
export type User = any;
const bcrypt = require("bcryptjs");
const rondasDeSal = 10;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) { }

  async compareAsync(param1: string, param2: string) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(param1, param2, function(err, res) {
            if (err) {
                 reject(err);
            } else {
                 resolve(res);
            }
        });
    });
  }

  async login(username: string, password: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({rut : username });
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Credenciales incorrectas',
        },
        400,
      );
    }
    /*
    HASEHO USAR AL CREAR
    bcrypt.hash(palabraSecretaTextoPlano, rondasDeSal, (err, palabraSecretaEncriptada) => {
      if (err) {
        console.log("Error hasheando:", err);
      } else {
        console.log("Y hasheada es: " + palabraSecretaEncriptada);
      }
    });
    */
    
    let compare = await this.compareAsync(password,user.password);
    if (compare == false) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Credenciales incorrectas',
        },
        400,
      );
    }
    
    return user;
  }
}