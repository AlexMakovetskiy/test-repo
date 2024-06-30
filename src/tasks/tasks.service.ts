import { Injectable } from "@nestjs/common";
import { TasksDto } from "./tasks.dto";

@Injectable()
export class TasksService {
	private tasks = [
		{
			id: 0,
			name: "Record",
			isDone: false,
		},
	];

	getAll() {
		return this.tasks;
	}

	createNewTask(dto: TasksDto) {
		const newTask = {
			id: this.tasks.length,
			name: dto.name,
			isDone: false,
		};

		this.tasks.push(newTask);

		return this.tasks;
	}

	toggleCompletion(id: string) {
		const task = this.tasks.find((task) => task.id === Number(id));

		if (!task) {
			return {
				error: "Task is not found",
			};
		}

		task.isDone = !task.isDone;

		return task;
	}
}
