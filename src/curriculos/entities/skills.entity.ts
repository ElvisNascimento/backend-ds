import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Curriculo } from './curriculo.entity';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  level: string;

  @ManyToOne(() => Skill, (skill) => skill.curriculo)
  curriculo: Curriculo[];
}
