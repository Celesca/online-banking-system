import { Person } from 'src/persons/entities/person.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Customer {
  @PrimaryColumn({ type: 'varchar', length: 30, unique: true, nullable: false })
  customer_username: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  password: string;

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

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
