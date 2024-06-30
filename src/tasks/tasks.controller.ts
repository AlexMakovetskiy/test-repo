import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksDto } from "./tasks.dto";

@Controller("tasks")
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Get("getTaskList")
	async getTasks() {
		return this.tasksService.getAll();
	}

	@Post("addNewTask")
	@UsePipes(new ValidationPipe())
	async createNewTask(@Body() dto: TasksDto) {
		return this.tasksService.createNewTask(dto);
	}

	@Patch("toggleTask/:id")
	async toggleCompletionTask(@Param("id") id: string) {
		console.log(id);

		return this.tasksService.toggleCompletion(id);
	}
}
