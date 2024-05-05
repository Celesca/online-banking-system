import { Person } from 'src/persons/entities/person.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Person, (person) => person.person_id)
  @JoinColumn({ name: 'person_id' })
  persons: Person[];
}
