import { Body, Controller, Get, Inject, Param, Post, Request } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { PinoLogger } from 'nestjs-pino';
import { ApiController } from 'src/decorators/combine-decorators';
import { CreateTodoDto } from '../dto/todo/create-todo.dto';
import { TodoService } from '../services/todo/todo.service';

@ApiController('todo')
export class TodoController {

    constructor(private readonly service: TodoService, public readonly logger: PinoLogger) {
    }


    @ApiParam({
        name: "id",
        allowEmptyValue: false,
        examples: {
            id: {
                value: "62d924e789b664e1fb1c7c87"
            },
        }
    })
    @Get('/:id')
    protected async getTodoById(@Param('id') id: string) {
        this.logger.info('controller');
        return await this.service.findOne(id);
    }

    @ApiBody({ type: CreateTodoDto })
    @Post('/')
    protected async createTodo(@Body('data') data: CreateTodoDto) {
        return await this.service.create(data);
    }
}
