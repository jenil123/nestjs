import { Module } from '@nestjs/common';
import { TodoService } from '../../services/todo/todo.service';
import { TodoController } from '../../controllers/todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from '../../schemas/todo/todo-schema';
import { RedisCache } from '../../toolbox/redis-cache.service';
import MyLogger from '../../toolbox/logger';

@Module({
  providers: [TodoService,
    RedisCache,
    MyLogger,
  ],
  controllers: [TodoController],
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  exports: [TodoService],
})
export class TodoModule { }
