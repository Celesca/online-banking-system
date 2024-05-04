import { Account } from 'src/account/entities/account.entity';
import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  transaction_id: number;

  @ManyToOne(
    () => TransactionType,
    (transactionType) => transactionType.transaction_type_id,
  )
  @JoinColumn({ name: 'transaction_type_id' })
  transaction_type_id: number;

  @Column({ type: 'float', nullable: false })
  amount: number;

  @CreateDateColumn()
  transaction_date: Date;

  @ManyToOne(() => Account, (account) => account.account_id)
  @JoinColumn({ name: 'origin_id' })
  origin_id: number;

  @ManyToOne(() => Account, (account) => account.account_id)
  @JoinColumn({ name: 'destination_id' })
  destination_id: number;
}
