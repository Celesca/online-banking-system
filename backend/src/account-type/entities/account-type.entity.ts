import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountType {
  @PrimaryGeneratedColumn()
  account_type_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  account_type_name: string;

  @Column({ type: 'float', nullable: false })
  interest_rate: number;

  @Column({ type: 'int', nullable: false })
  interest_day: number;

  @Column({ type: 'int', nullable: false })
  value_of_package: number;
}
