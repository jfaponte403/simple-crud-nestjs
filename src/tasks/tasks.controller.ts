import {Body, Controller, Get, Param, Post, Put, Query} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
    tasksService:TasksService

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService
    }

    @Get('/')
    @ApiOperation({summary: 'get all tasks'})
    @ApiResponse({status: 200, description: 'return all tasks'})
    @ApiResponse({status: 403, description: 'forbidden'})
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks()
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id))
    }

    @Post('/')
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task)
    }

    @Put('/')
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task)
    }
}
