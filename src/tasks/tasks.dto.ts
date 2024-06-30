import { IsString } from "class-validator";

export class TasksDto {
	@IsString()
	name: string;
}
