import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToMany(() => Curriculo, (curriculos) => curriculos.skills)
  curriculo: Curriculo[];
}
