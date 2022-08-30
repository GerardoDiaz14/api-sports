import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TypeUsers } from '../type_users/type_users.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('text', {
    nullable: false,
    name: 'rut',
  })
  rut: string;

  @Column('text', {
    nullable: false,
    name: 'password',
  })
  password: string;

  @Column('text', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: false,
    name: 'lastname',
  })
  lastname: string;

  @Column('text', {
    nullable: false,
    name: 'phone',
  })
  phone: string;

  @Column('text', {
    nullable: false,
    name: 'mail',
  })
  mail: string;

  
  @ManyToOne(() => TypeUsers, (table: TypeUsers) => table.id_type_users, {})
  @JoinColumn({ name: 'id_edicion' })
  id_type_users: TypeUsers;
  
  @Column('enum', {
    nullable: false,
    default: 'ACTIVE',
    enum: ['ACTIVE','DESACTIVE', 'DELETED'],
    name: 'status',
  })
  status: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'now()',
    name: 'created_at',
  })
  created_at: Date;

  @Column('timestamp', {
    nullable: true,
    name: 'updated_at',
  })
  updated_at: Date | null;

  
}