import { Customer } from 'src/customers/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  loan_id: number;

  //   @ManyToOne
  //   loantype_id: number;

  @Column({ type: 'float', nullable: false })
  loan_amount: number;

  @Column({ type: 'float', nullable: false })
  current_loan: number;

  @Column({ type: 'datetime', nullable: false })
  start_date: Date;

  @Column({ type: 'datetime', nullable: false })
  end_date: Date;

  @Column({ type: 'boolean', nullable: false, default: '1' })
  status: boolean;

  @ManyToOne(() => Customer, (customer) => customer.customer_id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
