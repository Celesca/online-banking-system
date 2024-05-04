import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column({ type: 'varchar', length: 255 })
  position: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  salary: number;
}
