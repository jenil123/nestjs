import { Injectable } from "@nestjs/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TodoDocument = Todo & Document;

@Schema()
@Injectable()
export class Todo {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop()
    completedAt?: Date;

    @Prop({ required: true, default: Date.now() })
    createdAt: Date;

    @Prop({ required: true, default: Date.now() })
    updatedAt?: Date;

}

export const TodoSchema = SchemaFactory.createForClass(Todo);
