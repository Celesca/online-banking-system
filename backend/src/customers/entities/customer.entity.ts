import { Person } from 'src/persons/entities/person.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column({ type: 'int', nullable: false })
  customer_salary: number;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  person: Person;
  
}
