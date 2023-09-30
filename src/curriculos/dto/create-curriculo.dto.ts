import { IsString } from 'class-validator';
export class CreateCurriculoDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly cpf: string;

  @IsString()
  readonly born: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly education: string;

  @IsString()
  readonly func: string;

  @IsString({ each: true })
  readonly skills: string[];
}
