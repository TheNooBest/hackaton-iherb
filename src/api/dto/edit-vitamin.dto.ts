import { IsNumber, IsNotEmpty, IsString, IsArray } from 'class-validator';

export class EditSingleVitaminDto {
    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    public readonly count: number;
}

export class EditVitaminDto {
    @IsArray()
    public readonly payload: EditSingleVitaminDto[];
}
