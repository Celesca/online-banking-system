import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionType {
  @PrimaryGeneratedColumn()
  transaction_type_id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  trasnaction_type_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  associated_fee: number;

  @Column({ type: 'int', nullable: false })
  max_limit: number;

  @Column({ type: 'int', nullable: false })
  min_limit: number;
}
