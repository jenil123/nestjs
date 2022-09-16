import { ApiProperty } from "@nestjs/swagger"

export default class BaseTodoDto {
    @ApiProperty()
    title: string

    @ApiProperty()
    description: string
}