import { IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn({ type: 'int' })
  person_id: number;

  @Column({ type: 'varchar', length: 45 })
  firstname: string;

  @Column({ type: 'varchar', length: 45 })
  lastname: string;

  @IsEmail()
  @Column({ type: 'varchar', length: 60 })
  email: string;

  @Column({ type: 'varchar', length: 10 })
  phone: string;

  @Column({ type: 'datetime' })
  dateofbirth: Date;

  @CreateDateColumn()
  entrydate: Date;

  @Column({ type: 'varchar', length: 100 })
  address: string;
}
