import { Person } from 'src/persons/entities/person.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryColumn({ type: 'string', length: 30 })
  customer_username: string;

  @Column({ type: 'string', length: 20 })
  customer_password: string;

  @Column({ type: 'int', nullable: false })
  customer_salary: number;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'nation_card_id' })
  national_card_id: Person;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;
}
