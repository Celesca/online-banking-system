import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person } from 'src/persons/entities/person.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column({ type: 'varchar', length: 255 })
  position: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  salary: number;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  person_id: Person;
}
