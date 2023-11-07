import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Skill } from './skills.entity';

@Entity('curriculos')
export class Curriculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  born: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  education: string;

  @Column()
  func: string;

  @JoinTable()
  @ManyToMany(() => Skill, (skill) => skill.curriculo, { cascade: true })
  skills: Skill[];

  @Column()
  status: string;
}
