import { IsEmail } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryColumn({ type: 'varchar', length: 13 })
  nation_card_id: string;

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

  @Column({ type: 'varchar', length: 100 })
  address: string;
}
