import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Person } from 'src/persons/entities/person.entity';

@Entity()
export class Employee {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  username_employee: string;

  @Column({ type: 'varchar', length: 20 })
  position: string;

  @Column({ type: 'varchar', length: 20 })
  password: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  employee_salary: number;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'nation_card_id' })
  nation_card_id: Person;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;
}
