import { AccountType } from 'src/account-type/entities/account-type.entity';
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

  @ManyToOne(() => AccountType, (accountType) => accountType.account_type_id)
  @JoinColumn({ name: 'account_type_id' })
  account_type_id: number;

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
