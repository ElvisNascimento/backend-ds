import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';
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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDto)
  readonly skills: SkillDto[];
  
  // @IsString()
  readonly status: string;
}
export class SkillDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly level: string;
  @IsString()
  readonly description: string;
}
