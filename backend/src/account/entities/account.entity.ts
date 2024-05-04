import { Customer } from 'src/customers/entities/customer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  account_id: number;

  // @ManyToOne(() => accountType)

  @Column({ type: 'float', nullable: false })
  account_balance: number;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'datetime', nullable: true })
  closed_at: Date;

  @Column({ type: 'boolean', nullable: false, default: '1' })
  status: boolean;

  @ManyToOne(() => Customer, (customer) => customer.customer_id)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
