import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  person_id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  dateofbirth: Date;

  @Column()
  entrydate: Date;

  @Column()
  address: string;
}
