import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LoanType {
  @PrimaryGeneratedColumn()
  loantype_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  loantype_name: string;

  @Column({ type: 'float', nullable: false })
  interest_rate: number;

  @Column({ type: 'int', nullable: false })
  value_of_package: number;

  @Column({ type: 'int', nullable: false })
  interest_day: number;
}
